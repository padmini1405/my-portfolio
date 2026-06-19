import { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "About", id: "About" },
    { label: "Skills", id: "Skills" },
    { label: "Projects", id: "Projects" },
    { label: "Certifications", id: "Certifications" },
    { label: "Contact", id: "Contact" },
  ];

  return (
    <header
      className="
        fixed
        top-0
        left-0
        w-full
        z-50
        backdrop-blur-md
        bg-slate-900/80
        border-b
        border-white/10
      "
    >
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}

        <h1 className="font-bold text-xl md:text-2xl text-white">
          Padmini Krishnaswamy
        </h1>

        {/* Desktop Menu */}

        <div className="hidden md:flex gap-8 text-white">

          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={link.id}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              activeClass="text-indigo-400"
              className="cursor-pointer hover:text-indigo-400 transition"
            >
              {link.label}
            </Link>
          ))}

        </div>

        {/* Mobile Menu Button */}

        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <X size={28} />
          ) : (
            <Menu size={28} />
          )}
        </button>

      </nav>

      {/* Mobile Menu */}

      <div
        className={`
          md:hidden
          overflow-hidden
          transition-all
          duration-300
          ${
            menuOpen
              ? "max-h-96 border-t border-white/10"
              : "max-h-0"
          }
        `}
      >
        <div className="bg-slate-900/95 backdrop-blur-md">

          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={link.id}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              onClick={() => setMenuOpen(false)}
              className="
                block
                px-6
                py-4
                border-b
                border-white/5
                cursor-pointer
                text-white
                hover:bg-white/5
                hover:text-indigo-400
                transition
              "
            >
              {link.label}
            </Link>
          ))}

        </div>
      </div>

    </header>
  );
};

export default Navbar;