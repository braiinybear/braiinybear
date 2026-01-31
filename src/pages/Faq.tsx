import { Helmet } from "react-helmet";

const FAQPage = () => {
  return (
    <>
      <Helmet>
        <title>FAQ - BraiinyBear Society</title>
        <meta
          name="description"
          content="Frequently asked questions about BraiinyBear Society, our website, content, and policies."
        />
      </Helmet>

      <section className="bg-gray-50 py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Frequently Asked Questions
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-[var(--primary-main)] to-blue-500 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Common questions about BraiinyBear Society and how this website works.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-md space-y-6 text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                1. What is BraiinyBear Society?
              </h2>
              <p>
                BraiinyBear Society is an informational and educational platform
                designed to share resources, ideas, and content for families and
                children.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                2. Do I need to create an account?
              </h2>
              <p>
                No. This is a static website and does not require account creation
                or user registration.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                3. Do you collect personal information?
              </h2>
              <p>
                We do not collect personal information directly. Basic technical
                data such as anonymous analytics or cookies may be used to improve
                website performance.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                4. Does this website use cookies?
              </h2>
              <p>
                Yes, limited cookies or similar technologies may be used for basic
                analytics and site functionality. You can control cookies through
                your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                5. How can I contact you?
              </h2>
              <p>
                If you have any questions, you can contact us at{" "}
                <a
                  href="mailto:info@braiinybear.org"
                  className="text-blue-600 underline"
                >
                  info@braiinybear.org
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQPage;
