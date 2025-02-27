import React, { lazy, Suspense, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import Navbar from "./Components/Navbar.jsx";
import "./index.css";

// Lazy-loaded pages
const Home = lazy(() => import("./Pages/Home.jsx"));
const Project = lazy(() => import("./pages/Project.jsx"));
const About = lazy(() => import("./pages/About.jsx"));
const Contact = lazy(() => import("./pages/Contact.jsx"));
const Services = lazy(() => import("./pages/Services.jsx"));

const FutureProjects = lazy(() => import("./Pages/FutureProjects.jsx"));
const CompletedProjects = lazy(() => import("./Pages/CompletedProjects.jsx"));
const WorkingProjects = lazy(() => import("./Pages/WorkingProjects.jsx"));
const MyStory = lazy(() => import("./Pages/MyStory.jsx"));
const MyJourney = lazy(() => import("./Pages/MyJourney.jsx"));
const Teaching = lazy(() => import("./Pages/TeachingService.jsx"));
const WebDevelopment = lazy(() => import("./Pages/WebServices.jsx"));
const Connect = lazy(() => import("./Pages/Connect.jsx"));
const ResearchProjects = lazy(() => import("./Pages/ResearchProject.jsx"));

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
      >
        <Suspense fallback={<div className="text-center">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Project />}>
              <Route
                path="/projects/futureProjects"
                element={<FutureProjects />}
              />
              <Route
                path="/projects/completedProjects"
                element={<CompletedProjects />}
              />
              <Route
                path="/projects/workingProjects"
                element={<WorkingProjects />}
              />
              <Route
                path="/projects/researchProjects"
                element={<ResearchProjects />}
              />
            </Route>

            <Route path="/about" element={<About />}>
              <Route path="/about/myStory" element={<MyStory />} />
              <Route path="/about/myJourney" element={<MyJourney />} />
              <Route path="/about/collaborate" element={<Connect />} />
            </Route>
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />}>
              <Route path="/services/teaching" element={<Teaching />} />
              <Route path="/services/website" element={<WebDevelopment />} />
            </Route>
          </Routes>
        </Suspense>
      </motion.div>
    </AnimatePresence>
  );
};

const App = () => {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <Router>
      <Navbar />
      <div className="bg-white dark:bg-black min-h-screen pt-20 p-4">
        <AnimatedRoutes />
      </div>
    </Router>
  );
};

export default App;
