import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import c from "../image/Photocover.jpg";
import p from "../image/Videocover.jpg";

const Portfolio = () => {
  return (
    <>
      <div className="home-box">
        <div className="home-inner-box">
          <h1>My Portfolio</h1>
          <div className="d-flex" style={{ justifyContent: "space-evenly" }}>
            <div className="portfolio-tab">
              <div className="card bg-secondary" style={{ width: "30rem" }}>
                <img src={c} className="d-block" alt="Photography" />
                <div className="card-body">
                  <h5 className="card-title">Photography Project</h5>
                  <p className="card-text">
                    <b>"Through the Lens: Capturing Life's Essence" </b>
                    <br />
                    <br />A striking interplay of light and shadow, emotion and
                    stillness. This photography project reflects the soul of
                    photography: freezing moments that speak louder than words,
                    each image a chapter in the story of existence.
                  </p>
                </div>

                <div className="card-body">
                  {/* Use Link instead of a */}
                  <Link to="/portfolio/photos" className="card-link text-dark">
                    Read more
                  </Link>
                </div>
              </div>
            </div>

            <div className="card bg-secondary" style={{ width: "30rem" }}>
              <img src={p} className="d-block" alt="Videography" />
              <div className="card-body">
                <h5 className="card-title">Videography Project</h5>
                <p className="card-text">
                  <b>"Frames in Motion: Telling Stories Through Film" </b>
                  <br />
                  <br />A dynamic videography project that embodies the art of
                  videography, where every frame flows seamlessly into the next,
                  weaving vivid tales that linger long after the reel stops.
                </p>
              </div>

              <div className="card-body">
                {/* Use Link instead of a */}
                <Link to="/portfolio/video" className="card-link text-dark">
                  Read more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
