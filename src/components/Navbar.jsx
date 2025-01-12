import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center"></div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/swathi-kasikala-2938a9179/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-400 hover:text-cyan-400 transition-colors duration-300"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/swathi-0901"
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-400 hover:text-cyan-400 transition-colors duration-300"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/swathi_kasikala/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-400 hover:text-cyan-400 transition-colors duration-300"
        >
          <FaInstagram />
        </a>
        <a
          href="swathi.kasikala@gmail.com"
          className="text-neutral-400 hover:text-cyan-400 transition-colors duration-300"
        >
          <MdEmail />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
