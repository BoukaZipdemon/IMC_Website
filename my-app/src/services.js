import React from 'react';



const Services = () => {

  return (
  <div className="container">
          <h1 className='title'><span>S</span>ervices</h1>
      <div className='taw'>
        <div className="workshop-container">
            <img className='img1' src="tech.jpg"  />
            <h2 className='workshop'>Technical Workshops!</h2>
            <p className="workshop-description">
          Explore immersive learning at IMC VODCAST, Led by experts, our workshops cover diverse technical fields,
          empowering you to master new skills. Join us on a journey of discovery in technology!
            </p>
            <img className='img1' src="il.png"/>
        </div>
    <div className="triple">
      <div className="both">
        <div className="empowerment-container">
            <h2 className="empower">Empower Your Career with IMC's Personalized Development!</h2>
            <p className="description">
          AT ISAMM Microsoft Club, we support your holistic career growth. Get personalized guidance for success at every step!
            </p>
        </div>
     
      <div className="competition-container">
        <img className='img2' src="chal.jpg"  />
        <h2 className='competition'>Gear Up for Thrilling Tech Challenges at IMC!</h2>
        <p className="competition-description">
          Compete, showcase, and unleash with ISAMM Microsoft Club's dynamic tech competitions. Push your limits and emerge victorious!
        </p>
      </div>

      </div>
        <div className="info-container">
          <h2 className='info'>IMC VODCAST</h2>
            <p className="info-text">For more info feel free to discover our instagram page</p>
            <a  href="https://www.instagram.com/isamm_microsoft_club/"target="_blank"><img className="instaa" src="insta.png" alt="" /></a>
            <a/>
        </div>
      </div>
      </div>
    </div>
  );
};


export default Services;