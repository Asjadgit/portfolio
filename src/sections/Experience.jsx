import {
    FiBriefcase,
    FiCode,
    FiGitBranch,
    FiMapPin,
    FiMessageCircle,
} from "react-icons/fi";
import { FaPhp } from "react-icons/fa";
import { SiDigitalocean, SiJavascript } from "react-icons/si";
import laravel from "../assets/icons/laravel.svg";
import mysql from "../assets/icons/mysql.svg";
import vue from "../assets/icons/vue.svg";
import git from "../assets/icons/git.svg";

const experiences = [
    {
        period: "2024 – Present",
        type: "Full Time",
        title: "Backend / Full Stack Developer",
        company: "ITLinked",
        Icon: FiBriefcase,
        description: "Building and maintaining scalable Laravel products, including RazorMail CRM and the LetSky Tourism visa operations platform.",
        highlights: [
            "Multi-tenant architecture and database isolation",
            "REST APIs and third-party integrations",
            "Queue-based document processing and recovery",
            "Twilio, WPForms and DigitalOcean Spaces",
            "Performance optimization and clean architecture",
            "Working with Laravel, Vue.js and MySQL",
        ],
        technologies: [
            { name: "Laravel", image: laravel },
            { name: "PHP", Icon: FaPhp, className: "experience-php" },
            { name: "MySQL", image: mysql },
            { name: "Vue.js", image: vue },
            { name: "Twilio", Icon: FiMessageCircle, className: "experience-twilio" },
            { name: "Git", image: git },
            { name: "DigitalOcean", Icon: SiDigitalocean, className: "experience-digitalocean" },
        ],
    },
    {
        period: "Nov 2023 – Dec 2023",
        type: "Internship",
        title: "Laravel Developer Intern",
        company: "ITLinked",
        Icon: FiCode,
        description: "Started my professional Laravel journey by assisting with web application development and learning production development practices.",
        highlights: [
            "Assisted with Laravel modules and features",
            "Worked with controllers, models and Blade views",
            "Database queries and MySQL fundamentals",
            "REST API development and testing",
            "Bug fixing and application maintenance",
            "Git-based team collaboration",
        ],
        technologies: [
            { name: "Laravel", image: laravel },
            { name: "PHP", Icon: FaPhp, className: "experience-php" },
            { name: "MySQL", image: mysql },
            { name: "JavaScript", Icon: SiJavascript, className: "experience-js" },
            { name: "Git", image: git },
            { name: "Git Workflow", Icon: FiGitBranch, className: "experience-git" },
        ],
    },
];

const ExperienceIcon = ({ image, Icon, className = "" }) =>
    image ? <img src={image} alt="" /> : <Icon className={className} aria-hidden="true" />;

const Experience = () => (
    <section id="experience" className="experience-section">
        <div className="experience-dots experience-dots-left" aria-hidden="true" />
        <div className="experience-dots experience-dots-right" aria-hidden="true" />

        <div className="experience-shell">
            <header className="experience-header">
                <div className="experience-label"><FiBriefcase aria-hidden="true" /> Career Journey</div>
                <h2>Experience</h2>
                <p>My professional journey building scalable web applications and SaaS products.</p>
                <div className="experience-heading-line" aria-hidden="true" />
            </header>

            <div className="experience-timeline">
                {experiences.map(({ period, type, title, company, Icon, description, highlights, technologies }) => (
                    <article className="experience-entry" key={`${company}-${period}`}>
                        <div className="experience-date">
                            <strong>{period}</strong>
                            <span>{type}</span>
                        </div>

                        <span className="experience-timeline-dot" aria-hidden="true" />

                        <div className="experience-card">
                            <div className="experience-card-top">
                                <div className="experience-role">
                                    <span className="experience-role-icon"><Icon aria-hidden="true" /></span>
                                    <div>
                                        <h3>{title}</h3>
                                        <span className="experience-company">{company}</span>
                                    </div>
                                </div>
                                <span className="experience-location"><FiMapPin aria-hidden="true" /> Dera Ismail Khan, Pakistan</span>
                            </div>

                            <div className="experience-card-body">
                                <div className="experience-details">
                                    <p>{description}</p>
                                    <ul>
                                        {highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                                    </ul>
                                </div>

                                <div className="experience-technologies">
                                    {technologies.map(({ name, image, Icon: TechIcon, className }) => (
                                        <span key={name}>
                                            <ExperienceIcon image={image} Icon={TechIcon} className={className} />
                                            {name}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    </section>
);

export default Experience;
