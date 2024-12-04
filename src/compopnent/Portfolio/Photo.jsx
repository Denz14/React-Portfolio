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
          <h1 className="portfolio-title">Photography Project</h1>
          <span style={{ marginTop: "40px", display: "block" }}></span>

          <div
            className="d-flex"
            style={{ justifyContent: "space-evenly", flexWrap: "wrap" }}
          >
            {/* Card 1 */}
            <div className="portfolio-tab">
              <div
                className="card bg-secondary"
                style={{ width: "30rem", margin: "15px", position: "relative" }}
              >
                {/* Top-centered title */}
                <h5
                  className="card-title"
                  style={{
                    position: "absolute",
                    top: "10px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    color: "white",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    padding: "5px 10px",
                    borderRadius: "5px",
                    textAlign: "center",
                  }}
                >
                  Passion in Life
                </h5>
                <img src={e} className="d-block" alt="Passion in Life" />
                {/* Buttons below the image */}
                <div className="d-flex justify-content-around my-3">
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
                <div className="card-body">
                  <p className="card-text">
                    <b>"When Halos Come Down"</b> <br />
                    This photograph tells a story of reflection and symbolism.
                    My passion in life seems to revolve around a quest for deeper meaning.
                    The image reflects a desire to rise above the ordinary, to seek purpose and clarity
                    in a world that often feels shrouded in mystery. The glowing halo symbolizes my drive
                    to illuminate the darkness, whether that’s through knowledge, creativity, spirituality,
                    or a meaningful pursuit that connects me to something greater. My upward gaze suggests
                    a passion for growth, always looking ahead or reaching higher. The simplicity of the setting
                    shows that my focus isn’t on distractions but on the essence of what truly matters. This image
                    feels like a moment of balance between the everyday world and something higher or more spiritual
                    and divine. This simple yet powerful scene invites the viewer to imagine their own meaning behind it.

                    <br />
                    <br />
                    <b>Technical Details:</b> <br />
                    <i>Lighting:</i> Capti Ring lighting at yellow mode to
                    enhance the halo effect. <br />
                    <i>Camera Settings:</i> Camera: SONY ZV-1, Lens: 24-70mm, Focal length: 11.70mm, ISO 400, f/2.5, Exposure: 1/2500s <br />
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div
              className="card bg-secondary"
              style={{ width: "30rem", margin: "15px", position: "relative" }}
            >
              {/* Top-centered title */}
              <h5
                className="card-title"
                style={{
                  position: "absolute",
                  top: "10px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  color: "white",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  padding: "5px 10px",
                  borderRadius: "5px",
                  textAlign: "center",
                }}
              >
                Business-type Headshot
              </h5>
              <img src={f} className="d-block" alt="Business Headshot" />
              {/* Buttons below the image */}
              <div className="d-flex justify-content-around my-3">
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
              <div className="card-body">
                <p className="card-text">
                  <b>"Portfolio Picture"</b> <br />
                  This image captures a confident and approachable mood, brought to life by my expression and pose.
                  My warm smile conveys a sense of positivity and openness. The relaxed posture adds an air of authenticity,
                  making the overall tone inviting and professional. The lighting highlights my features subtly, emphasizing
                  my confident demeanor without overpowering the composition. Together, these elements project a blend of
                  professionalism and friendliness, making this image suitable for settings where trust and relatability
                  are essential, such as business profiles, creative portfolios, or personal branding.

                  <br />
                  <br />
                  <b>Technical Details:</b> <br />
                  <i>Lighting:</i> Studio two-point lighting with a yellow glow to
                  reduce harsh shadows. <br />
                  <i>Camera Settings:</i> Camera: SONY ZV-1, Lens: 24-70mm, Focal length: 9.40mm, ISO 160, f/2.8, Exposure: 1/13s<br />
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div
              className="card bg-secondary"
              style={{ width: "30rem", margin: "15px", position: "relative" }}
            >
              {/* Top-centered title */}
              <h5
                className="card-title"
                style={{
                  position: "absolute",
                  top: "10px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  color: "white",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  padding: "5px 10px",
                  borderRadius: "5px",
                  textAlign: "center",
                }}
              >
                Aesthetic Dramatic Shot
              </h5>
              <img src={g} className="d-block" alt="Aesthetic Dramatic Shot" />
              {/* Buttons below the image */}
              <div className="d-flex justify-content-around my-3">
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
              <div className="card-body">
                <p className="card-text">
                  <b>"Where Beauty Meets Perspective"</b> <br />
                  This image portrays a dramatic and aesthetic mood with a focus on spiritual depth and symbolism.
                  The church altar acts as the centerpiece of the composition, evoking a sense of serenity and grandeur.
                  The dramatic lighting highlights the intricate details of the altar, creating a powerful contrast between
                  light and shadow. This shot emphasizes the solemnity and sacredness of the space, inviting the viewer to reflect
                  on themes of faith, heritage, and artistry. The symmetry of the composition enhances the feeling of balance
                  and harmony, while the use of perspective draws the eye toward the focal point.

                  <br />
                  <br />
                  <b>Technical Details:</b> <br />
                  <i>Lighting:</i> Ambient lighting with enhanced contrast in
                  post-processing to emphasize the glow. <br />
                  <i>Camera Settings:</i> Camera: APPLE iPhone 11, Focal length: 4.25mm, ISO 500, f/1.8, Exposure: 1/35s<br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
