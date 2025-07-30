
const NewsletterSubscriptionSection = () => {
  return (
          <section className="py-12 px-6 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-3">Stay Updated</h2>

            {/* Stylish underline */}
            <div className="w-24 h-1 bg-gradient-to-r from-[var(--primary-main)] to-blue-400 mx-auto mb-6 rounded-full"></div>

            <p className="mb-6 text-gray-400">
              Subscribe to our newsletter for updates on projects and events
            </p>

            <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-4 border border-gray-700">
              <form className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-4 py-2 rounded-md flex-grow text-white bg-gray-900 border border-gray-700 focus:outline-none focus:border-[var(--primary-main)] focus:ring-1 focus:ring-[var(--primary-main)]"
                  required
                />
                <button
                  type="submit"
                  className="bg-[var(--primary-main)] hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-md transition-all duration-200"
                >
                  Subscribe
                </button>
              </form>
            </div>

            <div className="flex justify-center gap-6 mt-4">
              <span className="flex items-center text-gray-400 text-sm">
                <svg
                  className="w-4 h-4 mr-1 text-[var(--primary-main)]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Weekly Updates
              </span>
              <span className="flex items-center text-gray-400 text-sm">
                <svg
                  className="w-4 h-4 mr-1 text-[var(--primary-main)]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Exclusive Content
              </span>
            </div>

            <p className="mt-3 text-xs text-gray-500">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
  )
}

export default NewsletterSubscriptionSection