import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        
        <p className="text-gray-400 text-sm">
          © 2026 Your Name. All Rights Reserved.
        </p>

        <div className="flex gap-5 mt-4 md:mt-0">
          <a
            href="https://github.com/padmini1405"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            <FaGithub size={24} />
          </a>

          <a
            href="https://www.linkedin.com/in/padmini-krishnawamy/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition duration-300"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;