import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { MapPin, Phone, Mail, Clock, Send, Check } from "lucide-react";
import emailjs from 'emailjs-com';
import { Helmet } from "react-helmet";

const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data: any) => {
    try {
      const result = await emailjs.send(
        'service_owkarxq',
        'template_9pya1qr',
        {
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message,
        },
        'XAEG7Rq8HWeUfcwe7'
      );

      console.log('Email successfully sent:', result.text);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        reset();
      }, 3000);
    } catch (error) {
      console.error('Failed to send email:', error);
    }
  };

  return (
    <div className="pb-16 bg-gray-100">
      <Helmet>
        <title>Contact Us | BraiinyBear</title>
        <meta name="description" content="Get in touch with BraiinyBear for inquiries, collaborations, and support. We're here to help you." />
        <meta name="keywords" content="Contact, BraiinyBear, Support, Inquiry, Collaboration" />
        <meta name="author" content="BraiinyBear" />
      </Helmet>

      {/* Page Header */}
      <div className="relative bg-black-600 text-white h-96 flex items-center justify-center mb-12">
        <div className="absolute inset-0 bg-[var(--primary-main)] opacity-10"></div>
        <div className="container mx-auto px-6 text-center text-black relative z-10 mt-29 ">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 ">Contact Us</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
            We'd love to hear from you. Get in touch with our team for any inquiries or collaborations.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Contact Information</h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-[var(--primary-main)] p-3 rounded-full mr-4">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Address</h3>
                    <p className="text-gray-600 mt-1">15, New Cantonment Road, Dehradun</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[var(--primary-main)] p-3 rounded-full mr-4">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Phone</h3>
                    <p className="text-gray-600 mt-1">+91 9520770813</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[var(--primary-main)] p-3 rounded-full mr-4">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Email</h3>
                    <p className="text-gray-600 mt-1">support@braiinybear.org</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[var(--primary-main)] p-3 rounded-full mr-4">
                    <Clock className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Business Hours</h3>
                    <p className="text-gray-600 mt-1">Monday - Friday: 9AM - 5PM</p>
                    <p className="text-gray-600">Weekend: Closed</p>
                  </div>
                </div>
              </div>

              {/* Social icons omitted for brevity or keep them if needed */}
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Send Us A Message</h2>

              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="bg-green-100 p-3 rounded-full mb-4">
                    <Check className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">Message Sent Successfully!</h3>
                  <p className="text-gray-600">
                    Thank you for reaching out. We'll get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        {...register("name", { required: "Name is required" })}
                        className={`w-full px-4 py-3 rounded-md border ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-[var(--primary-main)]`}
                        placeholder="John Doe"
                      />
                      {errors.name && <p className="mt-1 text-sm text-red-600">{String(errors.name.message)}</p>}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address"
                          }
                        })}
                        className={`w-full px-4 py-3 rounded-md border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-[var(--primary-main)]`}
                        placeholder="john@example.com"
                      />
                      {errors.email && <p className="mt-1 text-sm text-red-600">{String(errors.email.message)}</p>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      {...register("subject", { required: "Subject is required" })}
                      className={`w-full px-4 py-3 rounded-md border ${errors.subject ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-[var(--primary-main)]`}
                      placeholder="How can we help you?"
                    />
                    {errors.subject && <p className="mt-1 text-sm text-red-600">{String(errors.subject.message)}</p>}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea
                      id="message"
                      rows={5}
                      {...register("message", { required: "Message is required" })}
                      className={`w-full px-4 py-3 rounded-md border ${errors.message ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-[var(--primary-main)]`}
                      placeholder="Your message here..."
                    ></textarea>
                    {errors.message && <p className="mt-1 text-sm text-red-600">{String(errors.message.message)}</p>}
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="privacy"
                      {...register("privacy", { required: "You must agree to our Privacy Policy" })}
                      className="h-4 w-4 text-[var(--primary-main)] focus:ring-[var(--primary-main)] border-gray-300 rounded"
                    />
                    <label htmlFor="privacy" className="ml-2 block text-sm text-gray-700">
                      I agree to the <a href="#" className="text-[var(--primary-main)] hover:underline">Privacy Policy</a>
                    </label>
                  </div>
                  {errors.privacy && <p className="mt-1 text-sm text-red-600">{String(errors.privacy.message)}</p>}

                  <button
                    type="submit"
                    className="w-full bg-black hover:bg-gray-900 text-white font-bold py-3 px-6 rounded-md shadow transition-all duration-300 flex items-center justify-center"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12 bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative w-full h-80 sm:h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d53575.75207559795!2d78.02122877045902!3d30.325073917930606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1744367721722!5m2!1sen!2sin"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute top-0 left-0 w-full h-full border-0"
            ></iframe>
          </div>
        </div>

        {/* FAQ Redirect Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Have Questions?</h2>
          <p className="text-gray-600 mb-6">
            Visit our FAQ page to find answers to commonly asked questions.
          </p>
          <a
            href="/faq"
            className="inline-block bg-[var(--primary-main)] text-white font-bold py-3 px-6 rounded-md shadow hover:bg-blue-600 transition-all duration-300"
          >
            Go to FAQ
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
