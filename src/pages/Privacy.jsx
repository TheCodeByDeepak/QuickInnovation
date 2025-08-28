function Privacy() {
  return (
    <div className="p-8 text-white">
      {/* Privacy Header */}
      <section className="bg-white/10 backdrop-blur-md p-10 rounded-2xl shadow-lg border border-white/20 text-center">
        <h1 className="text-4xl font-bold">Privacy Policy</h1>
        <p className="mt-4 text-lg text-gray-200">
          At <strong>Quick Innovation</strong>, we value your trust. As a tech startup,
          we build solutions that often involve handling data securely. This Privacy
          Policy explains how we collect, use, and protect your information when you
          engage with our services, applications, or platforms.
        </p>
      </section>

      {/* Content Sections */}
      <section className="grid md:grid-cols-2 gap-6 mt-12">
        <div className="bg-white/10 p-6 rounded-xl shadow border border-white/20">
          <h2 className="text-xl font-semibold">Information We Collect</h2>
          <p className="mt-2 text-gray-200">
            Depending on the service, we may collect personal details (name,
            email, phone), technical data (IP, browser, device type), and project-related
            information you share with us.
          </p>
        </div>

        <div className="bg-white/10 p-6 rounded-xl shadow border border-white/20">
          <h2 className="text-xl font-semibold">How We Use Data</h2>
          <p className="mt-2 text-gray-200">
            Data is used to deliver and improve our services, customize client
            solutions, enhance user experience, ensure system security, and
            communicate updates or support.
          </p>
        </div>

        <div className="bg-white/10 p-6 rounded-xl shadow border border-white/20">
          <h2 className="text-xl font-semibold">Data Security</h2>
          <p className="mt-2 text-gray-200">
            As a tech company, security is our priority. We use encryption,
            access controls, and regular audits to protect your data from unauthorized
            access or misuse.
          </p>
        </div>

        <div className="bg-white/10 p-6 rounded-xl shadow border border-white/20">
          <h2 className="text-xl font-semibold">Third-Party Services</h2>
          <p className="mt-2 text-gray-200">
            Some of our solutions may integrate with third-party APIs or tools.
            We ensure such services follow proper security standards, but they are
            governed by their own privacy policies.
          </p>
        </div>
      </section>

      <div className="text-center mt-12">
        <p className="text-gray-300">
          For privacy-related concerns, contact us at{" "}
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

export default Privacy;
