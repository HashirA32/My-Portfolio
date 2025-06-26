import React, { useState } from "react";
import ReactPlayer from "react-player";
import video from "../videos/blog_d.mp4";
import video2 from "../videos/blog_m.mp4";


const VideoComponent = ({ url, className, hoveredVideo, setHoveredVideo }) => {
  return (
    <div
      className={`video ${className} ${hoveredVideo === className ? "hovered" : ""}`}
      onMouseEnter={() => setHoveredVideo(className)}
      onMouseLeave={() => setHoveredVideo(null)}
    >
      <ReactPlayer url={url} playing={hoveredVideo === className} loop muted width="100%" height="100%" />
    </div>
  );
};

const PortfolioShowcase = () => {
  const [hoveredVideo, setHoveredVideo] = useState(null);

  return (
    <div className={`portfolio-container ${hoveredVideo ? "video-hover" : ""} `}>
      {/* Video Section */}
      <div className="video-section ">
        <div className="text-white text-5xl mt-16 font-bold ">MY RECENT WORK</div>
        <div className="video-container">
          <VideoComponent url={video} className="video-1" hoveredVideo={hoveredVideo} setHoveredVideo={setHoveredVideo} />
          <VideoComponent url={video2} className="video-2" hoveredVideo={hoveredVideo} setHoveredVideo={setHoveredVideo} />
          <VideoComponent url={video} className="video-3" hoveredVideo={hoveredVideo} setHoveredVideo={setHoveredVideo} />
        </div>
      </div>

      {/* Right Section: Text & Info */}
      <div className={`text-section ${hoveredVideo ? "" : ""}`}>
        <div className="tags">
          <span className="tag">CREATIVE DEVELOPMENT</span>
          <span className="tag">React JS</span>
          <span className="tag">Node JS</span>
          <span className="tag">Cloudnary</span>
          <span className="tag">MongoDB</span>
        </div>

        <p className="description">
         A modern full-stack blog platform built with the MERN stack. Features include user 
         authentication, post creation/editing, real-time comments, markdown support, and 
         responsive design — ideal for developers and writers alike.
        </p>

        <a href="https://blog-web-with-front-and-back-end-y27x.vercel.app/" 
         target="_blank"
         rel="noopener noreferrer"className="view-project-btn">
          View Project <span className="arrow">→</span>
        </a>
      </div>
    </div>
  );
};

export default PortfolioShowcase;
