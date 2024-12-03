import React, { useState } from "react";
import h from "../image/The team.jpeg";
import i from "../image/Planning.jpg";
import j from "../image/Sound check.jpeg";
import k from "../image/Rode.jpg";
import l from "../image/Butter.jpg";
import m from "../image/Editing.jpg";
import n from "../image/Teamwork.jpeg";

export const Port = () => {
  // State to track likes
  const [likes, setLikes] = useState({ card3: 0 });

  // Handle the like button click
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
        <h1 className="portfolio-title">Videography Project</h1>
          <div className="d-flex" style={{ justifyContent: "center" }}>
            <div className="portfolio-tab">
              <div className="card bg-secondary" style={{ width: "50rem" }}>
                <div className="card-body">
                  
                  <p className="card-text">
                    <b>"Frames in Motion: Telling Stories Through Film"</b>
                  </p>

                  {/* Embedded Video */}
                  <iframe
                    width="100%"
                    height="400"
                    src="https://www.youtube.com/embed/f4ZAMhef5HI"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ marginBottom: "20px" }}
                  ></iframe>

                  {/* Buttons below video */}
                  <div className="button-group" style={{ marginBottom: "20px" }}>
                    <button
                      className="btn btn-like"
                      onClick={() => handleLike("card3")}
                    >
                      <i className="bi bi-hand-thumbs-up"></i> Like ({likes.card3})
                    </button>
                    <button className="btn btn-comment">
                      <i className="bi bi-chat-dots"></i> Comment
                    </button>
                    <button className="btn btn-share">
                      <i className="bi bi-share"></i> Share
                    </button>
                    </div>


                  {/* Descriptions and Images */}
                  <p className="card-text">
                    In today’s digitalised age, videos have become one of the
                    most powerful ways to tell stories, connect with audiences,
                    and bring ideas to life. Whether it’s a short promotional
                    clip, a narrative piece, or an explainer video, every
                    project starts with an idea/vision and ends with a shared
                    experience that leaves a lasting impact on the users.
                  </p>
                  <p className="card-text">
                    Video production isn’t just about cameras and editing
                    software—it’s about stitching together visuals, sounds, and
                    emotion to communicate a message effectively. From
                    pre-production planning to the final cut, every stage
                    requires creativity, technical skill and collaboration.
                  </p>
                  <p className="card-text">
                    In this blog, I’ll dive into the process behind the
                    scenes—how ideas evolve into compelling visuals and the
                    challenges we faced along the way to make it all worth it. I
                    hope these stories inspire you to see the power of video
                    through a new lens.
                  </p>

                  <img
                    src={h}
                    className="d-block"
                    alt="Team Collaboration"
                    style={{
                      margin: "20px auto",
                      maxWidth: "100%",
                      height: "auto",
                      display: "block",
                    }}
                  />

                  {/* Vision Section */}
                  <h6 style={{ marginTop: "20px", marginBottom: "10px" }}>
                    <b>The Vision</b>
                  </h6>
                  <p className="card-text">
                    Every project starts with a vision and for this food product
                    video, the goal was to create something that didn’t just
                    look delicious but also told a story that would connect with
                    our viewers. We wanted to showcase the product in a way that
                    captured its flavors, textures, and flexibility while
                    evoking the warmth, joy and comfort that food brings.
                  </p>
                  <p className="card-text">
                    To achieve this, I worked closely with the team to
                    conceptualize the video’s look and feel. From highlighting
                    the brand’s identity to ensuring the video style and tone
                    matched with the target audience, every detail was carefully
                    planned. Whether it was the warm lighting to mimic a cozy
                    kitchen or the choice of props to enhance the product's
                    appeal, the vision was all about making the food the
                    undeniable star of the show.
                  </p>
                  <img
                    src={i}
                    className="d-block"
                    alt="Planning Phase"
                    style={{
                      margin: "20px auto",
                      maxWidth: "100%",
                      height: "auto",
                      display: "block",
                    }}
                  />

                  {/* Pre-Production Section */}
                  <h6 style={{ marginTop: "20px", marginBottom: "10px" }}>
                    <b>Pre-Production</b>
                  </h6>
                  <p className="card-text">
                    In pre-production, I took charge of sound and recording,
                    ensuring the audio quality would elevate the entire
                    production. Using Rode wireless Go2 equipment, I carefully
                    planned the audio setup to capture crisp, clear, and
                    immersive sound that would complement the visuals perfectly.
                  </p>
                  <p className="card-text">
                    This phase took great coordination with my team to refine
                    the concept, finalize the script and select locations that
                    were both visually appealing and acoustically suitable. I
                    tested various setups to ensure that the Rode gear could
                    handle any challenges, from ambient noise to capturing the
                    nuances of the food preparation process. One of the greater
                    challenges was to ensure the white noise from the heater,
                    electric chimney was not reflected or introduced with the
                    audio of the video when recording. For that I used sound
                    muffs on the microphones which helped to a great extent. I
                    also enhanced the sound of chopping, boiling etc to mimic
                    the sounds that are produced when cooking.
                  </p>
                  <p className="card-text">
                    This role taught me just how critical sound is to
                    storytelling—how even the smallest details, like the sizzle
                    of food or the soft rustle of ingredients, can make a
                    production feel vibrant and authentic. It also reinforced
                    the importance of flexibility and foresight, as even minor
                    adjustments in pre-production can significantly impact the
                    final result.
                  </p>
                  <img
                    src={j}
                    className="d-block"
                    alt="Sound Check"
                    style={{
                      margin: "20px auto",
                      maxWidth: "100%",
                      height: "auto",
                      display: "block",
                    }}
                  />
                  <img
                    src={k}
                    className="d-block"
                    alt="Audio Equipment"
                    style={{
                      margin: "20px auto",
                      maxWidth: "100%",
                      height: "auto",
                      display: "block",
                    }}
                  />

                  {/* Production Section */}
                  <h6 style={{ marginTop: "20px", marginBottom: "10px" }}>
                    <b>Production</b>
                  </h6>
                  <p className="card-text">
                    On set, I focused on sound design and operation, ensuring
                    every audio detail was captured flawlessly using Rode
                    microphone equipment. My primary role was to set up and
                    monitor the sound, from the subtle sizzling of food to
                    chopping and boiling noises, to the ambient background
                    tones. This involved constant adjustments to ensure
                    high-quality audio regardless of the environment.
                  </p>
                  <p className="card-text">
                    In addition to sound, I stepped in to assist my team mate
                    with holding the lighting stands. Collaborating with the
                    lighting team, I helped create the perfect balance of warmth
                    and focus to make the food look as appetizing as possible on
                    camera.
                  </p>
                  <p className="card-text">
                    One memorable moment was trying to capture the sizzle of
                    butter in the pan. I quickly devised a way to hide the
                    microphone in the chef’s pocket just in front of the pan
                    where the butter was sizzling away from the frame of the
                    camera. This helped in getting quality audio of the butter
                    sizzling in the pan. This experience highlighted the
                    importance of adaptability and teamwork in bringing the
                    production to life exactly as envisioned.
                  </p>
                  <img
                    src={l}
                    className="d-block"
                    alt="Butter Sizzling Scene"
                    style={{
                      margin: "20px auto",
                      maxWidth: "100%",
                      height: "auto",
                      display: "block",
                    }}
                  />

                  {/* Post-Production Section */}
                  <h6 style={{ marginTop: "20px", marginBottom: "10px" }}>
                    <b>Post-Production</b>
                  </h6>
                  <p className="card-text">
                    This is where the magic truly came to life! Collaborating
                    closely with a teammate, I focused on the video editing
                    process, weaving together the footage into a seamless and
                    engaging narrative. While I took the lead on structuring the
                    timeline and refining the flow of the story, my teammate
                    brought their expertise in transitions and effects to
                    elevate the overall production.
                  </p>
                  <p className="card-text">
                    It was during this stage that I truly appreciated the impact
                    of every decision made in pre-production and production. The
                    clear vision and meticulous planning paid off, making it
                    easier to bring the story to life in post-production. We
                    focused on achieving a polished and cohesive final video
                    that stayed true to the original vision.
                  </p>
                  <img
                    src={m}
                    className="d-block"
                    alt="Video Editing Process"
                    style={{
                      margin: "20px auto",
                      maxWidth: "100%",
                      height: "auto",
                      display: "block",
                    }}
                  />

                  {/* Conclusion Section */}
                  <h6 style={{ marginTop: "20px", marginBottom: "10px" }}>
                    <b>Conclusion</b>
                  </h6>
                  <p className="card-text">
                    This experience taught me so much about the art of
                    storytelling through video, from the importance of sound and
                    lighting to the magic of editing. It also underscored the
                    value of teamwork, as every member played a crucial role in
                    bringing the project to life. I am so grateful for the
                    opportunity to work on this project and learn from my
                    talented teammates. I can’t wait to apply these lessons to
                    future projects and continue to grow as a videographer and
                    editor!
                  </p>
                  <img
                    src={n}
                    className="d-block"
                    alt="Teamwork"
                    style={{
                      margin: "20px auto",
                      maxWidth: "100%",
                      height: "auto",
                      display: "block",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
