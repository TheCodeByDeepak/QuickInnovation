import React from "react";
import { Code, Smartphone, Cloud, Shield, PenTool, BarChart } from "lucide-react";

function Services() {
  return (
    <div className="p-8 text-white">
      <section className="bg-white/10 backdrop-blur-md p-10 rounded-2xl shadow-lg border border-white/20 text-center -ml-11 -mr-11 mt-4 md:-mt-11">
        <h2 className="text-3xl font-bold mb-6">Our Services</h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-10">
          At <span className="font-semibold text-blue-300">Quick Innovation</span>, we offer a
          wide range of digital services tailored to modern businesses.  
          From idea to execution, we deliver solutions that are fast, scalable, and future-ready.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Web Development */}
          <div className="bg-white/10 p-6 rounded-2xl border border-white/20 hover:shadow-lg transition">
            <Code className="mx-auto text-indigo-200" size={40} />
            <h3 className="text-xl font-semibold mt-4">Web Development</h3>
            <p className="mt-2 text-gray-200">
              Modern, responsive websites built with React, Tailwind, and the latest technologies.
            </p>
          </div>

          {/* App Development */}
          <div className="bg-white/10 p-6 rounded-2xl border border-white/20 hover:shadow-lg transition">
            <Smartphone className="mx-auto text-green-400" size={40} />
            <h3 className="text-xl font-semibold mt-4">App Development</h3>
            <p className="mt-2 text-gray-200">
              Cross-platform mobile apps designed for speed, scalability, and seamless user experience.
            </p>
          </div>

          {/* Cloud Solutions */}
          <div className="bg-white/10 p-6 rounded-2xl border border-white/20 hover:shadow-lg transition">
            <Cloud className="mx-auto text-blue-400" size={40} />
            <h3 className="text-xl font-semibold mt-4">Cloud Solutions</h3>
            <p className="mt-2 text-gray-200">
              Scalable cloud integrations to ensure your business grows without limits.
            </p>
          </div>

          {/* Cybersecurity */}
          <div className="bg-white/10 p-6 rounded-2xl border border-white/20 hover:shadow-lg transition">
            <Shield className="mx-auto text-red-400" size={40} />
            <h3 className="text-xl font-semibold mt-4">Cybersecurity</h3>
            <p className="mt-2 text-gray-200">
              Protecting your digital assets with advanced security measures and best practices.
            </p>
          </div>

          {/* UI/UX Design */}
          <div className="bg-white/10 p-6 rounded-2xl border border-white/20 hover:shadow-lg transition">
            <PenTool className="mx-auto text-yellow-400" size={40} />
            <h3 className="text-xl font-semibold mt-4">UI/UX Design</h3>
            <p className="mt-2 text-gray-200">
              Beautiful, user-friendly interfaces that deliver engaging digital experiences.
            </p>
          </div>

          {/* Digital Strategy */}
          <div className="bg-white/10 p-6 rounded-2xl border border-white/20 hover:shadow-lg transition">
            <BarChart className="mx-auto text-purple-400" size={40} />
            <h3 className="text-xl font-semibold mt-4">Digital Strategy</h3>
            <p className="mt-2 text-gray-200">
              Helping businesses transform digitally with data-driven strategies and innovation.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
