import { useState } from "react";
import {
    FiAlertCircle,
    FiCheckCircle,
    FiClock,
    FiMail,
    FiMapPin,
    FiMessageSquare,
    FiSend,
} from "react-icons/fi";

const initialForm = {
    name: "",
    email: "",
    subject: "",
    message: "",
    company: "",
};

const Contact = () => {
    const [form, setForm] = useState(initialForm);
    const [status, setStatus] = useState({ type: "idle", message: "" });

    const handleChange = ({ target: { name, value } }) => {
        setForm((current) => ({ ...current, [name]: value }));
        if (status.type !== "idle") setStatus({ type: "idle", message: "" });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setStatus({ type: "loading", message: "Sending your message..." });

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });
            const result = await response.json();

            if (!response.ok) throw new Error(result.message || "Unable to send your message.");

            setForm(initialForm);
            setStatus({ type: "success", message: result.message });
        } catch (error) {
            setStatus({
                type: "error",
                message: error.message || "Something went wrong. Please email me directly.",
            });
        }
    };

    return (
        <section id="contact" className="contact-section">
            <div className="contact-dots contact-dots-left" aria-hidden="true" />
            <div className="contact-dots contact-dots-right" aria-hidden="true" />

            <div className="contact-shell">
                <header className="contact-header">
                    <span className="contact-label"><FiMessageSquare aria-hidden="true" /> Contact</span>
                    <h2>Let&apos;s Build Something <span>Great.</span></h2>
                    <p>Have a project in mind or need help with an existing application? Send me a message.</p>
                    <span className="contact-heading-line" aria-hidden="true" />
                </header>

                <div className="contact-grid">
                    <div className="contact-info">
                        <span className="contact-eyebrow">GET IN TOUCH</span>
                        <h3>Ready to turn your idea into a reliable product?</h3>
                        <p>I&apos;m available for Laravel, SaaS, CRM, API integration and full-stack development projects.</p>

                        <div className="contact-detail-list">
                            <div className="contact-detail">
                                <span><FiMail aria-hidden="true" /></span>
                                <div><small>Email</small><strong>Send through the secure form</strong></div>
                            </div>
                            <div className="contact-detail">
                                <span><FiMapPin aria-hidden="true" /></span>
                                <div><small>Location</small><strong>Dera Ismail Khan, Pakistan</strong></div>
                            </div>
                            <div className="contact-detail">
                                <span><FiClock aria-hidden="true" /></span>
                                <div><small>Response time</small><strong>Usually within 24 hours</strong></div>
                            </div>
                        </div>

                        <div className="contact-availability"><i aria-hidden="true" /> Available for new opportunities</div>
                    </div>

                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="contact-form-row">
                            <label>
                                Your Name
                                <input name="name" value={form.name} onChange={handleChange} placeholder="John Doe" maxLength="80" required />
                            </label>
                            <label>
                                Email Address
                                <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="john@example.com" maxLength="160" required />
                            </label>
                        </div>

                        <label>
                            Subject
                            <input name="subject" value={form.subject} onChange={handleChange} placeholder="How can I help you?" maxLength="140" required />
                        </label>

                        <label>
                            Message
                            <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell me about your project..." rows="6" maxLength="3000" required />
                        </label>

                        <label className="contact-honeypot" aria-hidden="true">
                            Company
                            <input name="company" value={form.company} onChange={handleChange} tabIndex="-1" autoComplete="off" />
                        </label>

                        <button type="submit" disabled={status.type === "loading"}>
                            {status.type === "loading" ? "Sending..." : "Send Message"}
                            <FiSend aria-hidden="true" />
                        </button>

                        {status.type !== "idle" && status.type !== "loading" && (
                            <p className={`contact-status contact-status-${status.type}`} role="status">
                                {status.type === "success" ? <FiCheckCircle aria-hidden="true" /> : <FiAlertCircle aria-hidden="true" />}
                                {status.message}
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
