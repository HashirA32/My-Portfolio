import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

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
        <a href="/" className="logo">
         
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6 text-gray-300">
          <a href="/" className="action-btn">Projects</a>
          <a href="/" className="action-btn">About Me</a>
        
          <a href="/" className="action-btn text-white px-4 py-2 rounded-lg">@hashirofficiala32</a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-[/121212] p-4 
        shadow-md md:hidden flex flex-col space-y-4 text-gray-300">
          <a href="/" className="hover:text-white">Design</a>
          <a href="/" className="hover:text-white">Photos</a>
          <a href="/" className="hover:text-white">About</a>
          <div className="flex items-center space-x-4 mt-4">
            <a href="/" className="text-gray-400 hover:text-white">FR</a>
            <a href="/" className="text-white font-semibold">EN</a>
          </div>
          <button className="bg-[/D4AF37] text-white px-4 py-2 rounded-lg">hello@bazil.fr</button>
        </div>
      )}
    </nav>


    <div className="relative h-100 bg-[#121212] text-white flex items-center justify-center overflow-hidden">
      
      {/* Background Image */}
      <div className="hero-bg-img absolute inset-0 z-0"></div>

      {/* Foreground Image (Person) */}
      <div className="hero-my-img absolute inset-0 z-20"></div>

      {/* Hero Content */}
      <div className="relative text-center max-w-3xl mb-0 mt-25 ">
        <p className="text-lg text-gray-100 bg-[#d4af3727] font-bold text-center relative z-30 mb-5">
          My name is Hashir and I am a freelance</p>
        <a href="/">
        <h1 className="text-8xl font-bold leading-tight relative">
          {/* Stroked Text (Above Foreground Image) */}
          <span 
            className="absolute left-0 right-0 text-transparent stroke-text z-30" 
            style={{ WebkitTextStroke: "1px grey", mixBlendMode: "difference" }}>
            Webdeveloper
          </span>
         

          {/* Filled Text (Behind Foreground Image) */}
          <span className="text-white-800  relative z-10">Webdeveloper</span> <br />
        </h1>
        </a>
        <p className="text-white text-lg mt-10 font-bold relative z-30"><i class="fa-solid fa-location-dot">
          </i> DIKhan KPK Pakistan.</p>

        {/* CTA Buttons */}
        <div className="mt-2 flex justify-center space-x-4 relative z-30">
          <button className="hero-btn border border-black text-black mt-3 mb-5 px-6 py-2 font-bold
           rounded-lg  hover:text-white transition">You need a developer</button>
        </div>
      </div>
    </div>
    </>
  );
}
