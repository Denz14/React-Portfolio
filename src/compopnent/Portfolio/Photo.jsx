import React, { useState } from "react";
import e from "../image/Passion-in-Life.jpg";
import f from "../image/Formal-Business-Headshot.jpg";
import g from "../image/Aesthetic Dramatic shot.jpg";

export const Photo = () => {
  // State for like counters
  const [likes, setLikes] = useState({ card1: 0, card2: 0, card3: 0 });

  // Function to handle like button clicks
  const handleLike = (card) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [card]: prevLikes[card] + 1,
    }));
  };

  return (
    <>
      <div className="home-box">
        <div className="home-inner-box">
          <h1>Photography Project</h1>
          <span style={{ marginTop: "40px", display: "block" }}></span>

          <div
            className="d-flex"
            style={{ justifyContent: "space-evenly", flexWrap: "wrap" }}
          >
            {/* Card 1 */}
            <div className="portfolio-tab">
              <div
                className="card bg-secondary"
                style={{ width: "30rem", margin: "15px" }}
              >
                <img src={e} className="d-block" alt="Passion in Life" />
                <div className="card-body">
                  <h5 className="card-title">Passion in Life</h5>
                  <p className="card-text">
                    <b>"When Halos Come Down"</b> <br />
                    This photograph tells a story of reflection and symbolism.
                    My passion in life seems to revolve around a quest for
                    deeper meaning. The image reflects a desire to rise above
                    the ordinary, to seek purpose and clarity in a world that
                    often feels shrouded in mystery. The glowing halo symbolizes
                    my drive to illuminate the darkness, whether that’s through
                    knowledge, creativity, spirituality, or a meaningful pursuit
                    that connects me to something greater. My upward gaze
                    suggests a passion for growth, always looking ahead or
                    reaching higher. The simplicity of the setting shows that my
                    focus isn’t on distractions but on the essence of what truly
                    matters.
                    <br />
                    <b>Technical Details:</b> <br />
                    <i>Lighting:</i> Capti Ring lighting at yellow mode to
                    enhance the halo effect. <br />
                    <i>Camera Settings:</i> ISO 200, f/4.0, 1/125s shutter
                    speed. <br />
                  </p>
                  {/* Buttons */}
                  <div className="d-flex justify-content-around">
                    <button className="btn btn-like" onClick={() => handleLike("card1")}>
                      <i className="bi bi-hand-thumbs-up"></i> Like ({likes.card1})
                    </button>
                    <button className="btn btn-comment">
                      <i className="bi bi-chat-dots"></i> Comment
                    </button>
                    <button className="btn btn-share">
                      <i className="bi bi-share"></i> Share
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div
              className="card bg-secondary"
              style={{ width: "30rem", margin: "15px" }}
            >
              <img src={f} className="d-block" alt="Business Headshot" />
              <div className="card-body">
                <h5 className="card-title">Business-type Headshot</h5>
                <p className="card-text">
                  <b>"Portfolio Picture"</b> <br />
                  This image captures a confident and approachable mood, brought
                  to life by my expression and pose. My warm smile conveys a
                  sense of positivity and openness. The relaxed posture adds an
                  air of authenticity, making the overall tone inviting and
                  professional.
                  <br />
                  <b>Technical Details:</b> <br />
                  <i>Lighting:</i> Studio two-point lighting with a yellow glow to
                  reduce harsh shadows. <br />
                  <i>Camera Settings:</i> ISO 100, f/5.6, 1/60s shutter speed. <br />
                </p>
                {/* Buttons */}
                <div className="d-flex justify-content-around">
                  <button className="btn btn-like" onClick={() => handleLike("card2")}>
                    <i className="bi bi-hand-thumbs-up"></i> Like ({likes.card2})
                  </button>
                  <button className="btn btn-comment">
                    <i className="bi bi-chat-dots"></i> Comment
                  </button>
                  <button className="btn btn-share">
                    <i className="bi bi-share"></i> Share
                  </button>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div
              className="card bg-secondary"
              style={{ width: "30rem", margin: "15px" }}
            >
              <img src={g} className="d-block" alt="Aesthetic Dramatic Shot" />
              <div className="card-body">
                <h5 className="card-title">Aesthetic Dramatic Shot</h5>
                <p className="card-text">
                  <b>"Where Beauty Meets Perspective"</b> <br />
                  This photo feels like stepping into a peaceful moment of
                  reflection. The rows of wooden pews gently guide your eyes
                  toward the glowing altar, creating a sense of purpose and
                  direction. The light shining from the back gives it an almost
                  ethereal quality, evoking feelings of tranquility and peace.
                  It’s a moment frozen in time that encapsulates the serenity
                  and depth of the scene.
                  <br />
                  <b>Technical Details:</b> <br />
                  <i>Lighting:</i> Ambient lighting with enhanced contrast in
                  post-processing to emphasize the glow. <br />
                  <i>Camera Settings:</i> ISO 400, f/2.8, 1/30s shutter speed. <br />
                </p>
                {/* Buttons */}
                <div className="d-flex justify-content-around">
                  <button className="btn btn-like" onClick={() => handleLike("card3")}>
                    <i className="bi bi-hand-thumbs-up"></i> Like ({likes.card3})
                  </button>
                  <button className="btn btn-comment">
                    <i className="bi bi-chat-dots"></i> Comment
                  </button>
                  <button className="btn btn-share">
                    <i className="bi bi-share"></i> Share
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
