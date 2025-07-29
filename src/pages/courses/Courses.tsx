import { Link } from "react-router-dom";
import { courseData } from "./courseData";
import { ArrowRight } from "lucide-react";

const Course = () => {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Courses</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-sky-500 to-blue-500 mx-auto mb-6 rounded-full"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            Join us in our mission to transform education and be part of the change.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courseData.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 border border-gray-100 group"
            >
              {/* Course Image */}
              {course.image && (
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover transform transition duration-500 group-hover:scale-105 group-hover:blur-[1px]"
                  />
                  {/* Status Tag */}
                  <span
                    className={`absolute top-3 left-3 bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md`}
                  >
                    {course.status}
                  </span>
                </div>
              )}

              {/* Course Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-sky-600 transition">
                  {course.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {course.shortDescription}
                </p>
                <Link
                  to={`/courses/${course.id}`}
                  className="inline-flex items-center text-sky-600 hover:text-sky-800 font-medium transition"
                >
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            to="/courses"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
          >
            View all courses
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Course;
