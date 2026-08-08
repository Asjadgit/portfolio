import profileImage from "../assets/images/profile/profile.png";
import TechBadge from "./TechBadge ";
import laravel from "../assets/icons/laravel.svg";
import react from "../assets/icons/react.svg";
import vue from "../assets/icons/vue.svg";
import git from "../assets/icons/git.svg";
import mysql from "../assets/icons/mysql.svg";
import {
    FiArrowUpRight,
    FiBriefcase,
    FiCode,
    FiDownload,
    FiUsers,
} from "react-icons/fi";
import { FaPhp } from "react-icons/fa";

const stats = [
    { value: "2+", label: "Years Experience", Icon: FiBriefcase },
    { value: "25+", label: "Projects Completed", Icon: FiCode },
    { value: "15+", label: "Happy Clients", Icon: FiUsers },
];

const Hero = () => {
    return (
        <section id="home" className="hero-section">
            <div className="hero-dot-field hero-dot-field-left" aria-hidden="true" />
            <div className="hero-dot-field hero-dot-field-right" aria-hidden="true" />

            <div className="hero-shell">
                <div className="hero-copy">
                    <div className="hero-intro"><span aria-hidden="true">👋</span> Hi, I&apos;m</div>

                    <h1>Asjad Naveed</h1>

                    <h2>
                        <span>Full Stack</span>{" "}
                        <span className="hero-role">
                            Laravel Developer
                            <svg viewBox="0 0 320 18" aria-hidden="true">
                                <path d="M6 13C88 3 229 2 314 10" />
                            </svg>
                        </span>
                    </h2>

                    <p className="hero-description">
                        I design and develop scalable SaaS platforms, enterprise CRM systems, REST APIs and modern web applications using Laravel, React, Vue.js, Python and MySQL, with a strong focus on clean architecture, performance and user experience.
                    </p>

                    <div className="hero-actions">
                        <a
                            className="hero-primary-button"
                            href="https://www.fiverr.com/asjad_naveed/create-a-custom-website-for-your-business"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Hire Me on Fiverr <FiArrowUpRight aria-hidden="true" />
                        </a>
                        <a className="hero-secondary-button" href="/resume.pdf" download>
                            Download Resume <FiDownload aria-hidden="true" />
                        </a>
                    </div>

                    <div className="hero-badges" aria-label="Technology stack">
                        <TechBadge icon={laravel} name="Laravel" />
                        <TechBadge icon={react} name="React" />
                        <TechBadge icon={vue} name="Vue.js" />
                        <TechBadge customIcon={<FaPhp />} name="PHP" />
                        <TechBadge icon={mysql} name="MySQL" />
                        <TechBadge icon={git} name="Git" />
                    </div>

                    <div className="hero-stats">
                        {stats.map(({ value, label, Icon }) => (
                            <div className="hero-stat" key={label}>
                                <span className="hero-stat-icon"><Icon aria-hidden="true" /></span>
                                <span>
                                    <strong>{value}</strong>
                                    <small>{label}</small>
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="hero-visual" aria-label="Portrait of Asjad Naveed">
                    <div className="hero-visual-glow" aria-hidden="true" />
                    <div className="hero-center-panel" aria-hidden="true" />
                    <img src={profileImage} alt="Asjad Naveed" className="hero-portrait" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
