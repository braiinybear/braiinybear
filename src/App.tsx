import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Overview from './pages/about/Overview'
import OurPeople from './pages/about/OurPeople'
import Contact from './pages/ContactUs'
import Gallery from './pages/Gallery'
import Education from './pages/work-areas/Education'
import Environment from './pages/work-areas/Environment'
import Agriculture from './pages/work-areas/Agriculture'
import DrugRehabilitation from './pages/work-areas/DrugRehabilitation'
import AnimalHusbandry from './pages/work-areas/AnimalHusbandry'
import SeniorCitizen from './pages/work-areas/SeniorCitizen'
import InnovationTechnology from './pages/work-areas/InnovationTechnology'
import WomenEmpowerment from './pages/work-areas/WomenEmpowerment'
import ScrollToTop from './components/ScrollToTop'
import Course from './pages/courses/Courses'
import CourseDetails from './pages/courses/CourseDetails'

function App() {

  return (
    <>
        <Router>
        <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/about/our-people" element={<OurPeople />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/our-people" element={<OurPeople />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/education" element={<Education />} />
          <Route path="/environment" element={<Environment />} />
          <Route path="/agriculture" element={<Agriculture />} />
          <Route path="/drug-rehabilitation" element={<DrugRehabilitation />} />
          <Route path="/animal-husbandry" element={<AnimalHusbandry />} />
          <Route path="/senior-citizens" element={<SeniorCitizen />} />
          <Route path="/innovation-and-technology" element={<InnovationTechnology />} />
          <Route path="/women-empowerment" element={<WomenEmpowerment />} />
           <Route path="/courses" element={<Course />} />
          <Route path="/courses/:id" element={<CourseDetails />} />
        </Routes>
      </Layout>
    </Router>
    </>
  )
}

export default App
