import React from "react";
import springHubLogo from "../assets/spring-hub-india.png"; 
import divineClassesLogo from "../assets/divine-classes.png"; 

function Projects() {
  return (
    <div className="p-8 text-white">
      <section className="bg-white/10 backdrop-blur-md p-10 rounded-2xl shadow-lg border border-white/20 text-center -ml-11 -mr-11 mt-4 md:-mt-11">
        <h2 className="text-3xl font-bold mb-6">Our Projects</h2>
        <p className="text-lg leading-relaxed text-gray-200 max-w-3xl mx-auto">
          At <span className="text-blue-300 font-semibold">Quick Innovation</span>,
          we deliver cutting-edge solutions across multiple industries.  
          Below are some of our highlighted projects that showcase our skills and innovation.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-10">
          {/* Spring Hub India */}
          <a
            href="https://springhubindia.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-6 bg-white/10 backdrop-blur-lg rounded-xl shadow-md hover:scale-105 transition"
          >
            <img 
              src={springHubLogo} 
              alt="Spring Hub India Logo" 
              className="bg-white/100 w-24 h-24 mx-auto mb-4 rounded-full border border-white/30 shadow-md"
            />
            <h2 className="text-2xl font-semibold mb-3">Spring Hub India</h2>
            <p className="text-gray-300">
              A modern business portfolio website built with React and TailwindCSS, 
              featuring responsive design, service showcases, and contact forms.
            </p>
          </a>

          {/* Divine Classes */}
          <a
            href="https://thecodebydeepak.github.io/DivineClasses/"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-6 bg-white/10 backdrop-blur-lg rounded-xl shadow-md hover:scale-105 transition"
          >
            <img 
              src={divineClassesLogo} 
              alt="Divine Classes Logo" 
              className="bg-white/100 w-24 h-24 mx-auto mb-4 rounded-full border border-white/30 shadow-md"
            />
            <h2 className="text-2xl font-semibold mb-3">Divine Classes</h2>
            <p className="text-gray-300">
              An educational platform for online classes, with features for student management, 
              exam updates, and learning resources.
            </p>
          </a>
        </div>
      </section>
    </div>
  );
}

export default Projects;
