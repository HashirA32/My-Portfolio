import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
export default function HeroSection() {

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
    <>



<nav className= {`navBar absolute z-50 top-0 left-0 w-full p-0 shadow-md transition-all
   ${isScrolled ? "bg-white shadow-lg" : "bg-transparent"}`}>
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="logo">
         HA-Porfolio
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6 text-gray-300">
          <Link to="/"  className="action-btn">Projects</Link>
          <Link to="/"  className="action-btn">About Me</Link>
        
          <Link to="/"  className="action-btn text-white px-4 py-2 rounded-lg">@hashirofficiala32</Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="absolute top-0 left-0 w-42 h-80 bg-[#121212] p-9 pl-4
        shadow-md md:hidden flex flex-col space-y-4 text-[#f4b400]">
          <Link to="/"  className="hover:text-white">Design</Link>
          <Link to="/"  className="hover:text-white">Photos</Link>
          <Link to="/"  className="hover:text-white">About</Link>
          <div>
            <div>
          <button className="">hello@bazil.fr</button>
          </div>
          </div>
        </div>
      )}
    </nav>


    <div className="hero-text relative bg-[#121212] text-white">
      
      {/* Background Image */}
      <div className="hero-bg-img absolute inset-0 z-10"></div>

      {/* Foreground Image (Person) */}
      <div className="hero-my-img absolute inset-0 z-20"></div>

      {/* Hero Content */}
      <div className="relative text-center flex items-center content-center flex-col max-w-3xl mb-0 mt-35 ">
        <Link to="/" >
        <h1 className="text-9xl font-bold leading-tight relative">
          {/* Stroked Text (Above Foreground Image) */}
          <span 
            className="absolute left-0 right-0 text-transparent stroke-text z-30" 
            style={{ WebkitTextStroke: "2px grey", mixBlendMode: "difference" }}>
            Webdeveloper
          </span>
          {/* Filled Text (Behind Foreground Image) */}
          <span className="text-white-800  relative z-10">Webdeveloper</span> <br />
        </h1>
        
        </Link>
             <p className="w-[500px] text-lg text-gray-100 rounded-sm bg-[#e9b60e5b]  font-bold text-center p-1 relative z-30 mb-05 mt-2">
          My name is <span className="text-[#110c02] border-b-2">Hashir</span> and I help businesses build sleek, responsive websites as a freelance developer.</p>

        {/* CTA Buttons */}
        <div className="hero-CTA mt-2 flex justify-center space-x-4 relative z-30">
          <button className="hero-btn border border-black text-black mt-3 mb-5 px-6 py-2 font-bold
           rounded-lg  hover:text-white transition">You need a developer</button>
        </div>
      </div>
    </div>
    </>
  );
}
