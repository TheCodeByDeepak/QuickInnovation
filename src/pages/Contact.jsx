import React from "react";

function Contact() {
  return (
    <div className="p-10 text-white">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <p className="text-lg text-gray-200 mb-6 max-w-2xl">
        Have a project in mind or need assistance?  
        Reach out to <span className="text-blue-400 font-semibold">Quick Innovation</span> today!
      </p>

      <form className="grid gap-6 max-w-xl">
        <input
          type="text"
          placeholder="Your Name"
          className="p-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400 text-white"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400 text-white"
        />
        <textarea
          placeholder="Your Message"
          rows="5"
          className="p-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400 text-white"
        ></textarea>
        <button
          type="submit"
          className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 rounded-xl shadow-lg font-semibold hover:opacity-90 transition"
        >
          Send Message
        </button>
      </form>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-2">Other ways to reach us:</h2>
        <p className="text-gray-300">+91 80074 31996</p>
        <p className="text-gray-300">contact@quickinnovation.com</p>
        <p className="text-gray-300">Mumbai Maharashtra, India</p>
      </div>
    </div>
  );
}

export default Contact;
