const TechBadge = ({ icon, customIcon, name }) => (
    <div className="hero-badge">
        {icon ? <img src={icon} alt="" /> : <span className="hero-badge-custom">{customIcon}</span>}
        <span>{name}</span>
    </div>
);

export default TechBadge;
