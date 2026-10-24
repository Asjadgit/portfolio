import nodemailer from "nodemailer";

const limits = { name: 80, email: 160, subject: 140, message: 3000 };
const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*\.[A-Za-z]{2,}$/;

// Best-effort per-instance limit; serverless instances do not share memory.
const RATE_LIMIT = { max: 5, windowMs: 10 * 60 * 1000 };
const recentRequests = new Map();

const isRateLimited = (ip) => {
    const now = Date.now();
    const timestamps = (recentRequests.get(ip) || []).filter((time) => now - time < RATE_LIMIT.windowMs);
    timestamps.push(now);
    recentRequests.set(ip, timestamps);
    if (recentRequests.size > 1000) recentRequests.delete(recentRequests.keys().next().value);
    return timestamps.length > RATE_LIMIT.max;
};

const isSameOrigin = (request) => {
    const origin = request.headers.origin;
    const host = request.headers["x-forwarded-host"] || request.headers.host;
    if (!origin || !host) return false;
    try {
        return new URL(origin).host === host;
    } catch {
        return false;
    }
};

const clean = (value, maxLength) =>
    typeof value === "string" ? value.trim().slice(0, maxLength) : "";

// Header fields (name, subject) must stay on a single line.
const cleanLine = (value, maxLength) =>
    clean(value, maxLength).replace(/\p{Cc}+/gu, " ").trim();

const escapeHtml = (value) =>
    value.replace(/[&<>'"]/g, (character) => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "'": "&#039;",
        '"': "&quot;",
    })[character]);

export default async function handler(request, response) {
    if (request.method !== "POST") {
        response.setHeader("Allow", "POST");
        return response.status(405).json({ message: "Method not allowed." });
    }

    if (!isSameOrigin(request)) {
        return response.status(403).json({ message: "Request not allowed." });
    }

    if (!String(request.headers["content-type"] || "").includes("application/json")) {
        return response.status(415).json({ message: "Unsupported request format." });
    }

    const ip = String(request.headers["x-forwarded-for"] || "").split(",")[0].trim() || "unknown";
    if (isRateLimited(ip)) {
        return response.status(429).json({ message: "Too many messages. Please try again later." });
    }

    const { contact_trap: trap = "" } = request.body || {};
    if (trap) {
        console.warn("Contact form honeypot triggered; message discarded.");
        return response.status(200).json({ message: "Thanks! Your message has been sent successfully." });
    }

    const name = cleanLine(request.body?.name, limits.name);
    const email = clean(request.body?.email, limits.email).toLowerCase();
    const subject = cleanLine(request.body?.subject, limits.subject);
    const message = clean(request.body?.message, limits.message);

    if (!name || !email || !subject || !message) {
        return response.status(400).json({ message: "Please complete every field." });
    }

    if (!emailPattern.test(email)) {
        return response.status(400).json({ message: "Please enter a valid email address." });
    }

    const gmailUser = process.env.GMAIL_USER;
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;
    const contactEmail = process.env.CONTACT_EMAIL || gmailUser;

    if (!gmailUser || !gmailAppPassword || !contactEmail) {
        console.error("Contact email environment variables are missing.");
        return response.status(500).json({ message: "Email service is not configured yet." });
    }

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: { user: gmailUser, pass: gmailAppPassword },
    });

    try {
        await transporter.sendMail({
            from: `Asjad Naveed Portfolio <${gmailUser}>`,
            to: contactEmail,
            replyTo: { name, address: email },
            subject: `Portfolio enquiry: ${subject}`,
            text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`,
            html: `
                <h2>New portfolio enquiry</h2>
                <p><strong>Name:</strong> ${escapeHtml(name)}</p>
                <p><strong>Email:</strong> ${escapeHtml(email)}</p>
                <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
                <hr />
                <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
            `,
        });

        return response.status(200).json({ message: "Thanks! Your message has been sent successfully." });
    } catch (error) {
        console.error("Unable to send contact email:", error);
        return response.status(500).json({ message: "Unable to send your message right now. Please try again." });
    }
}
