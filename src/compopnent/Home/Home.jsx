import React from "react";
import c from '../image/Passion-in-Life.jpg'
import "./Home.css";
import B from '../image/Formal-Business-Headshot.jpg'
import D from '../image/Aesthetic Dramatic shot.jpg'
const Home = () => {
  return (
    <>
      
      <div className="home-box ">
        <div className="home-inner-box container">
          <p>
            <h1>Welcome to My Portfolio</h1>
            <p>
              Hi there! I'm Denzil Dsouza, a passionate and creative Interactive
              Media Designer.
              <p></p>
              In my portfolio, you’ll find highlights of my most recent
              projects, showcasing my skills in Design, Photography, UI/UX
              Design etc. Each project reflects my commitment to quality,
              attention to detail, and dedication to user-centered design.
            </p>
            <p>
              I love creating solutions that are both functional and beautiful,
              and I’m always excited to take on new challenges. Feel free to
              explore my projects, learn more about my background, or{" "}
              <a href="#contact">get in touch</a> if you'd like to connect.
            </p>
            <p>
              Thank you for visiting, and I hope you enjoy browsing my work!
            </p>
          </p>
          {/* <button type="button" class="btn btn-outline-primary">
            Photography Projects
          </button>
          <button type="button" class="btn btn-outline-secondary">
            Graphic Design Projects
          </button>
          <button type="button" class="btn btn-outline-success">
            Interactive Media Projects
          </button>
          <button type="button" class="btn btn-outline-danger">
            Website
          </button> */}
          <div className="container " >
          <div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={c} class="d-block  " alt="..." style={{width:'26rem', height:'30rem',margin:'auto'}}/>
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={B} class="d-block " alt="..."style={{width:'26rem', height:'30rem',margin:'auto'}}/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={D} class="d-block" alt="..." style={{width:'26rem', height:'30rem',margin:'auto'}}/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
          
          </div>


        </div>
      </div>
    </>
  );
};

export default Home;