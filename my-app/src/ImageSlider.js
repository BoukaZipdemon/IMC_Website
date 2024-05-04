import React, { useState } from "react";
const ImageSlider = ({slides}) => {
    const [currentIndex, setCurrentINDEX]= useState(0);
    const gotoPrevious = () => {
      const isFirstSlide= currentIndex===0
      const newIndex = isFirstSlide ? slides.length -1 : currentIndex - 1;
      setCurrentINDEX(newIndex);
    };
    const gotonext=()=>{
      const isLastslide = currentIndex=== slides.length -1;
      const newIndex = isLastslide ? 0 : currentIndex +1;
      setCurrentINDEX(newIndex);
    };
    const SlideStyles={
      width: '100%',
      height: '100%',
      borderRadius: '10px',
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundImage: `url(${slides[currentIndex].url})`,
    };
    return  (
         <div className={"slider"} >
              <div className={"left-arrow"} onClick={gotoPrevious}>
                ← 
              </div>
              <div className={"right-arrow"} onClick={gotonext}> 
                →
              </div>
              <div style={SlideStyles}>
                <div className="tawi">
                  <h3 className="welcome">WELCOME TO ISAMM MICROSOFT CLUB !</h3>
                  <h1 className="whatever">Where Creativity Meets Intellect and Hard Work , Engaging Minds in Intellectual, Professional, Educational, and Inspirational Pursuits is The Microsoft Club Way!</h1>
                </div>
             </div>
          </div>
          
        );
     };

 
export default ImageSlider;
