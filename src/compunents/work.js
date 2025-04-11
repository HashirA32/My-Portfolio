import { motion } from "framer-motion";
import project1 from "../img/Img1.png";
import project2 from "../img/Img5.png";
import project3 from "../img/Img4.png";
import project4 from "../img/Img3.png";
import project5 from "../img/Img2.png";
const projects = [
  { id: 1, img: project1, title: "Quip Website Redesigned" },
  { id: 2, img: project2, title: "CocaCola Redesigned" },
  { id: 3, img: project3, title: "Animated Form" },
  { id: 4, img: project4, title: "Burger Builder" },
  { id: 5, img: project5, title: "Chart Designes" },
];

export default function PortfolioSection() {
  return (
    <section className="portfolio-section">
      <div className="container">
        <h2 className="section-title">My Work</h2>
        <div className="portfolio-grid">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 2.02 }}
              className="portfolio-item"
            >
              <div className="portfolio-card mt-{project.id}">
                <img src={project.img} alt={project.title} className="portfolio-image" />
                <div className="portfolio-overlay">
                  <h3 className="portfolio-title">{project.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
