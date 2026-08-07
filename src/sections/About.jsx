import {
    FiBox,
    FiBriefcase,
    FiCode,
    FiDownload,
    FiLayers,
    FiMonitor,
    FiUser,
    FiUsers,
} from "react-icons/fi";
import { FaPhp } from "react-icons/fa";
import { SiJavascript, SiTailwindcss } from "react-icons/si";
import laravel from "../assets/icons/laravel.svg";
import react from "../assets/icons/react.svg";
import vue from "../assets/icons/vue.svg";
import git from "../assets/icons/git.svg";
import mysql from "../assets/icons/mysql.svg";

const services = [
    {
        title: "CRM Systems",
        description: "Custom CRM solutions that help businesses manage leads, sales and clients.",
        Icon: FiMonitor,
    },
    {
        title: "SaaS Applications",
        description: "Scalable SaaS products with subscriptions, billing and multi-tenant architecture.",
        Icon: FiBox,
    },
    {
        title: "REST API Development",
        description: "Secure, fast and well-structured APIs for web and mobile applications.",
        Icon: FiCode,
    },
    {
        title: "Full Stack Applications",
        description: "Modern web applications using Laravel, React, Vue.js and MySQL.",
        Icon: FiLayers,
    },
];

const stats = [
    { value: "2+", label: "Years Experience", Icon: FiBriefcase },
    { value: "25+", label: "Projects Completed", Icon: FiCode },
    { value: "15+", label: "Happy Clients", Icon: FiUsers },
];

const technologies = [
    { name: "Laravel", image: laravel },
    { name: "PHP", Icon: FaPhp, className: "technology-php" },
    { name: "MySQL", image: mysql },
    { name: "Vue.js", image: vue },
    { name: "React", image: react },
    { name: "JavaScript", Icon: SiJavascript, className: "technology-js" },
    { name: "Tailwind CSS", Icon: SiTailwindcss, className: "technology-tailwind" },
    { name: "Git", image: git },
];

const About = () => (
    <section id="about" className="about-section">
        <div className="about-dots about-dots-left" aria-hidden="true" />
        <div className="about-dots about-dots-right" aria-hidden="true" />

        <div className="about-shell">
            <div className="about-copy">
                <div className="about-label"><FiUser aria-hidden="true" /> About Me</div>

                <h2>
                    Building scalable solutions<br />
                    with <span>clean code.</span>
                </h2>
                <div className="about-heading-line" aria-hidden="true" />

                <div className="about-text">
                    <p>
                        I&apos;m <strong>Asjad Naveed</strong>, a Full Stack Laravel Developer passionate about
                        building modern web applications, SaaS products and CRM systems that solve
                        real-world problems.
                    </p>
                    <p>
                        With 2+ years of experience, I specialize in Laravel, PHP, MySQL, Vue.js,
                        React and modern JavaScript. I focus on writing clean, maintainable code and
                        delivering high-performance applications with a great user experience.
                    </p>
                </div>

                <div className="about-stats">
                    {stats.map(({ value, label, Icon }) => (
                        <div className="about-stat" key={label}>
                            <span className="about-stat-icon"><Icon aria-hidden="true" /></span>
                            <span><strong>{value}</strong><small>{label}</small></span>
                        </div>
                    ))}
                </div>

                <a className="about-resume" href="/resume.pdf" download>
                    Download Resume <FiDownload aria-hidden="true" />
                </a>
            </div>

            <div className="about-services-wrap">
                <div className="about-abstract" aria-hidden="true">
                    <span className="abstract-ring abstract-ring-one" />
                    <span className="abstract-ring abstract-ring-two" />
                    <FiCode />
                </div>

                <div className="about-services">
                    <h3>What I Build</h3>
                    <div className="about-services-line" aria-hidden="true" />

                    <div className="about-service-list">
                        {services.map(({ title, description, Icon }) => (
                            <article className="about-service" key={title}>
                                <span className="about-service-icon"><Icon aria-hidden="true" /></span>
                                <div><h4>{title}</h4><p>{description}</p></div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>

            <div className="about-technologies">
                <strong>Technologies I Work With</strong>
                <div className="about-tech-list">
                    {technologies.map(({ name, image, Icon, className = "" }) => (
                        <div className="about-tech" key={name}>
                            {image ? <img src={image} alt="" /> : <Icon className={className} aria-hidden="true" />}
                            <span>{name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
);

export default About;
