import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <>
      <div className="home-box">
        <div className="home-inner-box container">
        <h1 className="portfolio-title">Skills</h1>
        <div className="skills-list">
            <div className="skill-item">
              <h2>Typography</h2>
              <p>
                Understanding fonts, typefaces, and how to pair them effectively.
                Knowledge of font sizes, line spacing, and kerning for readability
                and aesthetic appeal.
              </p>
            </div>
            <div className="skill-item">
              <h2>Color Theory</h2>
              <p>
                Understanding the color wheel, color harmony, and the psychological
                impact of colors. Ability to create color palettes that convey the
                desired mood and message.
              </p>
            </div>
            <div className="skill-item">
              <h2>Layout and Composition</h2>
              <p>
                Knowledge of grid systems and how to structure a design for balance
                and visual hierarchy. Skills in arranging text and images to guide
                the viewer’s eye and enhance usability.
              </p>
            </div>
            <div className="skill-item">
              <h2>Software Proficiency</h2>
              <p>
                Proficiency in graphic design software such as Adobe Creative Suite
                (Photoshop, Illustrator, InDesign), CorelDRAW, and Figma for UI/UX
                design.
              </p>
            </div>
            <div className="skill-item">
              <h2>Branding</h2>
              <p>
                Understanding the principles of branding and how to create visual
                identities. Ability to design logos and brand materials that
                communicate a company’s values and message.
              </p>
            </div>
            <div className="skill-item">
              <h2>Print Design</h2>
              <p>
                Understanding print production processes and specifications. Skills
                in designing materials like brochures, flyers, posters, and
                business cards.
              </p>
            </div>
            <div className="skill-item">
              <h2>Attention to Detail</h2>
              <p>
                A keen eye for detail to ensure designs are polished and error-free.
                Skills in checking typography, alignment, and overall design
                consistency.
              </p>
            </div>
            <div className="skill-item">
              <h2>Creative Thinking</h2>
              <p>
                Ability to brainstorm and generate innovative ideas. Skills in
                problem-solving through design solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
