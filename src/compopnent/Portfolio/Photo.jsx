import React from "react";
import e from "../image/Passion-in-Life.jpg";
import f from "../image/Formal-Business-Headshot.jpg";
import g from "../image/Aesthetic Dramatic shot.jpg";

export const Photo = () => {
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
                    matters. This image feels like a moment of balance between
                    the everyday world and something higher or more spiritual
                    and divine. This simple yet powerful scene invites the
                    viewer to imagine their own meaning behind it.
                    <br />
                    <span
                      style={{ marginTop: "10px", display: "block" }}
                    ></span>
                    <b>Technical Details:</b> <br />
                    <i>Lighting:</i> Capti Ring lighting at yellow mode to
                    enhance the halo effect. <br />
                    <i>Camera Settings:</i> ISO 200, f/4.0, 1/125s shutter
                    speed. <br />
                  </p>
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
                  professional. The lighting highlights my features subtly,
                  emphasizing my confident demeanor without overpowering the
                  composition. Together, these elements project a blend of
                  professionalism and friendliness, making this image suitable
                  for settings where trust and relatability are essential, such
                  as business profiles, creative portfolios, or personal
                  branding.
                  <br />
                  <span style={{ marginTop: "10px", display: "block" }}></span>
                  <b>Technical Details:</b> <br />
                  <i>Lighting:</i> Studio two point lighting with yellow glow to
                  reduce harsh shadows. <br />
                  <i>Camera Settings:</i> ISO 100, f/5.6, 1/60s shutter speed.{" "}
                  <br />
                </p>
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
                  <b>"Where Beauty meets Perspective"</b> <br />
                  This photo feels like stepping into a peaceful moment of
                  reflection. The rows of wooden pews gently guide your eyes
                  toward the glowing altar, creating a sense of purpose and
                  direction. The colorful stained glass windows add life and
                  warmth, telling quiet stories of hope and faith. The tall
                  arches overhead feel protective, like open arms, inviting you
                  to look up and pause. The soft golden light at the center
                  feels comforting, evoking a sense of sanctuary amidst the
                  vastness.
                  <br />
                  <span style={{ marginTop: "10px", display: "block" }}></span>
                  <b>Technical Details:</b> <br />
                  <i>Lighting:</i> Ambient lighting with enhanced contrast in
                  post-processing. <br />
                  <i>Camera Settings:</i> ISO 400, f/2.8, 1/30s shutter speed.{" "}
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
