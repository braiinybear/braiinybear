import { Helmet } from "react-helmet";

const PrivacyPolicyPage = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Braiiny Bear Society</title>
        <meta
          name="description"
          content="Read our Privacy Policy to understand how we handle and protect your data at Braiiny Bear Society."
        />
      </Helmet>

      <section className="bg-gray-50 py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Privacy Policy
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-[var(--primary-main)] to-blue-500 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Your privacy is important to us. This policy explains how we
              collect, use, and safeguard your information.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-md space-y-6 text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                1. Information We Collect
              </h2>
              <p>
                We collect personal information such as your name, email
                address, phone number, and any other details you provide
                voluntarily through forms or account registration.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                2. How We Use Your Information
              </h2>
              <p>
                Your information is used to provide our services, respond to
                inquiries, send updates, and improve user experience. We may
                also use it for internal analytics and marketing purposes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                3. Data Sharing
              </h2>
              <p>
                We do not sell or rent your personal data. We may share your
                data with trusted third-party service providers for
                functionality (e.g., payment processing), under strict
                confidentiality agreements.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                4. Cookies & Tracking
              </h2>
              <p>
                Our website uses cookies and similar technologies to enhance
                your experience. You can modify your browser settings to
                decline cookies, though some features may not function properly.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                5. Data Security
              </h2>
              <p>
                We implement industry-standard security measures to protect your
                data from unauthorized access, misuse, or alteration.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                6. Your Rights
              </h2>
              <p>
                You have the right to access, update, or delete your personal
                data. Contact us anytime at{" "}
                <a
                  href="mailto:privacy@braiinybear.org"
                  className="text-blue-600 underline"
                >
                  privacy@braiinybear.org
                </a>{" "}
                for assistance.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                7. Updates to This Policy
              </h2>
              <p>
                We may update this privacy policy from time to time. Any changes
                will be posted on this page with an updated revision date.
              </p>
            </section>

            <p className="text-sm text-gray-500 mt-4">
              Last updated: August 5, 2025
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicyPage;
