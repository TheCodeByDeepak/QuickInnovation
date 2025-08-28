import { ReactTyped } from "react-typed";
import logo from "../assets/logo.png"; // update the path to your logo

function Home() {
  return (
    <div className="p-8 text-white">
      {/* Hero Section */}
      <section className="bg-white/10 backdrop-blur-md p-10 rounded-2xl shadow-lg border border-white/20 text-center">
        
        {/* Logo for Mobile Only */}
        <div className="flex justify-center mb-4 md:hidden">
          <img src={logo} alt="Quick Innovation Logo" className="w-40 h-40" />
        </div>

        <h1 className="text-4xl font-bold">Quick Innovation</h1>

        <h3 className="mt-2 text-lg text-blue-300 font-medium">
          <ReactTyped
            strings={[
              "Code, Tech, Innovate!",
              "Turning Ideas Into Reality.",
            ]}
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

        <button className="mt-2 px-5 py-2 text-lg font-semibold bg-gradient-to-r from-blue-500/40 to-purple-500/40 border border-white/30 text-white shadow-lg shadow-blue-500/30 rounded-xl hover:from-blue-500/60 hover:to-purple-500/60 transition-all">
          Get Started
        </button>
      </section>
    </div>
  );
}

export default Home;
