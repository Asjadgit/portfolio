import { useEffect, useState } from "react";
import {
    FiArrowRight,
    FiBox,
    FiCheck,
    FiCode,
    FiDatabase,
    FiExternalLink,
    FiGitBranch,
    FiGlobe,
    FiClock,
    FiFileText,
    FiLayers,
    FiLock,
    FiMessageCircle,
    FiRefreshCw,
    FiServer,
    FiShield,
    FiUploadCloud,
    FiUser,
    FiUsers,
    FiX,
} from "react-icons/fi";
import { FaPhp } from "react-icons/fa";
import { SiCloudways, SiDigitalocean, SiWordpress } from "react-icons/si";
import projectImage from "../assets/images/razormail1.png";
import letskyImage from "../assets/images/letsky.png";
import laravel from "../assets/icons/laravel.svg";
import mysql from "../assets/icons/mysql.svg";
import vue from "../assets/icons/vue.svg";

const caseNav = [
    ["case-overview", "Overview", FiLayers],
    ["case-challenge", "The Challenge", FiShield],
    ["case-approach", "My Approach", FiGitBranch],
    ["case-architecture", "Architecture", FiServer],
    ["case-integrations", "Integrations", FiLinkIcon],
    ["case-impact", "Results / Impact", FiCheck],
    ["case-stack", "Tech Stack", FiCode],
];

function FiLinkIcon(props) {
    return <FiGlobe {...props} />;
}

const stack = [
    { name: "Laravel", image: laravel },
    { name: "PHP", Icon: FaPhp },
    { name: "MySQL", image: mysql },
    { name: "Vue.js", image: vue },
];

const letskyStack = [
    { name: "Laravel", image: laravel },
    { name: "PHP", Icon: FaPhp },
    { name: "MySQL", image: mysql },
    { name: "Laravel Queues", Icon: FiRefreshCw },
];

