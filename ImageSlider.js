import React, { useState } from "react";
import {useTypewriter,Cursor} from 'react-simple-typewriter';
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
    const [text] = useTypewriter({
      words: [' Creativity',' HardWork',' Passion',' Fun','Development'],
      loop: {},
    });

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
                  <h3 className="welcome"> <span style={{color:'blue'}}>W</span>ELCOME <span style={{color:'red'}}>T</span>O <span style={{color:'green'}}>I</span>SAMM <span style={{color:'#7F8000'}}>M</span>ICROSOFT <span style={{color:'blue'}}>C</span>LUB !</h3>
                  <h1 className="whatever">Where Creativity Meets Intellect and Hard Work , Engaging Minds in Intellectual, Professional, Educational, and Inspirational Pursuits is The Microsoft Club Way!</h1>
                  <h1 className="sp1" style={{margin: '50px',fontSize:'24px'}}>
                     An Experience Full Of <br />
                     
                     <span style={{fontWeight: 'bold',color:'blue',fontSize:'24px'}}>
                       {text}
                     </span>
                     <span style={{color:'blue'}}>
                       <Cursor />
                     </span>
                  </h1>
                </div>
             </div>
          </div>
          
        );
     };

 
export default ImageSlider;
