import { Users, Target, HeartHandshake, Rocket, CheckCircle, Laptop, Code, Smartphone, Cloud, Workflow } from "lucide-react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="p-8 text-white">
      {/* About Intro */}
      <section className="bg-white/10 backdrop-blur-md p-10 rounded-2xl shadow-lg border border-white/20 text-center -ml-11 -mr-11 mt-4 md:-mt-11">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p className="text-gray-200 max-w-3xl mx-auto leading-relaxed">
          At <span className="font-semibold text-blue-300">Quick Innovation</span>, 
          we specialize in modern, scalable, and creative digital solutions. 
          With a passion for technology and design, we help startups and enterprises 
          transform their ideas into powerful digital products.
        </p>
        <p className="mt-4 text-gray-200 max-w-3xl mx-auto">
          From websites to mobile apps and UI/UX design, we believe in 
          <span className="font-semibold text-purple-300"> innovation that drives results</span>.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="mt-16 text-center">
        <h3 className="text-2xl font-bold mb-6">Our Mission & Vision</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/10 p-6 rounded-2xl border border-white/20 shadow-lg">
            <Target className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h4 className="text-xl font-semibold mb-2">Our Mission</h4>
            <p className="text-gray-300">
              To empower businesses and individuals by delivering impactful 
              digital solutions that blend creativity, technology, and innovation.
            </p>
          </div>
          <div className="bg-white/10 p-6 rounded-2xl border border-white/20 shadow-lg">
            <Rocket className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h4 className="text-xl font-semibold mb-2">Our Vision</h4>
            <p className="text-gray-300">
              To be a global leader in digital innovation, helping brands and 
              startups unlock their true potential with cutting-edge technology.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="mt-16 text-center">
        <h3 className="text-2xl font-bold mb-6">Our Core Values</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white/10 p-6 rounded-2xl border border-white/20 shadow-lg hover:scale-105 transition">
            <Users className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <h4 className="text-xl font-semibold">Collaboration</h4>
            <p className="text-gray-300 mt-2">
              We work closely with our clients to understand their needs and vision.
            </p>
          </div>
          <div className="bg-white/10 p-6 rounded-2xl border border-white/20 shadow-lg hover:scale-105 transition">
            <HeartHandshake className="w-12 h-12 text-pink-400 mx-auto mb-4" />
            <h4 className="text-xl font-semibold">Integrity</h4>
            <p className="text-gray-300 mt-2">
              We build long-term relationships based on trust, transparency, and ethics.
            </p>
          </div>
          <div className="bg-white/10 p-6 rounded-2xl border border-white/20 shadow-lg hover:scale-105 transition">
            <Rocket className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
            <h4 className="text-xl font-semibold">Innovation</h4>
            <p className="text-gray-300 mt-2">
              We embrace change and explore new technologies to stay ahead of the curve.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mt-16 text-center">
        <h3 className="text-2xl font-bold mb-6">Why Choose Us?</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            "Skilled & Creative Team",
            "Affordable & Transparent Pricing",
            "On-Time Project Delivery",
            "Cutting-Edge Technologies",
          ].map((point, idx) => (
            <div key={idx} className="flex items-center bg-white/10 p-4 rounded-xl border border-white/20 shadow-md">
              <CheckCircle className="text-blue-400 w-6 h-6 mr-3" />
              <p className="text-gray-200">{point}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Technologies We Use */}
      <section className="mt-16 text-center">
        <h3 className="text-2xl font-bold mb-6">Technologies We Use</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white/10 p-6 rounded-xl shadow-md border border-white/20 hover:scale-105 transition">
            <Code className="w-10 h-10 text-blue-400 mx-auto mb-2" />
            <p>React</p>
          </div>
          <div className="bg-white/10 p-6 rounded-xl shadow-md border border-white/20 hover:scale-105 transition">
            <Laptop className="w-10 h-10 text-green-400 mx-auto mb-2" />
            <p>Node.js</p>
          </div>
          <div className="bg-white/10 p-6 rounded-xl shadow-md border border-white/20 hover:scale-105 transition">
            <Smartphone className="w-10 h-10 text-purple-400 mx-auto mb-2" />
            <p>Flutter</p>
          </div>
          <div className="bg-white/10 p-6 rounded-xl shadow-md border border-white/20 hover:scale-105 transition">
            <Cloud className="w-10 h-10 text-yellow-400 mx-auto mb-2" />
            <p>Cloud & APIs</p>
          </div>
        </div>
      </section>

      {/* Our Workflow */}
      <section className="mt-16 text-center">
        <h3 className="text-2xl font-bold mb-6">Our Workflow</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { step: "Idea & Research", color: "text-blue-400" },
            { step: "Design & Development", color: "text-green-400" },
            { step: "Testing & Launch", color: "text-purple-400" },
          ].map((stage, idx) => (
            <div key={idx} className="bg-white/10 p-6 rounded-xl shadow-md border border-white/20 hover:scale-105 transition">
              <Workflow className={`w-10 h-10 mx-auto mb-2 ${stage.color}`} />
              <p className="font-semibold">{stage.step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="mt-16 text-center bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-10 rounded-2xl border border-white/20 shadow-lg">
        <h2 className="text-3xl font-bold mb-4">Let’s Innovate Together</h2>
        <p className="text-gray-200 max-w-xl mx-auto mb-6">
          Whether you’re a startup or enterprise, Quick Innovation is here 
          to bring your vision to life with speed and creativity.
        </p>
        <Link
          to="/contact"
          className="px-6 py-3 text-lg font-semibold bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl shadow-lg hover:scale-105 transition-all"
        >
          Contact Us
        </Link>
      </section>
    </div>
  );
}

export default About;
