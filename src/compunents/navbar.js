import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <nav
        className={`navBar transition-all pt-2 border-b bg-background/10 backdrop-blur  ${
          isScrolled ? "shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center px-6 py-3">
          {/* Logo */}
          <Link to="/" className="logo text-black font-bold">
            HA-Porfolio
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6 text-gray-300">
            <Link to="/" className="action-btn hover:text-white">Projects</Link>
            <Link to="/" className="action-btn hover:text-white">About Me</Link>
            <Link
              to="/"
              className="action-btn text-white px-4 py-2 rounded-lg"
            >
              @hashirofficiala32
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="absolute top-full left-0 w-42 h-80 bg-[#121212] p-9 pl-4 shadow-md md:hidden flex flex-col space-y-4 text-[#f4b400]">
            <Link to="/" className="hover:text-white">Design</Link>
            <Link to="/" className="hover:text-white">Photos</Link>
            <Link to="/" className="hover:text-white">About</Link>
            <button className="hover:text-white">hello@bazil.fr</button>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;