import { useState } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = (
    <>
      <a href="#home" className="hover:text-[#3453ED] dark:hover:text-[#5084FF] font-body">Inicio</a>
      <a href="#about-me" className="hover:text-[#3453ED] dark:hover:text-[#5084FF] font-body">Sobre mí</a>
      <a href="#stack" className="hover:text-[#3453ED] dark:hover:text-[#5084FF] font-body">Tecnologías</a>
      <a href="#projects" className="hover:text-[#3453ED] dark:hover:text-[#5084FF] font-body">Proyectos</a>
      <a href="#contact" className="hover:text-[#3453ED] dark:hover:text-[#5084FF] font-body">Contacto</a>
    </>
  );

  return (
    <nav className="w-full px-4 sm:px-6 md:px-8 py-4 flex items-center justify-between bg-[#F5F5F5] dark:bg-[#0A0A0A] text-[#1A1A1A] dark:text-white relative z-50">
      {/* Logo */}
      <span className="text-xl font-bold whitespace-nowra font-body text-[#3453ED] dark:text-[#5084FF]">PORTFOLIO</span>

      {/* Desktop nav */}
      <div className="hidden md:flex items-center space-x-6">
        {navLinks}
        <button onClick={toggleTheme}>
          {theme === 'dark' ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile buttons */}
      <div className="flex items-center md:hidden space-x-4">
        <button onClick={toggleTheme}>
          {theme === 'dark' ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
        </button>
        <button onClick={toggleMenu}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#FFFFFF] dark:bg-[#161616] border-t border-[#E0E0E0] dark:border-[#2A2A2A] px-6 py-4 flex flex-col items-start space-y-4 md:hidden z-40">
          {navLinks}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
