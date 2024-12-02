import React from "react";
import c from "../image/Photocover.jpg";
import p from "../image/Videocover.jpg";

const Portfolio = () => {
  return (
    <>
      <div className="home-box">
        <div className="home-inner-box">
          <h1>My Portfolio</h1>
          <div className="d-flex " style={{ justifyContent: "space-evenly" }}>
            <div className="portfolio-tab">
              <div class="card  bg-secondary" style={{ width: "30rem" }}>
                <img src={c} class="d-block  " alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Photography Project</h5>
                  <p class="card-text">
                    <b>"Through the Lens: Capturing Life's Essence" </b> <br />
                    <br />A striking interplay of light and shadow, emotion and
                    stillness. This photography project reflects the soul of
                    photography: freezing moments that speak louder than words,
                    each image a chapter in the story of existence."
                  </p>
                </div>

                <div class="card-body  ">
                  <a href="/portfolio/photos" class="card-link text-dark">
                    Read more
                  </a>
                </div>
              </div>
            </div>

            <div class="card bg-secondary" style={{ width: "30rem" }}>
              <img src={p} class="d-block  " alt="..." />
              <div class="card-body">
                <h5 class="card-title">Videography project</h5>
                <p class="card-text">
                  <b> "Frames in Motion: Telling Stories Through Film" </b>{" "}
                  <br />
                  <br />A dynamic videography project that embodies the art of
                  videography, where every frame flows seamlessly into the next,
                  weaving vivid tales that linger long after the reel stops.
                </p>
              </div>

              <div class="card-body">
                <a href="/portfolio/video" class="card-link text-dark">
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
