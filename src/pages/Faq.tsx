import { Helmet } from "react-helmet";
import { MessageSquare, Clock, HelpCircle, Rocket } from "lucide-react";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We offer a wide range of services including web design, development, branding, and digital marketing solutions tailored to your specific needs.",
    icon: <Rocket className="h-8 w-8 text-blue-600" />,
  },
  {
    question: "How quickly can you respond to my inquiry?",
    answer:
      "We typically respond to all inquiries within 24 hours during business days. For urgent matters, please call our office directly.",
    icon: <Clock className="h-8 w-8 text-yellow-500" />,
  },
  {
    question: "Do you offer free consultations?",
    answer:
      "Yes, we offer a free 30-minute initial consultation to discuss your project needs and how we can help you achieve your goals.",
    icon: <HelpCircle className="h-8 w-8 text-green-600" />,
  },
  {
    question: "What is your typical project timeline?",
    answer:
      "Project timelines vary depending on scope and complexity. A standard website project typically takes 4–8 weeks from concept to launch.",
    icon: <MessageSquare className="h-8 w-8 text-pink-600" />,
  },
];

const FaqPage = () => {
  return (
    <>
      <Helmet>
        <title>FAQs - Braiiny Bear Society</title>
        <meta
          name="description"
          content="Frequently Asked Questions about Braiiny Bear Society. Learn about our services, response times, consultations, and project timelines."
        />
        <meta
          name="keywords"
          content="FAQs, Braiiny Bear Society, services, response time, consultations, project duration"
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
              Got questions? We’ve got answers. Here's everything you need to
              know about our services and how we operate.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex-shrink-0 bg-gray-100 p-3 rounded-full">
                    {faq.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {faq.question}
                  </h3>
                </div>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqPage;
