import { useParams } from "react-router-dom";
import { courseData, ICourse } from "./courseData";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { useEffect, useState } from "react";

// const courseApi = "http://localhost:3000/api/courses";
  const courseApi = "https://braiinybear-admin.vercel.app/api/courses";

const CourseDetails = () => {
  
  const { id } = useParams();
  const [loading,setLoading] = useState<boolean>(false)

  const localEvent = courseData.find((e) => e.id === id);

const [event, setEvent] = useState<ICourse | null>(localEvent ?? null);



  useEffect(() => {
    if (localEvent) return;

    const fetchCourse = async () => {
      try {
        setLoading(true)
        const res = await fetch(`${courseApi}/${id}`);
        if (!res.ok) throw new Error("Course not found");

        const data = await res.json();
        setEvent(data);
        setLoading(false)
      } catch (err) {
       console.log(err);
       setLoading(false)
       
      }
    };

    fetchCourse();
  }, [id, localEvent]);



  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8 text-center">
          {event?.title}
        </h1>

        {event?.image && (
          <div className="mb-10">
            <img
              src={event.image}
              alt={event.title}
              className="w-full max-h-[400px] sm:max-h-[550px] object-cover rounded-xl shadow"
            />
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="prose max-w-none">
              <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                {event?.fullDescription}
              </ReactMarkdown>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="space-y-2 text-gray-700">
              <div><strong>Name:</strong> {event?.title}</div>
              <div><strong>Registration Fee:</strong> ₹{event?.totalFee || "N/A"}</div>
              <div><strong>Duration:</strong> {event?.duration || "N/A"}</div>
              {event?.approvedBy && (
                <div><strong>Approved By:</strong> {event.approvedBy}</div>
              )}
            </div>

            <div className="mt-6 text-center">
              <a
                href="tel:+917302942784"
                className="block bg-sky-500 hover:bg-sky-600 text-white font-semibold py-2 rounded-md"
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
