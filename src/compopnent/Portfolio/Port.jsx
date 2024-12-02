import React from 'react'

export const Port = () => {
  return (
    <>
    <div className="home-box">
   <div className="home-inner-box">


      <h1>My Portfolio</h1>
    <div className="d-flex " style={{justifyContent:'space-evenly'}}>
    <div className="portfolio-tab">
      <div class="card  bg-secondary" style={{ width: "30rem" }}>
      <img src='' class="d-block  " alt="..." />
        <div class="card-body">
          <h5 class="card-title">Photography Project</h5>
          <p class="card-text">
         <b >"Through the Lens: Capturing Life's Essence" </b>  <br />
         <img src='' class="d-block  " alt="..." />
          A striking interplay of light and shadow, emotion and stillness.
           This cover reflects the soul of photography: freezing moments
            that speak louder than words, each image a chapter in the story of existence."
          </p>
        </div>
        
        <div class="card-body  ">
          <a href="#" class="card-link text-dark">
            Read more
          </a>
          
        </div>
      </div>


    </div>


    
    </div>
   </div>

    </div>
    
    
    </>
  )
}
