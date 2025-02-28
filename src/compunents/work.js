import { motion } from "framer-motion";
import project1 from "../img/img1.webp";


const projects = [
  { id: 1, img: project1, title: "Stand-Up Comedy" },
  { id: 2, img: project1, title: "Modern E-commerce" },
  { id: 3, img: project1, title: "Luxury Website" },
  { id: 4, img: project1, title: "Event Booking" },
  { id: 5, img: project1, title: "Corporate Digital" },
];

export default function PortfolioSection() {
  return (
    <section className="portfolio-section">
      <div className="container">
        <h2 className="section-title">Your Work</h2>
        <div className="portfolio-grid">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.02 }}
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
