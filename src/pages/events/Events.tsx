import { Link } from "react-router-dom";
import { eventData } from "./eventData";
import { ArrowRight } from "lucide-react";


const Events = () => {
  return (
    <section className="py-16 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Events</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--primary-main)] to-blue-500 mx-auto mb-6 rounded-full"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            Join us at our events and be part of the change
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {eventData.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100"
            >
              <div className={`bg-${event.color} text-white px-4 py-2 flex justify-between`}>
                <span className="font-semibold">{event.status}</span>
                {/* <span>—</span> */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <p className="text-gray-600 mb-4">{event.shortDescription}</p>
                <Link
                  to={`/events/${event.id}`}
                  className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            to="/events"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
          >
            View all events <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Events;
