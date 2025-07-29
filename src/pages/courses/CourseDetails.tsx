import { useParams } from "react-router-dom";
import { courseData } from "./courseData";
import ReactMarkdown from "react-markdown";

const CourseDetails = () => {
  const { id } = useParams();
  const event = courseData.find((e) => e.id === id);

  if (!event) {
    return (
      <div className="p-6 text-center text-gray-600 text-lg">
        Event not found.
      </div>
    );
  }

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          {event.title}
        </h1>

        {/* Main Image */}
        {event.image && (
          <div className="mb-10">
            <img
              src={event.image}
              alt={event.title}
              className="w-full max-h-[500px] object-cover rounded-xl shadow"
            />
          </div>
        )}

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left: Description */}
          <div className="lg:col-span-2">
            <div className="prose prose-p:leading-relaxed prose-headings:mt-6 prose-headings:font-semibold prose-headings:text-gray-800 prose-p:text-gray-700 prose-strong:text-gray-900 max-w-none space-y-6">
              <ReactMarkdown>{event.fullDescription}</ReactMarkdown>
            </div>
          </div>

          {/* Right: Sidebar Card */}
          <div className="bg-white rounded-xl shadow-md p-6 w-full max-w-sm mx-auto lg:mx-0 ">

            <div className="w-full h-50 overflow-hidden">
            {/* Thumbnail */}
             {event.image && (
              <img
                src={event.image}
                alt="Thumbnail"
                className="w-full h-40 object-cover transition-transform duration-1000  ease-in-out hover:blur-[1px] hover:scale-110 rounded-md mb-4"
                />
              )}
              </div>

            {/* Info */}
            <div className="space-y-2 text-sm text-gray-700">
              <div>
                <strong className="text-gray-800">Name:</strong> {event.title}
              </div>
              <div>
                <strong className="text-gray-800">Registration Fee:</strong>{" "}
                ₹{event.totalFee || "N/A"}
              </div>
              <div>
                <strong className="text-gray-800">Duration:</strong>{" "}
                {event.duration || "N/A"}
              </div>
              {event.approvedBy && (
                <div>
                  <strong className="text-gray-800">Approved By:</strong>{" "}
                  {event.approvedBy}
                </div>
              )}
            </div>

           {/* Enroll Button */}

<div className="mt-6 text-center">
  <p className="text-gray-700 font-medium mb-2">
    📞 Call us to Enroll: <span className="font-semibold">+91 7302942784</span>
  </p>
  <a
    href="tel:+917302942784"
    className="inline-block w-full bg-sky-500 hover:bg-sky-600 text-white font-semibold py-2 rounded-md transition"
  >
    📲 Call Now
  </a>
</div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
