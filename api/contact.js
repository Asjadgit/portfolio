import nodemailer from "nodemailer";

const limits = { name: 80, email: 160, subject: 140, message: 3000 };
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const clean = (value, maxLength) =>
    typeof value === "string" ? value.trim().slice(0, maxLength) : "";

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

    const { company = "" } = request.body || {};
    if (company) return response.status(200).json({ message: "Message sent successfully." });

    const name = clean(request.body?.name, limits.name);
    const email = clean(request.body?.email, limits.email).toLowerCase();
    const subject = clean(request.body?.subject, limits.subject);
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
            replyTo: email,
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
