import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';


import Layout from './components/layout/Layout';
import ScrollToTop from './components/ScrollToTop';
import Loader from './components/Loader';

// Lazy-loaded pages
const Home = lazy(() => import('./pages/Home'));
const Overview = lazy(() => import('./pages/about/Overview'));
const OurPeople = lazy(() => import('./pages/about/OurPeople'));
const Contact = lazy(() => import('./pages/ContactUs'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Education = lazy(() => import('./pages/work-areas/Education'));
const Environment = lazy(() => import('./pages/work-areas/Environment'));
const Agriculture = lazy(() => import('./pages/work-areas/Agriculture'));
const DrugRehabilitation = lazy(() => import('./pages/work-areas/DrugRehabilitation'));
const AnimalHusbandry = lazy(() => import('./pages/work-areas/AnimalHusbandry'));
const SeniorCitizen = lazy(() => import('./pages/work-areas/SeniorCitizen'));
const InnovationTechnology = lazy(() => import('./pages/work-areas/InnovationTechnology'));
const WomenEmpowerment = lazy(() => import('./pages/work-areas/WomenEmpowerment'));
const Course = lazy(() => import('./pages/courses/Courses'));
const CourseDetails = lazy(() => import('./pages/courses/CourseDetails'));

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<Loader />}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/overview"
            element={
              <Suspense fallback={<Loader />}>
                <Overview />
              </Suspense>
            }
          />
          <Route
            path="/about/our-people"
            element={
              <Suspense fallback={<Loader />}>
                <OurPeople />
              </Suspense>
            }
          />
          <Route
            path="/our-people"
            element={
              <Suspense fallback={<Loader />}>
                <OurPeople />
              </Suspense>
            }
          />
          <Route
            path="/gallery"
            element={
              <Suspense fallback={<Loader />}>
                <Gallery />
              </Suspense>
            }
          />
          <Route
            path="/contact"
            element={
              <Suspense fallback={<Loader />}>
                <Contact />
              </Suspense>
            }
          />
          <Route
            path="/education"
            element={
              <Suspense fallback={<Loader />}>
                <Education />
              </Suspense>
            }
          />
          <Route
            path="/environment"
            element={
              <Suspense fallback={<Loader />}>
                <Environment />
              </Suspense>
            }
          />
          <Route
            path="/agriculture"
            element={
              <Suspense fallback={<Loader />}>
                <Agriculture />
              </Suspense>
            }
          />
          <Route
            path="/drug-rehabilitation"
            element={
              <Suspense fallback={<Loader />}>
                <DrugRehabilitation />
              </Suspense>
            }
          />
          <Route
            path="/animal-husbandry"
            element={
              <Suspense fallback={<Loader />}>
                <AnimalHusbandry />
              </Suspense>
            }
          />
          <Route
            path="/senior-citizens"
            element={
              <Suspense fallback={<Loader />}>
                <SeniorCitizen />
              </Suspense>
            }
          />
          <Route
            path="/innovation-and-technology"
            element={
              <Suspense fallback={<Loader />}>
                <InnovationTechnology />
              </Suspense>
            }
          />
          <Route
            path="/women-empowerment"
            element={
              <Suspense fallback={<Loader />}>
                <WomenEmpowerment />
              </Suspense>
            }
          />
          <Route
            path="/courses"
            element={
              <Suspense fallback={<Loader />}>
                <Course />
              </Suspense>
            }
          />
          <Route
            path="/courses/:id"
            element={
              <Suspense fallback={<Loader />}>
                <CourseDetails />
              </Suspense>
            }
          />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
