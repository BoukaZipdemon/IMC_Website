const Footer = () => {
    return ( 
        <div className="footer container">
            <div className="flex">
                <div className="about">
                    <h1 className="sp">about this project</h1>
                    <p>
                        this is a project given in 2024 by our project manager saber arfaoui aiming to 
                        learn react alongside with using figma to create the mock-up.
                    </p>
                </div>
                <div className="parent">
                    <h1 className="sp">done by:</h1>
                    <div className="contact">
                        <div className="maram">
                            <h1>maram ben amna</h1>
                            <p>Computer science student at isamm</p>
                            <div className="socials">
                                <a href="https://github.com/marambenamna" target="_blank"><img src="git.png" alt="" /></a>
                                <a href="https://www.linkedin.com/in/ben-amna-maram-7867222b9/" target="_blank"><img src="lin.png" alt="" /></a>
                            </div>
                        </div>
                        <div className="fedi">
                            <h1>fedi boukari</h1>
                            <p>Computer science student at isamm</p>
                            <div className="socials">
                                <a href="https://github.com/BoukaZipdemon" target="_blank"><img src="git.png" alt="" /></a>
                                <a href="https://www.linkedin.com/in/fedi-boukari-a679b1208/" target="_blank"><img src="lin.png" alt="" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Footer;