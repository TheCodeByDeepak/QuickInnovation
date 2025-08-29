import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

function Contact() {
  return (
    <div className="p-8 text-white">
      <section className="bg-white/10 backdrop-blur-md p-10 rounded-2xl shadow-lg border border-white/20 -ml-11 -mr-11 mt-4 md:-mt-11">
        
        <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
        <p className="text-lg text-gray-200 mb-6 max-w-2xl text-center mx-auto">
          Have a project in mind or need assistance?  
          Reach out to <span className="text-blue-300 font-semibold">Quick Innovation</span> today!
        </p>

        {/* Contact Info */}
        <div className="space-y-4 text-left">
          <div className="flex items-center gap-3">
            <FaPhone className="text-blue-400" />
            <a href="tel:+919359717732" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-200 transition">
              +91 93597 17732
            </a>
          </div>
          <div className="flex items-center gap-3">
            <FaWhatsapp className="text-blue-400" />
            <a
            href="https://wa.me/919359717732"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-200 transition"
           >
             Chat on WhatsApp
          </a>
        </div>
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-blue-400" />
            <a href="mailto:thecodebydeepak@gmail.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-200 transition">
              thecodebydeepak@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-blue-400" />
            <p className="text-gray-300">Vasai, Maharashtra, India</p>
          </div>

        </div>

        {/* Social Links */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-3">Connect with us:</h2>
          <div className="flex gap-6 text-2xl">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition"
            >
              <FaGithub />
            </a>
             <a
              href="mailto:thecodebydeepak@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-300 transition"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
