import { useParams } from "react-router-dom";
import { eventData } from "./eventData";
import ReactMarkdown from "react-markdown";

const EventDetails = () => {
  const { id } = useParams();
  const event = eventData.find((e) => e.id === id);

  if (!event) {
    return (
      <div className="p-6 text-center text-gray-600 text-lg">
        Event not found.
      </div>
    );
  }

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-md p-8">
        {/* Event Title */}
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
          {event.title}
        </h1>

        {/* Status Badge */}
        <div className="mb-6">
          <span
            className={`inline-block px-4 py-1 text-sm font-medium text-white rounded-full bg-${event.color}`}
          >
            {event.status}
          </span>
        </div>

        {/* Event Description */}
        <div className="prose prose-p:leading-relaxed prose-headings:mt-6 prose-headings:font-semibold prose-headings:text-gray-800 prose-p:text-gray-700 prose-strong:text-gray-900 max-w-none space-y-6">
          <ReactMarkdown>{event.fullDescription}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;