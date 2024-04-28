import React, { useState } from "react";
const ImageSlider = ({slides}) => {
    const [currentIndex, setCurrentINDEX]= useState(0);
    const gotoPrevious =() =>{
      const isFirstSlide= currentIndex===0;
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
              <div style={SlideStyles}></div>
          </div>
          
        );
     };

 
export default ImageSlider;
