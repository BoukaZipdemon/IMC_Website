import React, { useState } from "react";
const ImageSlider = ({ slides}) => {
    const [currentIndex, setCurrentUser]= useState(0);
    return  (
         <div className={"slider"}>
          <div className={"left-arrow"}> ← </div>
          <div className={"right-arrow"}> → </div>
            <div className={"slide" }></div>
          </div>
          
        );
     };

 
export default ImageSlider;
