import React from "react";
import './signup.css';

const loginsignup = () => {
    return (
        <div className="container1">
            <div className="title1">JOIN US</div>
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
                    <button type="submit">submit</button>
                </form>
                <div className="bothcontain">
                    <div className="imgcontainer1">
                        <img className="insta" src="imclogo.png" alt="logo" />
                    </div>
                    <div className="followus">
                        follow us on :
                        <div className="socials">
                            <img className="insta" src="insta.png" alt="insta" /> 
                            <img className="insta"  src="fb.png" alt="fb" />
                            <img className="insta" src="linkedin.png" alt="linkedin" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default loginsignup;
