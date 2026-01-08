import React, { useMemo, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { courseData } from "./courseData";
import { ArrowRight } from "lucide-react";

const Course: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const filteredCourses = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return courseData;
    return courseData.filter((c) => {
      return (
        (c.title.toLowerCase().includes(q)) ||
        ( c.shortDescription.toLowerCase().includes(q)) ||
        (c. approvedBy && c.approvedBy.toLowerCase().includes(q)) ||
        (c.status && c.status.toLowerCase().includes(q)) ||
        (c.fullDescription && c.fullDescription.toLowerCase().includes(q)) ||
        (c.totalFee && c.totalFee.toString().includes(q)) ||
        (c.duration && c.duration.toLowerCase().includes(q))

      );
    });
  }, [query]);
  return (
    <>
      <Helmet>
        <title>Courses | BraiinyBear Educational Training and Society</title>
        <meta
          name="description"
          content="Explore our transformative educational courses designed to uplift communities and empower learners across rural and urban India. Join BraiinyBear’s mission for change."
        />
        <meta
          name="keywords"
          content="BraiinyBear courses, educational training, rural education, digital learning, empowerment through education, online courses, skill development"
        />
        <meta
          name="author"
          content="BraiinyBear Educational Training and Society"
        />

        {/* Open Graph for social sharing */}
        <meta property="og:title" content="Courses | BraiinyBear" />
        <meta
          property="og:description"
          content="Join us in transforming education through innovative and inclusive courses tailored for all learners."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://braiinybear.org/courses" />
        <meta
          property="og:image"
          content="https://braiinybear.org/images/seo/course-banner.jpg"
        />

        {/* Twitter card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Courses | BraiinyBear" />
        <meta
          name="twitter:description"
          content="Explore inclusive, skill-building courses by BraiinyBear Educational Training and Society."
        />
        <meta
          name="twitter:image"
          content="https://braiinybear.org/images/seo/course-banner.jpg"
        />
      </Helmet>

      <section className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Courses</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-sky-500 to-blue-500 mx-auto mb-6 rounded-full"></div>
            <p className="max-w-2xl mx-auto text-gray-600">
              Join us in our mission to transform education and be part of the
              change.
            </p>
          </div>
          {/* Search Bar */}
          <div className="max-w-lg mx-auto mb-8">
            <h3 className="text-center font-semibold mb-5">Search your courses</h3>

            <label htmlFor="course-search" className="sr-only">
              Search courses
            </label>
            <div className="relative">
              <input
                id="course-search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="name,description, status, approval, totalFee..."
                className="w-full pl-4 pr-10 py-3 rounded-full border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            
            </div>
          </div>

          
          {/* Courses Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <div key={course.id} className="w-full h-full flex flex-col">
                <div
                  className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 border border-gray-100 group flex flex-col"
                  style={{ height: "100%" }}
                >
                  {/* Course Image */}
                  {course.image && (
                    <div className="relative h-65 overflow-hidden">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-full object-fill transform transition duration-500 group-hover:scale-105 group-hover:blur-[1px]"
                      />
                      {/* Status Tag */}
                      <span className="absolute top-3 left-3 bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                        {course.status}
                      </span>
                    </div>
                  )}

                  {/* Course Info */}
                  <div className="p-6 flex flex-col justify-between flex-grow">
                    <h2 className="text-xl uppercase font-semibold mb-2 text-gray-800 group-hover:text-sky-600 transition">
                      {course.title}
                    </h2>
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
    </>
  );
};

export default Course;
