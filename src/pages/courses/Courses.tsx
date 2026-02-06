import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { courseData, ICourse } from "./courseData";
import { Loader } from "lucide-react";


const categoryImages: Record<string, string> = {
  "Paramedical & B.Voc Courses": "/course-categories/Paramedical_&_B.Voc.png",
  "NCVET / NSQF approved skill courses": "/course-categories/NCVET_NSQF.png",
  "Veterinary courses": "/course-categories/Veterinary.png",
  "Aviation / Drone Course": "/course-categories/Aviation_Drone.png"
};


const Course: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [courseCategoriesWise, setCourseCategoryWise] = useState<Record<string, ICourse[]>>({});
  const [courses, setCourses] = useState<ICourse[]>([]);
  const [query, setQuery] = useState<string>("");

  const navigate = useNavigate();
  const courseApi = import.meta.env.VITE_API_URL + "courses";

  const fetchCourses = async (courseApi: string) => {
    try {
      setLoading(true);
      const res = await fetch(courseApi);
      const courseDataBackend = await res.json();
      const fetchedCourses: ICourse[] = courseDataBackend.courses;

      setCourses(fetchedCourses);

      const grouped = fetchedCourses.reduce<Record<string, ICourse[]>>(
        (acc, course) => {
          const category = course.category?.trim() || "Other";
          if (!acc[category]) acc[category] = [];
          acc[category].push(course);
          return acc;
        },
        {}
      );

      setCourseCategoryWise(grouped);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setCourses(courseData);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses(courseApi);
  }, []);
  console.log(courses);
console.log(courseCategoriesWise);

  // Prepare categories: all except "Other"
  const otherCourses: ICourse[] = courseCategoriesWise["Other"] ?? [];
  const orderedCategories: [string, ICourse[]][] = Object.entries(courseCategoriesWise).filter(
    ([category]) => category !== "Other"
  );

  // Filter courses inside each category
  const filterCourses = (courses: ICourse[]) => {
    const q = query.trim().toLowerCase();
    if (!q) return courses;
    return courses.filter(
      (c) =>
        c.title.toLowerCase().includes(q) ||
        c.shortDescription.toLowerCase().includes(q) ||
        (c.approvedBy && c.approvedBy.toLowerCase().includes(q)) ||
        (c.status && c.status.toLowerCase().includes(q)) ||
        (c.fullDescription && c.fullDescription.toLowerCase().includes(q)) ||
        (c.totalFee && c.totalFee.toString().includes(q)) ||
        (c.duration && c.duration.toLowerCase().includes(q))
    );
  };

  return (
    <>
      <Helmet>
        <title>Courses | BraiinyBear Educational and Training Society</title>

        <meta
          name="description"
          content="Explore our transformative educational courses designed to uplift communities and empower learners across rural and urban India."
        />

        <meta
          name="keywords"
          content="BraiinyBear courses, educational training, rural education, digital learning, skill development, empowerment through education"
        />

        <meta
          name="author"
          content="BraiinyBear Educational and Training Society"
        />

        {/* Open Graph */}
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

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Courses | BraiinyBear" />
        <meta
          name="twitter:description"
          content="Explore inclusive, skill-building courses by BraiinyBear Educational and Training Society."
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
              Join us in our mission to transform education and be part of the change.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-[1200px] w-full mx-auto mb-8">
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by name, description, status, approval, totalFee"
              className="w-full px-5 py-3 rounded-full border focus:ring-2 focus:ring-sky-500"
            />
          </div>

          {/* Courses */}
          {loading ? (
            <div className="flex justify-center items-center min-h-[300px]">
              <Loader className="w-10 h-10 text-sky-600 animate-spin" />
            </div>
          ) : (
            <>
              {/* Render all categories except "Other" */}
              {orderedCategories.map(([category, courses]) => {
                const filteredCoursesInCategory = filterCourses(courses);
                if (filteredCoursesInCategory.length === 0) return null;

                return (
                  <div
                    key={category}
                    className="col-span-full mb-10 rounded-lg shadow-xl p-6"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.4)), url(${categoryImages[category]})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  >

                    {/* Category Heading */}
                    <h3 className="text-2xl font-extrabold mb-6 text-gray-800 relative inline-block">
                      {category}
                      <span className="absolute left-0 bottom-0 w-16 h-1 rounded-full bg-sky-500"></span>
                    </h3>

                    {/* Scrollable container if more than 5 courses */}
                    <div
                      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 scrollbar-hide"
                      style={{
                        maxHeight: "30rem",
                        overflowY: filteredCoursesInCategory.length > 5 ? "auto" : "visible",
                      }}
                    >
                      {filteredCoursesInCategory.map((course) => (
                        <div
                          key={course.id}
                          onClick={() => navigate(`/courses/${course.id}`)}
                          className="cursor-pointer bg-white rounded-2xl shadow-md hover:shadow-xl transition p-4 flex items-start gap-4 "
                        >
                          {course.image && (
                            <img
                              src={course.image}
                              alt={course.title}
                              className="w-16 h-16 rounded-full object-fill flex-shrink-0"
                            />
                          )}
                          <div className="flex flex-col justify-start">
                            <span className="font-semibold text-sm">{course.title}</span>
                            {course.shortDescription && (
                              <p className="text-xs text-gray-600 line-clamp-2 mt-1">
                                {course.shortDescription}
                              </p>
                            )}
                          </div>
                        </div>


                      ))}
                    </div>
                  </div>
                );
              })}

              {/* Render "Other" category at bottom */}
              {filterCourses(otherCourses).length > 0 && (
                <div className="col-span-full mt-10 rounded-md shadow-xl p-6 bg-white">
                  <h3 className="text-2xl font-extrabold mb-6 text-gray-800 relative inline-block">
                    Other
                    <span className="absolute left-0 bottom-0 w-16 h-1 rounded-full bg-sky-500"></span>
                  </h3>

                  <div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 scrollbar-hide"
                    style={{
                      maxHeight: "30rem",
                      overflowY: filterCourses(otherCourses).length > 5 ? "auto" : "visible",
                    }}
                  >
                    {filterCourses(otherCourses).map((course) => (
                      <div
                        key={course.id}
                        onClick={() => navigate(`/courses/${course.id}`)}
                        className="cursor-pointer bg-white rounded-2xl shadow-md hover:shadow-xl transition p-3 flex items-center gap-3"
                      >
                        {course.image && (
                          <img
                            src={course.image}
                            alt={course.title}
                            className="w-14 h-14 rounded-lg object-cover"
                          />
                        )}
                        <span className="font-semibold text-sm">{course.title}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default Course;
