'use client';
import Link from 'next/link';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaYoutube,
} from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-6 md:flex-row md:justify-between md:space-y-0">
            <p className="text-sm text-center md:text-left">
            © {currentYear} <strong>ACRP</strong> (Asociación Cubana de Reconocimiento de Patrones). <br />Todos los derechos reservados.
          </p> <div className="flex space-x-6">
            <Link
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="Facebook"
              target='_black'
            >
              <FaFacebook className="w-6 h-6" />
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="X"
              target='_black'

            >
              <FaTwitter className="w-6 h-6" />
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="Instagram"
              target='_black'
            >
              <FaInstagram className="w-6 h-6" />
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="LinkedIn"
              target='_black'
            >
              <FaLinkedin className="w-6 h-6" />
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              target='_black'
              aria-label="GitHub"
            >
              <FaGithub className="w-6 h-6" />
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="YouTube"
              target='_black'
            >
              <FaYoutube className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;