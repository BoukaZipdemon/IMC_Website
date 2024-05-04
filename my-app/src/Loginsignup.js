import React from "react";
import './signup.css';

const loginsignup = () => {
    return (
        <div className="container3">
            <h1 className="title1"><span>J</span>OIN <span>U</span>S</h1>
            <div className="alltext">
                <form>
                    <div className="inputs">
                        <div className="name">
                            Name:
                                <input className="nom" type="text" />
                        </div>
                        <div className="email">
                            Email:
                                <input className="mail" type="email" /> 
                        </div>
                        <div className="name">
                            Phone number:
                                <input className="phone" type="tel" />
                            </div>
                        <div className="select">select a department:</div>
                        <select className="selection" name="select" id="myselect">
                            <option value="op1">logistiques</option>
                            <option value="op2">project</option>
                        </select>
                    </div>
                    <div className="bt">
                        <button type="submit" id="bt">submit</button>
                    </div>
                    
                </form>
                <div className="bothcontain">
                    <div className="imgcontainer1">
                        <img className="insta" src="imclogo.png" alt="logo" />
                    </div>
                    <div className="followus">
                        follow us on :
                        <div className="socials">
                            <a href=""><img className="in1" src="insta.png" alt="insta" /></a> 
                            <a href=""><img className="in2"  src="fb.png" alt="fb" /></a>
                            <a href=""><img className="in3" src="linkedin.png" alt="linkedin" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default loginsignup;
