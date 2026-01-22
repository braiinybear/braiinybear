import { useParams, useNavigate } from "react-router-dom";
import { courseData, ICourse } from "./courseData";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { useEffect, useState } from "react";

const courseApi = import.meta.env.VITE_API_URL;

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
        const res = await fetch(`${courseApi}courses/${id}`);
        if (!res.ok) throw new Error("Course not found");
        const data = await res.json();
        setEvent(data);
      } catch {
        setError("Failed to load course details.");
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [id, localEvent]);

  if (loading) {
    return (
      <div className="min-h-screen grid place-items-center bg-gray-50">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-sky-500 border-t-transparent rounded-full animate-spin" />
          <p className="text-gray-600 font-medium">
            Loading course details...
          </p>
        </div>
      </div>
    );
  }

  if (error || !event) {
    return (
      <div className="min-h-screen grid place-items-center bg-gray-50">
        <p className="text-red-500 text-lg">{error || "Course not found"}</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen pb-16">

      {/* HERO */}
      <div className="bg-gradient-to-r from-sky-600 to-sky-500 text-white py-10 px-6 text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold max-w-4xl mx-auto">
          {event.title}
        </h1>
        {event.duration && (
          <p className="mt-3 text-sky-100 text-lg">
            Duration: {event.duration}
          </p>
        )}
      </div>

      {/* MAIN */}
      <div className="mt-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {event.image && (
          <div className="-mt-20 mb-12">
            <img
              src={event.image}
              alt={event.title}
              className="w-full max-h-[520px] object-cover rounded-3xl shadow-2xl"
            />
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-2 space-y-7">

            <ReactMarkdown
              rehypePlugins={[rehypeRaw]}
              components={{
                h2: ({ children }) => (
                  <div className="bg-white rounded-2xl shadow-sm border-l-4 border-sky-500 px-6 py-5">
                    <h2 className="text-2xl font-bold text-gray-900">
                      {children}
                    </h2>
                  </div>
                ),

                p: ({ children }) => (
                  <p className="text-gray-700 text-[15.8px] leading-relaxed px-1">
                    {children}
                  </p>
                ),

                ul: ({ children }) => (
                  <div className="bg-sky-50 rounded-2xl border border-sky-100 px-6 py-5">
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      {children}
                    </ul>
                  </div>
                ),

                li: ({ children }) => (
                  <li className="leading-relaxed">{children}</li>
                ),
              }}
            >
              {event.fullDescription}
            </ReactMarkdown>

          </div>

          {/* RIGHT SIDEBAR */}
          <div className="sticky top-24 h-fit bg-white rounded-3xl shadow-xl p-8 space-y-6">

            <h3 className="text-xl font-bold text-gray-900 border-b pb-3">
              Course Overview
            </h3>

            <div className="space-y-4 text-sm">
              <InfoRow label="Course" value={event.title} />
              <InfoRow
                label="Total Fee"
                value={`₹${event.totalFee || "N/A"}`}
                highlight
              />
              <InfoRow label="Duration" value={event.duration || "N/A"} />

              {event.approvedBy && (
                <InfoRow label="Approved By" value={event.approvedBy} />
              )}
            </div>

            <div className="pt-4 space-y-4">
              <a
                href="tel:+917302942784"
                className="block text-center bg-sky-500 hover:bg-sky-600 text-white font-semibold py-3 rounded-xl transition"
              >
                📞 Call Now
              </a>

              <button
                onClick={() =>
                  navigate("/registration", {
                    state: { courseName: event.title },
                  })
                }
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-xl transition"
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

const InfoRow = ({
  label,
  value,
  highlight,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) => (
  <div className="flex justify-between items-center">
    <span className="text-gray-600 font-medium">{label}</span>
    <span
      className={`font-semibold ${
        highlight ? "text-green-600 text-base" : "text-gray-800"
      }`}
    >
      {value}
    </span>
  </div>
);

export default CourseDetails;
