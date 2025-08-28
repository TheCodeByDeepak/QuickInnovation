function Services() {
  return (
    <div className="p-8 text-white">
      <section className="bg-white/10 backdrop-blur-md p-10 rounded-2xl shadow-lg border border-white/20">
        <h2 className="text-3xl font-bold mb-6">Our Services</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/10 p-6 rounded-xl border border-white/20 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">🌐 Web Development</h3>
            <p className="mt-2 text-gray-200">
              Modern, responsive websites built with React, Tailwind, and the
              latest technologies.
            </p>
          </div>

          <div className="bg-white/10 p-6 rounded-xl border border-white/20 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">📱 App Development</h3>
            <p className="mt-2 text-gray-200">
              Cross-platform mobile apps designed for speed, scalability, and
              user experience.
            </p>
          </div>

          <div className="bg-white/10 p-6 rounded-xl border border-white/20 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">☁️ Cloud Solutions</h3>
            <p className="mt-2 text-gray-200">
              Scalable cloud integrations for businesses to grow efficiently.
            </p>
          </div>

          <div className="bg-white/10 p-6 rounded-xl border border-white/20 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">🛡️ Cybersecurity</h3>
            <p className="mt-2 text-gray-200">
              Keeping your digital assets safe with modern security practices.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
