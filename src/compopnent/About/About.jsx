import React from "react";
import d from "../image/Denzil.jpg";

const About = () => {
  return (
    <>
      <div className="home-box">
        <div className="home-inner-box container">
          <p>
            <img
              src={d}
              className="d-block"
              alt="..."
              style={{
                marginBottom: "60px",
                maxWidth: "100%",
                height: "auto", // Maintains aspect ratio
                display: "block",
                margin: "0 auto", // Centers the image horizontally
              }}
            />
            As a seasoned graphic designer with over a decade of experience, I
            have mastered the art of transforming ideas into visually
            captivating narratives. My journey blends an innate artistic flair
            with a deep understanding of modern design technologies, enabling me
            to craft designs that are not just aesthetically pleasing but also
            strategically impactful. My expertise spans across branding, print,
            and digital media, making me a versatile creator equipped to bring
            diverse projects to life. Whether shaping a brand's identity,
            creating stunning print collateral, or crafting dynamic digital
            visuals, I am committed to delivering designs that resonate,
            inspire, and leave a lasting impression. Driven by a passion for
            creativity and an unwavering dedication to excellence, I collaborate
            closely with clients to understand their vision and translate it
            into designs that exceed expectations. Every project is an
            opportunity to push creative boundaries and produce work that is
            both meaningful and memorable. Let my experience and enthusiasm
            elevate your creative journey, turning your ideas into powerful
            visual stories that connect and captivate. Together, we can design
            something extraordinary.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
