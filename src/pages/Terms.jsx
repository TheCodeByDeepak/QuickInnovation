function Terms() {
  return (
    <div className="p-8 text-white">
      {/* Terms Header */}
      <section className="bg-white/10 backdrop-blur-md p-10 rounded-2xl shadow-lg border border-white/20 text-center">
        <h1 className="text-4xl font-bold">Terms of Service</h1>
        <p className="mt-4 text-lg text-gray-200">
          These Terms of Service govern your use of <strong>Quick Innovation</strong>’s
          tech solutions, applications, and platforms. By working with us or using
          our services, you agree to these terms.
        </p>
      </section>

      {/* Terms Sections */}
      <section className="grid md:grid-cols-2 gap-6 mt-12">
        <div className="bg-white/10 p-6 rounded-xl shadow border border-white/20">
          <h2 className="text-xl font-semibold">Service Usage</h2>
          <p className="mt-2 text-gray-200">
            Our solutions are meant to provide technical services and innovations.
            You agree not to misuse, copy, or exploit them for unlawful activities.
          </p>
        </div>

        <div className="bg-white/10 p-6 rounded-xl shadow border border-white/20">
          <h2 className="text-xl font-semibold">Intellectual Property</h2>
          <p className="mt-2 text-gray-200">
            All code, designs, and solutions we develop remain the property of
            Quick Innovation unless explicitly transferred by agreement.
          </p>
        </div>

        <div className="bg-white/10 p-6 rounded-xl shadow border border-white/20">
          <h2 className="text-xl font-semibold">Limitation of Liability</h2>
          <p className="mt-2 text-gray-200">
            While we deliver high-quality solutions, we are not liable for
            indirect damages, downtime, or losses caused by misuse or
            third-party dependencies.
          </p>
        </div>

        <div className="bg-white/10 p-6 rounded-xl shadow border border-white/20">
          <h2 className="text-xl font-semibold">Updates to Terms</h2>
          <p className="mt-2 text-gray-200">
            As a growing tech startup, we may update our terms as our services
            evolve. Continued use of our services means you accept the latest
            version of these terms.
          </p>
        </div>
      </section>

      <div className="text-center mt-12">
        <p className="text-gray-300">
          For questions about these Terms, contact us at{" "}
          <a
            href="mailto:thecodebydeepak@gmail.com"
            className="text-blue-400 underline"
          >
            thecodebydeepak@gmail.com
          </a>.
        </p>
      </div>
    </div>
  );
}

export default Terms;
