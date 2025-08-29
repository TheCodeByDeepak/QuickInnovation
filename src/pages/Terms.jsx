import React from "react";
import { FaUserShield, FaCode, FaExclamationTriangle, FaSyncAlt } from "react-icons/fa";

function Terms() {
  return (
    <div className="p-8 text-white">
      {/* Hero Section */}
      <section className="bg-white/10 backdrop-blur-md p-10 rounded-2xl shadow-lg border border-white/20 text-center -ml-11 -mr-11 mt-4 md:-mt-11">
        <h2 className="text-3xl font-bold">Terms of Service</h2>
        <p className="mt-4 text-lg text-gray-200 max-w-3xl mx-auto">
          Welcome to <span className="font-semibold text-blue-300">Quick Innovation</span>.  
          These Terms of Service govern your use of our products, services, and platforms.  
          By collaborating with us or accessing our solutions, you agree to follow these terms.
        </p>
        <p className="mt-2 text-sm text-gray-200 italic">Last updated: August 2025</p>
      </section>

      {/* Terms Sections */}
      <section className="grid md:grid-cols-2 gap-6 mt-12">
        <div className="bg-white/10 p-6 rounded-xl shadow border border-white/20 hover:scale-105 transition">
          <div className="flex items-center gap-3 mb-3">
            <FaUserShield className="text-blue-400 text-xl" />
            <h2 className="text-xl font-semibold">Service Usage</h2>
          </div>
          <p className="text-gray-200">
            Our solutions are built to empower businesses and individuals.  
            You agree not to misuse, resell, or exploit them for unlawful activities.
          </p>
        </div>

        <div className="bg-white/10 p-6 rounded-xl shadow border border-white/20 hover:scale-105 transition">
          <div className="flex items-center gap-3 mb-3">
            <FaCode className="text-purple-400 text-xl" />
            <h2 className="text-xl font-semibold">Intellectual Property</h2>
          </div>
          <p className="text-gray-200">
            All code, designs, and digital assets remain the property of  
            <span className="font-semibold"> Quick Innovation</span>, unless explicitly transferred in writing.
          </p>
        </div>

        <div className="bg-white/10 p-6 rounded-xl shadow border border-white/20 hover:scale-105 transition">
          <div className="flex items-center gap-3 mb-3">
            <FaExclamationTriangle className="text-red-400 text-xl" />
            <h2 className="text-xl font-semibold">Limitation of Liability</h2>
          </div>
          <p className="text-gray-200">
            While we strive to deliver high-quality solutions, we are not responsible  
            for indirect damages, third-party dependencies, or misuse of our services.
          </p>
        </div>

        <div className="bg-white/10 p-6 rounded-xl shadow border border-white/20 hover:scale-105 transition">
          <div className="flex items-center gap-3 mb-3">
            <FaSyncAlt className="text-green-400 text-xl" />
            <h2 className="text-xl font-semibold">Updates to Terms</h2>
          </div>
          <p className="text-gray-200">
            We may update these terms as our services evolve.  
            Continued use of our platforms means you accept the updated terms.
          </p>
        </div>
      </section>

      {/* Contact for Terms */}
      <div className="text-center mt-12">
        <p className="text-gray-300">
          Questions about these Terms? Contact us at{" "}
          <a
            href="mailto:thecodebydeepak@gmail.com"
            className="text-blue-300 underline hover:text-blue-500"
          >
            thecodebydeepak@gmail.com
          </a>.
        </p>
      </div>
    </div>
  );
}

export default Terms;
