import { useState } from "react";

const Navbarone = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Features", href: "/features" },
        { name: "Pricing", href: "/pricing" },
        { name: "About", href: "/about" },
    ];

    return (
        <header className='fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 '>
            <div className="max-w-7xl mx-auto px-6 overflow-auto">
                <nav className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <a href="/" className="font-bold text-3xl text-[#ff3a3a] hover:text-red-500 transition-colors">
                        Logo
                    </a>
                    {/* Desktop Navigation */}
                    <div className="space-x-10 text-gray-600 items-center max-lg:hidden">
                        {navLinks.map((link) => (
                            <a 
                                key={link.name}
                                href={link.href} 
                                className="relative hover:text-black transition-colors duration-300
                                          after:absolute after:left-0 after:-bottom-1 after:h-0.5 
                                          after:w-0 hover:after:w-full after:bg-[#ff3a3a] 
                                          after:transition-all after:duration-300"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Login & Mobile Menu Button */}
                    <div className="flex items-center space-x-4">
                        {/* Desktop Login */}
                        <button className="max-lg:hidden text-white px-8 py-3 rounded-full bg-[#ff3a3a] 
                                         hover:bg-red-500 hover:shadow-lg hover:-translate-y-0.5 
                                         active:translate-y-0 transition-all duration-300">
                            Login
                        </button>

                        {/* Mobile Menu Button */}
                        <button 
                            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle menu"
                        >
                            <div className="w-6 h-6 relative">
                                <span className={`absolute left-0 block h-0.5 w-6 bg-black transform transition-all duration-300 ease-in-out
                                              ${isOpen ? 'rotate-45 top-3' : 'top-1'}`} />
                                <span className={`absolute left-0 block h-0.5 w-6 bg-black top-3 
                                              transition-all duration-200 ease-in-out
                                              ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
                                <span className={`absolute left-0 block h-0.5 w-6 bg-black transform transition-all duration-300 ease-in-out
                                              ${isOpen ? '-rotate-45 top-3' : 'top-5'}`} />
                            </div>
                        </button>
                    </div>
                </nav>

                {/* Mobile Menu */}
                <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out
                                ${isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'} `}>
                    <div className="flex flex-col items-center space-y-6 py-6">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-gray-600 hover:text-black hover:scale-105 transition-all duration-300"
                            >
                                {link.name}
                            </a>
                        ))}
                        <button className="text-white w-full max-w-xs py-3 rounded-full bg-[#ff3a3a] 
                                         hover:bg-red-500 hover:shadow-lg transition-all duration-300">
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbarone;