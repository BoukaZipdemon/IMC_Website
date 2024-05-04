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
        responsive: [
            {
              breakpoint: 1124,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 880,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 1
              }
            },
            {
              breakpoint: 580,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
    return ( 
        <div  className="boxes">
            <h1><span>T</span>he <span>T</span>eam</h1>
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