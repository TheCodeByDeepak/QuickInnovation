import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import {
  FaHome,
  FaInfoCircle,
  FaCogs,
  FaProjectDiagram,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { FaAnglesRight, FaAnglesLeft } from "react-icons/fa6";
import logo from "../assets/logo.png";

function Sidebar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const links = [
    { to: "/", label: "Home", icon: <FaHome /> },
    { to: "/about", label: "About", icon: <FaInfoCircle /> },
    { to: "/services", label: "Services", icon: <FaCogs /> },
    { to: "/projects", label: "Projects", icon: <FaProjectDiagram /> },
    { to: "/contact", label: "Contact", icon: <FaEnvelope /> },
  ];

  return (
    <>
      {/* ✅ Mobile Header */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-40 flex items-center justify-center bg-white/10 backdrop-blur-lg border-b border-white/20 shadow-lg h-14">
        <h1 className="text-2xl md:text-4xl font-bold text-white tracking-wide">
          Quick Innovation
        </h1>
      </header>

      {/* Mobile Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden fixed top-1.5  left-4 z-50 p-2 bg-white/20 backdrop-blur-lg rounded-xl shadow-lg border border-white/30"
      >
        {open ? (
          <FaAnglesLeft className="text-white text-2xl" />
        ) : (
          <FaAnglesRight className="text-white text-2xl" />
        )}
      </button>

      {/* Backdrop Overlay (only on mobile when open) */}
      {open && (
        <div
          className="fixed inset-0 bg-black/0 z-30 md:hidden"
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 p-6 flex flex-col items-center
          bg-white/10 backdrop-blur-lg border-r border-white/20 shadow-lg 
          transition-transform duration-300 z-40 overflow-hidden
          ${open ? "translate-x-0" : "-translate-x-72 md:translate-x-0"}`}
      >
        {/* Logo + Brand */}
        <Link
          to="/"
          className="flex flex-col items-center mb-6"
          onClick={() => setOpen(false)} // close sidebar on logo click
        >
          <img
            src={logo}
            alt="Quick Innovation Logo"
            className="w-28 h-28 object-contain mb-3 drop-shadow-lg"
          />
          <h1 className="text-2xl font-bold text-white tracking-wide">
            Quick Innovation
          </h1>
          {/* Slogans */}
          <p className="text-sm text-blue-200 italic mt-1">
            "Code, Tech, Innovate!"
          </p>
          <p className="text-sm text-purple-200 italic">
            "Turning ideas into reality."
          </p>
        </Link>

        {/* Navigation */}
        <nav className="flex flex-col space-y-4 w-full flex-grow">
          {links.map(({ to, label, icon }) => {
            const active = location.pathname === to;
            return (
              <Link
                key={to}
                to={to}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-3 px-4 py-2 rounded-xl transition-all duration-300 
                  ${
                    active
                      ? "bg-gradient-to-r from-blue-500/40 to-purple-500/40 border border-white/30 text-white shadow-md shadow-blue-500/30"
                      : "text-white hover:bg-white/10 hover:text-blue-200"
                  }`}
              >
                {icon} {label}
              </Link>
            );
          })}
        </nav>

        {/* Social Icons */}
        <div className="flex gap-6 mt-6">
          {/* GitHub */}
          <div className="relative group">
            <a
              href="https://github.com/thecodebydeepak"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-2xl hover:text-blue-400 transition-colors"
            >
              <FaGithub />
            </a>
            <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 text-xs rounded bg-gray-800 text-white opacity-0 group-hover:opacity-100 transition-opacity">
              GitHub
            </span>
          </div>

          {/* LinkedIn */}
          <div className="relative group">
            <a
              href="https://linkedin.com/in/thecodebydeepak"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-2xl hover:text-blue-400 transition-colors"
            >
              <FaLinkedin />
            </a>
            <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 text-xs rounded bg-gray-800 text-white opacity-0 group-hover:opacity-100 transition-opacity">
              LinkedIn
            </span>
          </div>

          {/* Gmail */}
          <div className="relative group">
            <a
              href="mailto:thecodebydeepak@gmail.com"
              className="text-white text-2xl hover:text-blue-400 transition-colors"
            >
              <FaEnvelope />
            </a>
            <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 text-xs rounded bg-gray-800 text-white opacity-0 group-hover:opacity-100 transition-opacity">
              Gmail
            </span>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
