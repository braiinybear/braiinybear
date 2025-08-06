import { Helmet } from "react-helmet";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-gray-800">
      <Helmet>
        <title>Privacy Policy | Your Site Name</title>
        <meta name="description" content="Read our privacy policy to understand how we collect, use, and protect your personal data." />
      </Helmet>

      <h1 className="text-4xl font-bold mb-6 text-center">Privacy Policy</h1>

      <div className="space-y-6 text-md leading-6">
        <p>
          This Privacy Policy outlines how we handle your information when you use our website and services.
        </p>

        <section>
          <h2 className="text-xl font-semibold mb-2">1. Information We Collect</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Personal details such as name, email, phone number, etc.</li>
            {/* <li>Browser/device data and usage behavior</li> */}
            <li>Cookies and tracking technologies</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">2. How We Use Your Data</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>To provide and manage our services</li>
            <li>To contact you with updates or offers</li>
            <li>To improve user experience and website performance</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">3. Data Sharing</h2>
          <p>
            We do not sell your data. We may share information with trusted third-party vendors who help us operate our services.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">4. Security</h2>
          <p>
            We implement safeguards to protect your data, but no method of transmission over the internet is completely secure.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">5. Your Rights</h2>
          <p>
            You may access, update, or request deletion of your personal information. You may also opt out of communications.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">6. Children’s Privacy</h2>
          <p>
            Our site is not intended for children under 13. We do not knowingly collect personal data from minors.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">7. Updates to This Policy</h2>
          <p>
            We may revise this policy occasionally. Changes will be posted on this page with an updated date.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">8. Contact Us</h2>
          <p>
            For questions about this Privacy Policy, contact us at: <br />
            <strong>Email:</strong> privacy@yoursite.com
          </p>
        </section>

        <p className="text-xs text-gray-500 italic mt-6">Last updated: August 6, 2025</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
