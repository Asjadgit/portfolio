import { FiArrowRight, FiCode, FiHeart, FiMail, FiMapPin } from "react-icons/fi";
import { SiGithub } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";

const quickLinks = ["Home", "About", "Skills", "Projects", "Experience", "Contact"];

const connections = [
    {
        label: "GitHub",
        value: "github.com/Asjadgit",
        href: "https://github.com/Asjadgit",
        Icon: SiGithub,
    },
    {
        label: "LinkedIn",
        value: "Connect on LinkedIn",
        href: "https://www.linkedin.com/in/asjad-naveed-702a39178",
        Icon: FaLinkedinIn,
    },
    {
        label: "Email",
        value: "Send a secure message",
        href: "#contact",
        Icon: FiMail,
    },
];

const Footer = () => (
    <footer className="site-footer">
        <div className="footer-card">
            <span className="footer-dots footer-dots-left" aria-hidden="true" />
            <span className="footer-dots footer-dots-right" aria-hidden="true" />

            <div className="footer-main">
                <div className="footer-about">
                    <a className="footer-logo" href="#home" aria-label="Back to home">AN<span>.</span></a>
                    <p>Full Stack Laravel Developer building scalable SaaS, CRM systems and modern web applications.</p>
                    <span className="footer-accent-line" aria-hidden="true" />
                    <div className="footer-location"><span><FiMapPin aria-hidden="true" /></span>Dera Ismail Khan, Pakistan</div>
                </div>

                <nav className="footer-links" aria-label="Footer navigation">
                    <h2>Quick Links</h2>
                    <span className="footer-title-line" aria-hidden="true" />
                    <ul>
                        {quickLinks.map((link) => (
                            <li key={link}>
                                <a href={`#${link.toLowerCase()}`}><FiArrowRight aria-hidden="true" />{link}</a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="footer-connect">
                    <h2>Connect</h2>
                    <span className="footer-title-line" aria-hidden="true" />
                    <div className="footer-connect-list">
                        {connections.map(({ label, value, href, Icon }) => {
                            const external = href.startsWith("http");
                            return (
                                <a key={label} href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>
                                    <span className="footer-connect-icon"><Icon aria-hidden="true" /></span>
                                    <span><strong>{label}</strong><small>{value}</small></span>
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} <strong>Asjad Naveed.</strong> All rights reserved.</p>
                <p><FiHeart aria-hidden="true" /> Thanks for visiting!</p>
                <p>Built with <strong>React &amp; Tailwind CSS</strong> <FiCode aria-hidden="true" /></p>
            </div>
        </div>
    </footer>
);

export default Footer;
