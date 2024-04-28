import React, { useState } from "react";
const ImageSlider = ({ slides}) => {
    const [currentIndex, setCurrentINDEX]= useState(0);
    const gotoPrevious =() =>{
      const isFirstSlide= currentIndex===0
      const newIndex = isFirstSlide ? slides.length -1 : currentIndex - 1;
      setCurrentINDEX(newIndex);
    };
    const gotonext=()=>{
      const isLastslide = currentIndex=== slides.length -1;
      const newIndex = isLastslide ? 0 : currentIndex +1;
      setCurrentINDEX(newIndex);
    }
    return  (
         <div className={"slider"}>
          <div className={"left-arrow"} onClick={gotoPrevious}>
             ← 
             </div>
          <div className={"right-arrow"} onClick={gotonext}> 
          →
           </div>
            <div className={"slide" }></div>
          </div>
          
        );
     };

 
export default ImageSlider;
