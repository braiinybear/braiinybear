import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-white px-4 py-12">
      <img
        src="https://i.imgur.com/qIufhof.png"
        alt="404 Not Found"
        className="w-full max-w-md mb-8"
      />
      <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">
        404 - Page Not Found
      </h1>
      <p className="text-lg text-gray-600 mb-6 text-center max-w-xl">
        Sorry, we couldn’t find the page you were looking for. The page might
        have been removed or doesn’t exist.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
