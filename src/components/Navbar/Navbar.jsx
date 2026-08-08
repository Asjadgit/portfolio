import { useEffect, useState } from "react";
import { FiDownload, FiMenu, FiX } from "react-icons/fi";
import "./Navbar.css";

const links = ["Home", "About", "Skills", "Projects", "Experience", "Contact"];

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState(() => {
        const hash = typeof window !== "undefined" ? window.location.hash.slice(1) : "";
        return links.find((link) => link.toLowerCase() === hash) || "Home";
    });

    useEffect(() => {
        let animationFrame;

        const updateActiveLink = () => {
            const marker = window.scrollY + Math.min(window.innerHeight * 0.28, 220);
            let current = "Home";

            links.forEach((link) => {
                const section = document.getElementById(link.toLowerCase());
                if (section && section.offsetTop <= marker) current = link;
            });

            if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
                current = "Contact";
            }

            setActiveLink(current);
        };

        const scheduleUpdate = () => {
            cancelAnimationFrame(animationFrame);
            animationFrame = requestAnimationFrame(updateActiveLink);
        };

        const initialSection = document.getElementById(window.location.hash.slice(1));
        if (initialSection) initialSection.scrollIntoView({ block: "start" });
        scheduleUpdate();
        window.addEventListener("scroll", scheduleUpdate, { passive: true });
        window.addEventListener("resize", scheduleUpdate);
        window.addEventListener("hashchange", scheduleUpdate);

        return () => {
            cancelAnimationFrame(animationFrame);
            window.removeEventListener("scroll", scheduleUpdate);
            window.removeEventListener("resize", scheduleUpdate);
            window.removeEventListener("hashchange", scheduleUpdate);
        };
    }, []);

    return (
        <nav className="site-nav">
            <div className="nav-shell">
                <a className="nav-logo" href="#home" aria-label="Asjad Naveed home">
                    AN<span>.</span>
                </a>

                <button
                    type="button"
                    className="nav-menu-button"
                    onClick={() => setMenuOpen((open) => !open)}
                    aria-expanded={menuOpen}
                    aria-label="Toggle navigation"
                >
                    {menuOpen ? <FiX /> : <FiMenu />}
                </button>

                <div className={`nav-content ${menuOpen ? "is-open" : ""}`}>
                    <ul className="nav-links">
                        {links.map((link) => (
                            <li key={link}>
                                <a
                                    className={activeLink === link ? "active" : ""}
                                    href={`#${link.toLowerCase()}`}
                                    onClick={() => {
                                        setActiveLink(link);
                                        setMenuOpen(false);
                                    }}
                                >
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <a className="nav-resume" href="/resume.pdf" download>
                        Resume <FiDownload aria-hidden="true" />
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
