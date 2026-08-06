const TechCard = ({ icon, name, className }) => {
    return (
        <div
            className={`
                absolute
                float
                ${className}
                bg-white
                rounded-2xl
                shadow-xl
                border
                border-slate-100
                p-4
                w-24
                h-24
                flex
                flex-col
                items-center
                justify-center
                hover:-translate-y-2
                hover:scale-110
                transition-all
            `}
        >
            <img
                src={icon}
                alt={name}
                className="w-10 h-10 object-contain"
            />

            <p className="text-xs mt-2 font-semibold">
                {name}
            </p>
        </div>
    );
};

export default TechCard;