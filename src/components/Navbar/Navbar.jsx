import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/80  border-b border-gray-200">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
                    <h2 className="text-2xl font-bold tracking-wide cursor-pointer">
                        AN.
                    </h2>


                    <ul className="flex items-center gap-8 text-gray-700 font-medium">
                        <li className="cursor-pointer hover:text-black transition-all duration-300">Home</li>
                        <li className="cursor-pointer hover:text-black transition-all duration-300">About</li>
                        <li className="cursor-pointer hover:text-black transition-all duration-300">Skills</li>
                        <li className="cursor-pointer hover:text-black transition-all duration-300">Projects</li>
                        <li className="cursor-pointer hover:text-black transition-all duration-300">Experience</li>
                        <li className="cursor-pointer hover:text-black transition-all duration-300">Contact</li>
                    </ul>

                    <button className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-all duration-300 shadow-md">
                        Resume
                    </button>
            </div>

            
        </nav>
    )
}

export default Navbar