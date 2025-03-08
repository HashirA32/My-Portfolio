import React, { useState } from "react";
import ReactPlayer from "react-player";
import video from "../videos/UADL.mp4";
import video2 from "../videos/UADM.mp4";


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
    <div className={`portfolio-container ${hoveredVideo ? "video-hover" : ""}`}>
      {/* Video Section */}
      <div className="video-section">
        <div className="Casestudy-heading">MY RECENT WORK</div>
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
          <span className="tag">Bootstrap CSS</span>
          <span className="tag">HTML</span>
          <span className="tag">UAD</span>
        </div>

        <p className="description">
          We revamped Chargeflow’s website to enhance user experience, streamline messaging, 
          and improve lead generation through clear value propositions and intuitive design.
        </p>

        <button className="view-project-btn">
          View Project <span className="arrow">→</span>
        </button>
      </div>
    </div>
  );
};

export default PortfolioShowcase;
