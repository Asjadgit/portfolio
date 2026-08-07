import {
    FiActivity,
    FiCloudLightning,
    FiCode,
    FiDatabase,
    FiLayers,
    FiLink,
    FiMonitor,
    FiTable,
    FiTool,
} from "react-icons/fi";
import { FaPhp } from "react-icons/fa";
import { SiGithub, SiJavascript, SiPostman, SiTailwindcss } from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import laravel from "../assets/icons/laravel.svg";
import react from "../assets/icons/react.svg";
import vue from "../assets/icons/vue.svg";
import git from "../assets/icons/git.svg";
import mysql from "../assets/icons/mysql.svg";

const groups = [
    {
        title: "Backend Development",
        description: "Building robust APIs and server-side applications with Laravel & PHP.",
        Icon: FiLayers,
        skills: [
            { name: "Laravel", image: laravel, value: 95 },
            { name: "PHP", Icon: FaPhp, className: "skill-php", value: 90 },
            { name: "REST APIs", Icon: FiCloudLightning, value: 90 },
            { name: "JavaScript", Icon: SiJavascript, className: "skill-js", value: 75 },
        ],
    },
    {
        title: "Frontend Development",
        description: "Creating responsive and interactive user interfaces for great experiences.",
        Icon: FiMonitor,
        skills: [
            { name: "Vue.js", image: vue, value: 90 },
            { name: "React", image: react, value: 85 },
            { name: "JavaScript", Icon: SiJavascript, className: "skill-js", value: 80 },
            { name: "Tailwind CSS", Icon: SiTailwindcss, className: "skill-tailwind", value: 90 },
        ],
    },
    {
        title: "Database & APIs",
        description: "Designing efficient databases and integrating powerful APIs.",
        Icon: FiDatabase,
        skills: [
            { name: "MySQL", image: mysql, value: 90 },
            { name: "Database Design", Icon: FiTable, value: 85 },
            { name: "Query Optimization", Icon: FiActivity, value: 80 },
            { name: "API Integration", Icon: FiLink, value: 90 },
        ],
    },
    {
        title: "Tools & Workflow",
        description: "Tools and workflow I use to build, test and deliver products faster.",
        Icon: FiTool,
        skills: [
            { name: "Git", image: git, value: 90 },
            { name: "GitHub", Icon: SiGithub, className: "skill-github", value: 90 },
            { name: "VS Code", Icon: VscCode, className: "skill-vscode", value: 95 },
            { name: "Postman", Icon: SiPostman, className: "skill-postman", value: 85 },
        ],
    },
];

const technologies = [
    { name: "Laravel", image: laravel },
    { name: "PHP", Icon: FaPhp, className: "skill-php" },
    { name: "Vue.js", image: vue },
    { name: "React", image: react },
    { name: "MySQL", image: mysql },
    { name: "JavaScript", Icon: SiJavascript, className: "skill-js" },
    { name: "Tailwind", Icon: SiTailwindcss, className: "skill-tailwind" },
    { name: "Git", image: git },
];

const SkillIcon = ({ image, Icon, className = "" }) =>
    image ? <img src={image} alt="" /> : <Icon className={className} aria-hidden="true" />;

const Skills = () => (
    <section id="skills" className="skills-section">
        <div className="skills-dots skills-dots-left" aria-hidden="true" />
        <div className="skills-dots skills-dots-right" aria-hidden="true" />

        <div className="skills-shell">
            <header className="skills-header">
                <div className="skills-label"><FiCode aria-hidden="true" /> Skills</div>
                <h2>My Skills &amp; <span>Expertise</span></h2>
                <div className="skills-heading-line" aria-hidden="true" />
                <p>Technologies and tools I use to build scalable, performant<br /> and modern web applications.</p>
            </header>

            <div className="skills-grid">
                {groups.map(({ title, description, Icon, skills }) => (
                    <article className="skill-group" key={title}>
                        <div className="skill-group-heading">
                            <span className="skill-group-icon"><Icon aria-hidden="true" /></span>
                            <div><h3>{title}</h3><p>{description}</p></div>
                        </div>

                        <div className="skill-list">
                            {skills.map(({ name, image, Icon: ItemIcon, className, value }) => (
                                <div className="skill-row" key={name}>
                                    <span className="skill-item-name">
                                        <span className="skill-item-icon"><SkillIcon image={image} Icon={ItemIcon} className={className} /></span>
                                        {name}
                                    </span>
                                    <span className="skill-progress" aria-label={`${name}: ${value}%`}>
                                        <span style={{ width: `${value}%` }} />
                                    </span>
                                    <strong>{value}%</strong>
                                </div>
                            ))}
                        </div>
                    </article>
                ))}
            </div>

            <div className="skills-bottom-grid">
                <div className="skills-technologies-card">
                    <h3>Technologies I Work With</h3>
                    <div className="skills-technology-list">
                        {technologies.map(({ name, image, Icon, className }) => (
                            <div className="skills-technology" key={name}>
                                <span><SkillIcon image={image} Icon={Icon} className={className} /></span>
                                <strong>{name}</strong>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="skills-code-card">
                    <div className="skills-code-copy">
                        <h3>Clean Code. Better Solutions.</h3>
                        <p>I follow best practices and clean architecture principles to deliver maintainable, scalable and high-performance applications.</p>
                    </div>
                    <div className="skills-code-window" aria-label="Code example">
                        <div className="code-window-dots"><i /><i /><i /></div>
                        <pre><code>{`class Developer {
  const skills = [
    'Laravel', 'PHP', 'Vue.js',
    'React', 'MySQL', 'JavaScript'
  ];
  build() {
    return 'Clean Code. Better Solutions.';
  }
}`}</code></pre>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Skills;
