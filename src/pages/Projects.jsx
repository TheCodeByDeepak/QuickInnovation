import React from "react";

function Projects() {
  return (
    <div className="p-10 text-white">
      <h1 className="text-4xl font-bold mb-6">Our Projects</h1>
      <p className="text-lg leading-relaxed text-gray-200 max-w-3xl">
        At <span className="text-blue-400 font-semibold">Quick Innovation</span>,
        we deliver cutting-edge solutions across multiple industries.  
        Below are some of our highlighted projects that showcase our skills and innovation.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mt-10">
        <div className="p-6 bg-white/10 backdrop-blur-lg rounded-xl shadow-md hover:scale-105 transition">
          <h2 className="text-2xl font-semibold mb-3">E-Commerce Platform</h2>
          <p className="text-gray-300">
            Built a scalable MERN-based e-commerce solution with product comparison,
            real-time analytics, and secure payment integration.
          </p>
        </div>

        <div className="p-6 bg-white/10 backdrop-blur-lg rounded-xl shadow-md hover:scale-105 transition">
          <h2 className="text-2xl font-semibold mb-3">Healthcare App</h2>
          <p className="text-gray-300">
            Developed a doctor appointment system with video consultations,
            secure patient records, and live chat support.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
