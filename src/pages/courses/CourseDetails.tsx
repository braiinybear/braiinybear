import { useParams, useNavigate } from "react-router-dom";
import { courseData, ICourse } from "./courseData";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { useEffect, useState } from "react";

// const courseApi = "http://localhost:3000/api/courses";
const courseApi = "https://braiinybear-admin.vercel.app/api/courses";

const CourseDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const localEvent = courseData.find((e) => e.id === id);

  const [event, setEvent] = useState<ICourse | null>(localEvent ?? null);
  const [loading, setLoading] = useState<boolean>(!localEvent);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (localEvent) return;

    const fetchCourse = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(`${courseApi}/${id}`);
        if (!res.ok) throw new Error("Course not found");

        const data = await res.json();
        setEvent(data);
      } catch (err) {
        console.error(err);
        setError("Failed to load course details.");
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [id, localEvent]);


  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 border-4 border-sky-500 border-t-transparent rounded-full animate-spin" />
          <p className="text-gray-600">Loading course details...</p>
        </div>
      </div>
    );
  }

  if (error || !event) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-red-500 text-lg">
          {error || "Course not found"}
        </p>
      </div>
    );
  }

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8 text-center">
          {event.title}
        </h1>

        {event.image && (
          <div className="mb-10">
            <img
              src={event.image}
              alt={event.title}
              className="w-full  max-h-[400px] sm:max-h-[550px] object-cover rounded-xl shadow"
            />
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="prose max-w-none">
              <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                {event.fullDescription}
              </ReactMarkdown>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="space-y-2 text-gray-700">
              <div><strong>Name:</strong> {event.title}</div>
              <div><strong>Registration Fee:</strong> ₹{event.totalFee || "N/A"}</div>
              <div><strong>Duration:</strong> {event.duration || "N/A"}</div>
              {event.approvedBy && (
                <div><strong>Approved By:</strong> {event.approvedBy}</div>
              )}
            </div>

            <div className="mt-6 space-y-3 text-center">
              <a
                href="tel:+917302942784"
                className="block bg-sky-500 hover:bg-sky-600 text-white font-semibold py-2 rounded-md transition-colors"
              >
                📲 Call Now
              </a>
              <button
                onClick={() => navigate("/registration", { state: { courseName: event.title } })}
                className="block w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-md transition-colors"
              >
                Register Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
