import { 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaWhatsapp 
} from "react-icons/fa";

import logo from "../assets/logo.png"; 
import client1 from "../assets/spring-hub-india.png";
import client2 from "../assets/divine-classes.png";

export default function Footer() {
  return (
    <footer className="relative bg-white/10 backdrop-blur-lg text-white py-12 mt-16 shadow-lg border-t border-white/20">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Brand - Always Centered */}
        <div className="flex flex-col items-center text-center">
          <img
            src={logo}
            alt="Quick Innovation Logo"
            className="w-24 h-24 object-contain mb-2 drop-shadow-lg"
          />
          <span className="text-2xl font-bold text-white mt-2">
            Quick Innovation
          </span>
          <p className="text-md text-blue-200 italic">"Code, Tech, Innovate!"</p>
          <p className="text-md text-purple-200 italic mb-4">"Turning ideas into reality."</p>

          {/* Social Icons moved here */}
          <div className="flex gap-6 text-2xl mt-2">
            <a
              href="https://github.com/thecodebydeepak"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/thecodebydeepak"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:thecodebydeepak@gmail.com"
              className="hover:text-blue-400 transition"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-col gap-2 text-md items-center md:items-start">
          <h3 className="text-lg font-semibold text-white mb-2">Quick Links</h3>
          <a href="/" className="hover:text-blue-400 transition">Home</a>
          <a href="/about" className="hover:text-blue-400 transition">About</a>
          <a href="/services" className="hover:text-blue-400 transition">Services</a>
          <a href="/contact" className="hover:text-blue-400 transition">Contact</a>
          <a href="/privacy" className="hover:text-blue-400 transition">Privacy Policy</a>
          <a href="/terms" className="hover:text-blue-400 transition">Terms of Service</a>
        </div>

        {/* Contact Info */}
        <div className="text-md space-y-3 flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold text-white mb-2">Contact Info</h3>
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-red-400" />
            <span>Vasai, Maharashtra, India</span>
          </div>
          <div className="flex items-center gap-2">
            <FaPhone className="text-blue-400" />
            <a href="tel:+919359717732" className="hover:text-blue-400 transition">
              +91 93597 17732
            </a>
          </div>
          <div className="flex items-center gap-2">
            <FaWhatsapp className="text-green-400" />
            <a
              href="https://wa.me/919359717732"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              Chat on WhatsApp
            </a>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-blue-400" />
            <a
              href="mailto:thecodebydeepak@gmail.com"
              className="hover:text-blue-400 transition"
            >
              thecodebydeepak@gmail.com
            </a>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center md:text-left space-y-6">
          <h3 className="text-lg font-semibold text-white">
            Let’s Work Together
          </h3>
          <p className="text-md text-white">
            Start your project with us today and turn your ideas into reality!
          </p>
        </div>
      </div>

      {/* Clients Section */}
      <div className="mt-12">
        <h4 className="text-lg font-semibold text-white mb-6 text-center">
          Our Clients
        </h4>
        <div className="flex justify-center gap-10 flex-wrap">
          {[
            { name: "Spring Hub India", logo: client1, link: "https://springhubindia.com" },
            { name: "Divine Classes", logo: client2, link: "https://thecodebydeepak.github.io/DivineClasses" },
          ].map((client, i) => (
            <a
              key={i}
              href={client.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center group"
            >
              {/* Logo with Glassmorphism */}
              <div className="bg-white/100 backdrop-blur-md -p-1 rounded-xl shadow-lg transition group-hover:scale-105">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-12 w-12 object-contain"
                />
              </div>

              {/* Brand Name */}
              <span className="text-xs font-medium text-white mt-2 text-center">
                {client.name}
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-6 text-center text-sm text-gray-200 border-t border-white/10 pt-4">
        © {new Date().getFullYear()} Quick Innovation. All rights reserved.
      </div>
    </footer>
  );
}
