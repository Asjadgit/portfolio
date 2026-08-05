import profile from "../assets/images/profile/image.png";

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center">
            <div className="max-w-7xl mx-auto px-8 w-full">

                <div className="grid grid-cols-2 gap-16 items-center">

                    {/* Left Side */}
                    <div>

                        <p className="text-lg text-gray-500 mb-4">
                            👋 Hi, I'm
                        </p>

                        <h1 className="text-6xl font-bold mb-4">
                            Asjad Naveed
                        </h1>

                        <h2 className="text-3xl text-gray-700 mb-6">
                            Full Stack Laravel Developer
                        </h2>

                        <p className="text-lg text-gray-600 leading-8 mb-8">
                            I build scalable CRM systems, SaaS applications,
                            REST APIs, and modern web experiences using
                            Laravel, React, Vue.js and MySQL.
                        </p>

                        <div className="flex gap-4">

                            <button className="bg-black text-white px-8 py-4 rounded-xl">
                                Hire Me
                            </button>

                            <button className="border border-black px-8 py-4 rounded-xl">
                                Download Resume
                            </button>

                        </div>

                    </div>

                    {/* Right Side */}

                    <div className="flex justify-center">

                        <img
                            src={profile}
                            alt="Asjad Naveed"
                            className="`w-[420px]` rounded-3xl"
                        />

                    </div>

                </div>

            </div>
        </section>
    );
};

export default Hero;