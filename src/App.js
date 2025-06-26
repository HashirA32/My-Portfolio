import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./compunents/hero";
import Footer from "./compunents/footer";
import CaseStudy from "./compunents/caseStudy";
import Contact from "./compunents/contact";
import SkillsEducation from "./compunents/skils";
import { HeroParallax } from "./compunents/ui/hero-parallax";
import img1 from "./img/Img2.png";
import img2 from "./img/Img5.png";
import img3 from "./img/Img1.png";
import img4 from "./img/Img4.png";
import img5 from "./img/Img3.png";
import img6 from "./img/Img6.png";
import img7 from "./img/Img7.png";
import "./App.css";
import Navbar from "./compunents/navbar";

function App() {
  const products = [
    {
      title: "Project 1",
      link: "/",
      thumbnail: img1,
    },
    {
      title: "Project 2",
      link: "/",
      thumbnail: img2,
    },
    {
      title: "Project 3",
      link: "/",
      thumbnail: img6,
    },
    {
      title: "Project 4",
      link: "/",
      thumbnail: img4,
    },
    {
      title: "Project 5",
      link: "/",
      thumbnail: img5,
    },
    {
      title: "Project 6",
      link: "/",
      thumbnail: img5,
    },
    {
      title: "Project 7",
      link: "/",
      thumbnail: img7,
    },
    {
      title: "Project 8",
      link: "/",
      thumbnail: img3,
    },
    {
      title: "Project 9",
      link: "/",
      thumbnail: img2,
    },
    {
      title: "Project 10",
      link: "/",
      thumbnail: img1,
    },
  ];

  return (
    <Router>
      <Routes>
        {/* Default route renders all components as a single page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <HeroParallax products={products} />
              <hr />

              <CaseStudy />
              <hr />
              <SkillsEducation />
              <Contact />
              <Footer />
            </>
          }
        />

        <Route
          path="/contact"
          element={
            <>
              <Hero />
              <Contact />
              <Footer />
            </>
          }
        />

        <Route
          path="/work"
          element={
            <>
            <Navbar />
              <HeroParallax products={products} />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
