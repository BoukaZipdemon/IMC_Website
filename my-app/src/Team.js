import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Team = ({data}) => {
    const settings = {
        accessibility:true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
      };
    return ( 
        <div  className="boxes">
            <h1>The team</h1>
            <div className="box1">
                <Slider {...settings}>
                    {data.map((d) => (
                            <div key={d.val} className="boxslide">
                                <img src={d.img} alt="" />
                                <p>{d.name}</p>
                            </div>
                    )
                    )}
                </Slider>
            </div>
        </div>
     );
};
 
export default Team;