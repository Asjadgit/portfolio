import { useState } from "react";
import { FiDownload, FiMenu, FiX } from "react-icons/fi";
import "./Navbar.css";

const links = ["Home", "About", "Skills", "Projects", "Experience", "Contact"];

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

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
                        {links.map((link, index) => (
                            <li key={link}>
                                <a
                                    className={index === 0 ? "active" : ""}
                                    href={`#${link.toLowerCase()}`}
                                    onClick={() => setMenuOpen(false)}
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