const CaseStudyModal = ({ onClose }) => {
    useEffect(() => {
        const previousOverflow = document.body.style.overflow;
        const closeOnEscape = (event) => event.key === "Escape" && onClose();
        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", closeOnEscape);
        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener("keydown", closeOnEscape);
        };
    }, [onClose]);

    const goToSection = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

    return (
        <div className="case-overlay" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
            <div className="case-modal" role="dialog" aria-modal="true" aria-labelledby="case-study-title">
                <button className="case-close" type="button" onClick={onClose} aria-label="Close case study"><FiX /></button>

                <aside className="case-sidebar">
                    <div className="case-sidebar-title"><strong>RazorMail CRM</strong><span>Case Study</span></div>
                    <nav aria-label="Case study sections">
                        {caseNav.map(([id, label, Icon], index) => (
                            <button type="button" className={index === 0 ? "active" : ""} onClick={() => goToSection(id)} key={id}>
                                <span><Icon aria-hidden="true" /></span>{label}
                            </button>
                        ))}
                    </nav>
                    <a href="https://razormail.com/" target="_blank" rel="noreferrer">Visit Live Site <FiExternalLink /></a>
                </aside>

                <div className="case-content">
                    <section id="case-overview" className="case-block case-intro">
                        <span className="case-kicker">SaaS / CRM</span>
                        <h2 id="case-study-title">RazorMail CRM</h2>
                        <p className="case-lead">Transforming a single-tenant open-source CRM into a production-ready multi-tenant SaaS platform.</p>
                        <img className="case-hero-image" src={projectImage} alt="RazorMail CRM product management dashboard" />
                        <h3><span>01.</span> Overview</h3>
                        <p>The client shared the open-source Krayin CRM codebase and asked our team to turn it into a multi-tenant platform where every customer would have an isolated database and a dedicated subdomain.</p>
                        <div className="case-meta-grid">
                            <div><FiUser /><span><small>Role</small><strong>Full Stack Laravel Developer</strong></span></div>
                            <div><FiGitBranch /><span><small>Core Conversion</small><strong>Approximately 1 Month</strong></span></div>
                            <div><FiBox /><span><small>Project Type</small><strong>Multi-Tenant SaaS CRM</strong></span></div>
                        </div>
                    </section>

                    <section id="case-challenge" className="case-block">
                        <h3><span>02.</span> The Challenge</h3>
                        <div className="case-split">
                            <ul className="case-check-list">
                                <li><FiCheck />Krayin was designed around a single application database.</li>
                                <li><FiCheck />Every tenant required a separate subdomain and isolated database.</li>
                                <li><FiCheck />Cloudways supported the primary application database but not the required tenant-database architecture.</li>
                                <li><FiCheck />The finished CRM also needed Twilio WhatsApp and WPForms integrations.</li>
                            </ul>
                            <div className="case-challenge-visual" aria-hidden="true">
                                <span><FiDatabase /></span><i /><b>CRM</b><i /><span><FiGlobe /></span>
                                <span><FiCode /></span><i /><b>API</b><i /><span><SiWordpress /></span>
                            </div>
                        </div>
                    </section>

                    <section id="case-approach" className="case-block">
                        <h3><span>03.</span> My Approach</h3>
                        <div className="case-approach-grid">
                            <article><FiCode /><h4>Code Study</h4><p>Studied Krayin&apos;s structure, service layer and database assumptions before changing its tenancy model.</p></article>
                            <article><FiLayers /><h4>Multi-Tenancy</h4><p>Redesigned the application so each subdomain resolves to its own isolated tenant database.</p></article>
                            <article><FiGitBranch /><h4>Dynamic Middleware</h4><p>Created middleware that identifies the tenant and switches the active database connection at runtime.</p></article>
                            <article><FiGlobe /><h4>Integration Design</h4><p>Designed APIs and services for Twilio WhatsApp and WPForms synchronization.</p></article>
                        </div>
                    </section>

                    <section id="case-architecture" className="case-block">
                        <h3><span>04.</span> Technical Architecture</h3>
                        <p>I proposed keeping the central application and main database on Cloudways while hosting isolated tenant databases on DigitalOcean. The middleware resolves the tenant from the subdomain, updates the Laravel database connection configured through <code>config/database.php</code> and environment variables, then routes the request to the correct database.</p>
                        <div className="architecture-flow">
                            <div><SiCloudways /><strong>Cloudways</strong><small>Main application & central DB</small></div>
                            <FiArrowRight />
                            <div><FiGitBranch /><strong>Tenant Middleware</strong><small>Resolve subdomain & switch DB</small></div>
                            <FiArrowRight />
                            <div><SiDigitalocean /><strong>DigitalOcean</strong><small>Isolated tenant databases</small></div>
                        </div>
                    </section>

                    <section id="case-integrations" className="case-block">
                        <h3><span>05.</span> Integrations</h3>
                        <div className="case-integration-grid">
                            <article><FiMessageCircle /><div><h4>Twilio WhatsApp</h4><p>Refactored the purchased WhatsApp package from Meta&apos;s APIs to Twilio while retaining its CRM workflows.</p></div></article>
                            <article><SiWordpress /><div><h4>WPForms Synchronization</h4><p>Designed CRM APIs and a service class used by the website plugin to securely synchronize form definitions and entries.</p></div></article>
                            <article><FiGitBranch /><div><h4>Dynamic Field Mapping</h4><p>Added CRM-side mapping between WPForms fields and lead attributes so each form could target the correct data.</p></div></article>
                            <article><FiDatabase /><div><h4>Lead Create / Update</h4><p>Built a form-entry API that creates or updates the specified lead whenever a mapped submission is received.</p></div></article>
                        </div>
                    </section>

                    <section id="case-impact" className="case-block">
                        <h3><span>06.</span> Results / Impact</h3>
                        <div className="case-results">
                            <div><strong>Isolated</strong><span>database per tenant</span></div>
                            <div><strong>Dynamic</strong><span>subdomain-based routing</span></div>
                            <div><strong>Connected</strong><span>Twilio and WPForms workflows</span></div>
                        </div>
                        <p>The resulting architecture delivered the tenant isolation the client requested without abandoning their Cloudways application. The solution met the client&apos;s requirements and created a scalable foundation for future CRM tenants and integrations.</p>
                    </section>

                    <section id="case-stack" className="case-block case-stack-section">
                        <h3><span>07.</span> Technology Stack</h3>
                        <div>
                            {stack.map(({ name, image, Icon }) => <span key={name}>{image ? <img src={image} alt="" /> : <Icon />}<strong>{name}</strong></span>)}
                            <span><SiCloudways /><strong>Cloudways</strong></span>
                            <span><SiDigitalocean /><strong>DigitalOcean</strong></span>
                            <span><SiWordpress /><strong>WordPress</strong></span>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

const letskyNav = [
    ["letsky-overview", "Overview", FiLayers],
    ["letsky-challenge", "The Challenge", FiShield],
    ["letsky-queues", "Queue Solution", FiRefreshCw],
    ["letsky-security", "Secure Storage", FiLock],
    ["letsky-architecture", "Architecture", FiServer],
    ["letsky-impact", "Results / Impact", FiCheck],
    ["letsky-stack", "Tech Stack", FiCode],
];

const LetSkyCaseStudyModal = ({ onClose }) => {
    useEffect(() => {
        const previousOverflow = document.body.style.overflow;
        const closeOnEscape = (event) => event.key === "Escape" && onClose();
        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", closeOnEscape);
        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener("keydown", closeOnEscape);
        };
    }, [onClose]);

    const goToSection = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

    return (
        <div className="case-overlay" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
            <div className="case-modal" role="dialog" aria-modal="true" aria-labelledby="letsky-case-title">
                <button className="case-close" type="button" onClick={onClose} aria-label="Close case study"><FiX /></button>

                <aside className="case-sidebar">
                    <div className="case-sidebar-title"><strong>LetSky Tourism</strong><span>Case Study</span></div>
                    <nav aria-label="LetSky case study sections">
                        {letskyNav.map(([id, label, Icon], index) => (
                            <button type="button" className={index === 0 ? "active" : ""} onClick={() => goToSection(id)} key={id}>
                                <span><Icon aria-hidden="true" /></span>{label}
                            </button>
                        ))}
                    </nav>
                    <a href="https://letskytourism.com/" target="_blank" rel="noreferrer">Visit Live Site <FiExternalLink /></a>
                </aside>

                <div className="case-content">
                    <section id="letsky-overview" className="case-block case-intro">
                        <span className="case-kicker">Travel / Visa Operations</span>
                        <h2 id="letsky-case-title">LetSky Tourism</h2>
                        <p className="case-lead">A role-based visa operations platform built for clients, agencies, staff and administrators.</p>
                        <img className="case-hero-image letsky-case-image" src={letskyImage} alt="LetSky Tourism visa applications dashboard" />
                        <h3><span>01.</span> Overview</h3>
                        <p>LetSky Tourism is a Dubai-based travel agency that previously relied on another immigration website for its operations. Our team built a dedicated platform where clients, agencies, staff and administrators could work in one system with permissions tailored to their roles.</p>
                        <div className="case-meta-grid">
                            <div><FiUser /><span><small>Role</small><strong>Full Stack Laravel Developer</strong></span></div>
                            <div><FiUsers /><span><small>Users</small><strong>Admin, Staff, Agency & Client</strong></span></div>
                            <div><FiFileText /><span><small>Project Type</small><strong>Visa Operations Portal</strong></span></div>
                        </div>
                    </section>

                    <section id="letsky-challenge" className="case-block">
                        <h3><span>02.</span> The Challenge</h3>
                        <div className="case-split">
                            <ul className="case-check-list">
                                <li><FiCheck />Each visa application required approximately 10–12 confidential images or PDF documents.</li>
                                <li><FiCheck />Concurrent submissions from multiple agencies exhausted server resources and caused request timeouts.</li>
                                <li><FiCheck />A failed request discarded the application process, forcing users to enter everything again.</li>
                                <li><FiCheck />Documents stored inside the Laravel application needed stronger access isolation and privacy controls.</li>
                            </ul>
                            <div className="letsky-challenge-visual" aria-hidden="true">
                                <span><FiUsers /></span><FiArrowRight /><span><FiUploadCloud /></span><FiArrowRight /><span><FiServer /></span>
                                <strong>Concurrent visa applications overloaded synchronous uploads</strong>
                            </div>
                        </div>
                    </section>

                    <section id="letsky-queues" className="case-block">
                        <h3><span>03.</span> Queue-Based Processing</h3>
                        <p>I moved the document-processing workflow out of the web request and into Laravel jobs. Application data is saved immediately, each document receives its own database record, and uploads continue asynchronously without keeping the user&apos;s browser request open.</p>
                        <div className="case-approach-grid letsky-approach-grid">
                            <article><FiFileText /><h4>Persist Application</h4><p>Save the visa application first so a later processing failure never removes the user&apos;s entered data.</p></article>
                            <article><FiDatabase /><h4>Track Documents</h4><p>Create separate database records for every image or PDF and maintain its processing state.</p></article>
                            <article><FiRefreshCw /><h4>Dispatch Jobs</h4><p>Process document uploads in supervised background jobs instead of a single synchronous request.</p></article>
                            <article><FiClock /><h4>Resume Safely</h4><p>If workers stop, pending jobs remain stored and continue when the supervisor starts again.</p></article>
                        </div>
                    </section>

                    <section id="letsky-security" className="case-block">
                        <h3><span>04.</span> Secure Document Storage</h3>
                        <div className="case-integration-grid">
                            <article><SiDigitalocean /><div><h4>DigitalOcean Spaces</h4><p>Moved confidential visa documents outside the Laravel application, reducing application storage and separating private assets from public files.</p></div></article>
                            <article><FiLock /><div><h4>Private Objects</h4><p>Documents remain private and cannot be opened through a permanent public URL.</p></div></article>
                            <article><FiUser /><div><h4>Ownership Authorization</h4><p>The application verifies that the authenticated user is allowed to access the requested document.</p></div></article>
                            <article><FiClock /><div><h4>Expiring Signed URLs</h4><p>Authorized users receive temporary signed links that expire automatically and are regenerated when needed.</p></div></article>
                        </div>
                    </section>

                    <section id="letsky-architecture" className="case-block">
                        <h3><span>05.</span> Technical Architecture</h3>
                        <div className="architecture-flow letsky-architecture-flow">
                            <div><FiFileText /><strong>Visa Application</strong><small>Save form data immediately</small></div>
                            <FiArrowRight />
                            <div><FiRefreshCw /><strong>Database Queue</strong><small>Persist and supervise upload jobs</small></div>
                            <FiArrowRight />
                            <div><SiDigitalocean /><strong>Private Spaces</strong><small>Store documents securely</small></div>
                        </div>
                        <p className="case-architecture-note">The user-facing request finishes quickly while workers process documents independently. Queue persistence provides recovery, and signed URLs enforce short-lived, authorized access to every stored file.</p>
                    </section>

                    <section id="letsky-impact" className="case-block">
                        <h3><span>06.</span> Results / Impact</h3>
                        <div className="case-results">
                            <div><strong>Reliable</strong><span>uploads survive worker restarts</span></div>
                            <div><strong>Scalable</strong><span>concurrent agency submissions</span></div>
                            <div><strong>Private</strong><span>expiring document access</span></div>
                        </div>
                        <p>The queue architecture removed the timeout-driven data loss that affected agency users. Applications remain saved even when background processing pauses, server load is controlled, and confidential documents are no longer exposed through the Laravel application&apos;s local storage.</p>
                    </section>

                    <section id="letsky-stack" className="case-block case-stack-section">
                        <h3><span>07.</span> Technology Stack</h3>
                        <div>
                            {letskyStack.map(({ name, image, Icon }) => <span key={name}>{image ? <img src={image} alt="" /> : <Icon />}<strong>{name}</strong></span>)}
                            <span><SiDigitalocean /><strong>DigitalOcean Spaces</strong></span>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

const Projects = () => {
    const [activeCaseStudy, setActiveCaseStudy] = useState(null);

    return (
        <section id="projects" className="projects-section">
            <div className="projects-dots projects-dots-left" aria-hidden="true" />
            <div className="projects-dots projects-dots-right" aria-hidden="true" />
            <div className="projects-shell">
                <header className="projects-header">
                    <div className="projects-label"><FiLayers /> Projects</div>
                    <h2>Projects I&apos;m <span>Proud Of</span></h2>
                    <div className="projects-heading-line" />
                    <p>Production systems where I solved complex architecture, performance,<br /> deployment and integration problems.</p>
                </header>

                <div className="projects-filters" aria-label="Project categories">
                    <span className="active">All Projects</span><span>SaaS / CRM</span><span>Web Applications</span>
                </div>

                <article className="project-card">
                    <div className="project-image-wrap"><img src={projectImage} alt="RazorMail CRM dashboard interface" /></div>
                    <div className="project-summary">
                        <span className="project-type">SaaS / CRM</span>
                        <h3>RazorMail CRM</h3>
                        <p>Converted an open-source single-tenant CRM into a multi-tenant SaaS platform with isolated databases, subdomains, Twilio WhatsApp and WPForms synchronization.</p>
                        <div className="project-stack">
                            {stack.map(({ name, image, Icon }) => <span key={name}>{image ? <img src={image} alt="" /> : <Icon />}{name}</span>)}
                        </div>
                        <div className="project-actions">
                            <button type="button" onClick={() => setActiveCaseStudy("razormail")}>View Case Study <FiArrowRight /></button>
                            <a href="https://razormail.com/" target="_blank" rel="noreferrer">Live Site <FiExternalLink /></a>
                        </div>
                    </div>
                </article>

                <article className="project-card">
                    <div className="project-image-wrap"><img src={letskyImage} alt="LetSky Tourism visa applications dashboard" /></div>
                    <div className="project-summary">
                        <span className="project-type">Travel / Visa Operations</span>
                        <h3>LetSky Tourism</h3>
                        <p>Built a role-based visa operations portal with resilient queued document processing, private DigitalOcean Spaces storage and temporary signed URLs.</p>
                        <div className="project-stack">
                            {letskyStack.map(({ name, image, Icon }) => <span key={name}>{image ? <img src={image} alt="" /> : <Icon />}{name}</span>)}
                        </div>
                        <div className="project-actions">
                            <button type="button" onClick={() => setActiveCaseStudy("letsky")}>View Case Study <FiArrowRight /></button>
                            <a href="https://letskytourism.com/" target="_blank" rel="noreferrer">Live Site <FiExternalLink /></a>
                        </div>
                    </div>
                </article>
            </div>
            {activeCaseStudy === "razormail" && <CaseStudyModal onClose={() => setActiveCaseStudy(null)} />}
            {activeCaseStudy === "letsky" && <LetSkyCaseStudyModal onClose={() => setActiveCaseStudy(null)} />}
        </section>
    );
};

export default Projects;
