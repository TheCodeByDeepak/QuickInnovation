import { ReactTyped } from "react-typed";
import { Link } from "react-router-dom";
import { Lightbulb, Zap, TrendingUp, Users, Code2, Smartphone, Palette } from "lucide-react";
import logo from "../assets/logo.png";

function Home() {
  return (
    <div className="p-8 text-white">
      {/* Hero Section */}
      <section className="bg-white/10 backdrop-blur-md p-10 rounded-2xl shadow-lg border border-white/20 text-center -ml-11 -mr-11 mt-4 md:-mt-11">
        {/* Logo for Mobile Only */}
        <div className="flex justify-center mb-6 md:hidden">
          <img src={logo} alt="Quick Innovation Logo" className="w-40 h-40" />
        </div>

        <h1 className="text-4xl font-bold">Quick Innovation</h1>

        <h3 className="mt-2 text-lg text-blue-300 font-medium">
          <ReactTyped
            strings={["Code, Tech, Innovate!", "Turning Ideas Into Reality."]}
            typeSpeed={50}
            backSpeed={30}
            loop
          />
        </h3>

        <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
          We bring fresh ideas to life with speed, creativity, and technology.
          Our mission is to empower startups, enterprises, and individuals by
          delivering cutting-edge digital solutions that make an impact.
        </p>

        <Link to="/about">
          <button className="mt-4 px-6 py-2 text-lg font-semibold bg-gradient-to-r from-blue-500/40 to-purple-500/40 border border-white/30 text-white shadow-lg shadow-blue-500/30 rounded-xl hover:from-blue-500/60 hover:to-purple-500/60 transition-all">
            Get Started
          </button>
        </Link>
      </section>

      {/* Features Section */}
      <section className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {[
          {
            icon: <Lightbulb className="w-10 h-10 text-blue-400" />,
            title: "Innovative Ideas",
            desc: "We bring unique and creative solutions to every project.",
          },
          {
            icon: <Zap className="w-10 h-10 text-yellow-400" />,
            title: "Fast Execution",
            desc: "Delivering projects with speed while ensuring quality.",
          },
          {
            icon: <TrendingUp className="w-10 h-10 text-green-400" />,
            title: "Scalable Solutions",
            desc: "Our solutions grow with your business needs.",
          },
          {
            icon: <Users className="w-10 h-10 text-purple-400" />,
            title: "Client Focused",
            desc: "We work closely with clients to achieve their vision.",
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-md border border-white/20 text-center hover:scale-105 transition-all"
          >
            <div className="flex justify-center mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-300">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* Stats Section */}
      <section className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {[
          { number: "2+", label: "Projects Completed" },
          { number: "2+", label: "Happy Clients" },
          { number: "1+", label: "Years Experience" },
          { number: "24/7", label: "Support" },
        ].map((stat, idx) => (
          <div
            key={idx}
            className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20"
          >
            <h2 className="text-3xl font-bold text-blue-300">{stat.number}</h2>
            <p className="mt-2 text-gray-300">{stat.label}</p>
          </div>
        ))}
      </section>

      {/* Services Preview */}
      <section className="mt-16 text-center">
        <h2 className="text-3xl font-bold mb-6">Our Services</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              icon: <Code2 className="w-12 h-12 text-blue-400 mx-auto" />,
              title: "Web Development",
              desc: "Modern, responsive, and scalable websites and apps.",
            },
            {
              icon: <Smartphone className="w-12 h-12 text-green-400 mx-auto" />,
              title: "Mobile Apps",
              desc: "Cross-platform apps built with React Native & Flutter.",
            },
            {
              icon: <Palette className="w-12 h-12 text-pink-400 mx-auto" />,
              title: "UI/UX Design",
              desc: "Beautiful, intuitive, and user-friendly designs.",
            },
          ].map((service, idx) => (
            <div
              key={idx}
              className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-md border border-white/20 hover:scale-105 transition-all"
            >
              {service.icon}
              <h3 className="text-xl font-semibold mt-4 mb-2">{service.title}</h3>
              <p className="text-gray-300">{service.desc}</p>
            </div>
          ))}
        </div>
        <Link to="/services">
          <button className="mt-4 px-6 py-2 text-lg font-semibold bg-gradient-to-r from-blue-500/40 to-purple-500/40 border border-white/30 text-white shadow-lg shadow-blue-500/30 rounded-xl hover:from-blue-500/60 hover:to-purple-500/60 transition-all">
            View All Services
          </button>
        </Link>
      </section>

      {/* Final CTA */}
      <section className="mt-16 text-center bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-10 rounded-2xl border border-white/20 shadow-lg">
        <h2 className="text-3xl font-bold mb-4">Have an Idea? Let’s Build It!</h2>
        <p className="text-gray-200 max-w-xl mx-auto mb-6">
          Whether it’s a startup or enterprise solution, we’re here to turn your vision into reality.
        </p>
        <Link to="/contact">
          <button className="mt-4 px-6 py-2 text-lg font-semibold bg-gradient-to-r from-blue-500/40 to-purple-500/40 border border-white/30 text-white shadow-lg shadow-blue-500/30 rounded-xl hover:from-blue-500/60 hover:to-purple-500/60 transition-all">
            Contact Us
          </button>
        </Link>
      </section>
    </div>
  );
}

export default Home;
