import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

import ScrollToTop from "./components/ScrollToTop";
import Loader from "./components/Loader";
import Faq from "./pages/Faq";

const Home = lazy(() => import("./pages/Home"));
const Overview = lazy(() => import("./pages/about/Overview"));
const OurPeople = lazy(() => import("./pages/about/OurPeople"));
const Contact = lazy(() => import("./pages/ContactUs"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Education = lazy(() => import("./pages/work-areas/Education"));
const Environment = lazy(() => import("./pages/work-areas/Environment"));
const Agriculture = lazy(() => import("./pages/work-areas/Agriculture"));
const DrugRehabilitation = lazy(
  () => import("./pages/work-areas/DrugRehabilitation")
);
const AnimalHusbandry = lazy(
  () => import("./pages/work-areas/AnimalHusbandry")
);
const SeniorCitizen = lazy(() => import("./pages/work-areas/SeniorCitizen"));
const InnovationTechnology = lazy(
  () => import("./pages/work-areas/InnovationTechnology")
);
const WomenEmpowerment = lazy(
  () => import("./pages/work-areas/WomenEmpowerment")
);
const OurWork = lazy(
  () => import("./pages/OurWork")
);
const Volunteer = lazy(
  () => import("./pages/volunteer")
);
const Course = lazy(() => import("./pages/courses/Courses"));
const CourseDetails = lazy(() => import("./pages/courses/CourseDetails"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Layout = lazy(() => import("./components/layout/Layout"));

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loader />}>
              <Layout>
                <Home />
              </Layout>
            </Suspense>
          }
        />
        <Route
          path="/overview"
          element={
            <Suspense fallback={<Loader />}>
              <Layout>
                <Overview />
              </Layout>
            </Suspense>
          }
        />
        <Route
          path="/about/our-people"
          element={
            <Suspense fallback={<Loader />}>
              <Layout>
                <OurPeople />
              </Layout>
            </Suspense>
          }
        />
        <Route
          path="/our-people"
          element={
            <Suspense fallback={<Loader />}>
              <Layout>
                <OurPeople />
              </Layout>
            </Suspense>
          }
        />
        <Route
          path="/gallery"
          element={
            <Suspense fallback={<Loader />}>
              <Layout>
                <Gallery />
              </Layout>
            </Suspense>
          }
        />
        <Route
          path="/contact"
          element={
            <Suspense fallback={<Loader />}>
              <Layout>
                <Contact />
              </Layout>
            </Suspense>
          }
        />
        <Route
          path="/education"
          element={
            <Suspense fallback={<Loader />}>
              <Layout>
                <Education />
              </Layout>
            </Suspense>
          }
        />
        <Route
          path="/environment"
          element={
            <Suspense fallback={<Loader />}>
              <Layout>
                <Environment />
              </Layout>
            </Suspense>
          }
        />
        <Route
          path="/agriculture"
          element={
            <Suspense fallback={<Loader />}>
              <Layout>
                <Agriculture />
              </Layout>
            </Suspense>
          }
        />
        <Route
          path="/volunteer"
          element={
            <Suspense fallback={<Loader />}>
              <Layout>
                <Volunteer />
              </Layout>
            </Suspense>
          }
        />
        <Route
          path="/drug-rehabilitation"
          element={
            <Suspense fallback={<Loader />}>
              <Layout>
                <DrugRehabilitation />
              </Layout>
            </Suspense>
          }
        />
        <Route
          path="/animal-husbandry"
          element={
            <Suspense fallback={<Loader />}>
              <Layout>
                <AnimalHusbandry />
              </Layout>
            </Suspense>
          }
        />
        <Route
          path="/senior-citizens"
          element={
            <Suspense fallback={<Loader />}>
              <Layout>
                <SeniorCitizen />
              </Layout>
            </Suspense>
          }
        />
        <Route
          path="/innovation-and-technology"
          element={
            <Suspense fallback={<Loader />}>
              <Layout>
                <InnovationTechnology />
              </Layout>
            </Suspense>
          }
        />
        <Route
          path="/women-empowerment"
          element={
            <Suspense fallback={<Loader />}>
              <Layout>
                <WomenEmpowerment />
              </Layout>
            </Suspense>
          }
        />
        <Route
          path="/courses"
          element={
            <Suspense fallback={<Loader />}>
              <Layout>
                <Course />
              </Layout>
            </Suspense>
          }
        />
        <Route
          path="/faq"
          element={
            <Suspense fallback={<Loader />}>
              <Layout>
                <Faq />
              </Layout>
            </Suspense>
          }
        />
        <Route
          path="/our-work"
          element={
            <Suspense fallback={<Loader />}>
              <Layout>
                <OurWork />
              </Layout>
            </Suspense>
          }
        />
        <Route
          path="/courses/:id"
          element={
            <Suspense fallback={<Loader />}>
              <Layout>
                <CourseDetails />
              </Layout>
            </Suspense>
          }
        />
        {/* NotFound Route */}
        <Route
          path="*"
          element={
            <Suspense fallback={<Loader />}>
              <NotFound />
            </Suspense>
          }
        />


      </Routes>
    </Router>
  );
}

export default App;
