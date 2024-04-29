import Footer from './Footer';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Aboutus from './Aboutus';
import ImageSlider from "./ImageSlider";
import Team from "./Team";
const slides=[
  { url: 'mainphoto.jpg', title :'welcome' },
  { url: 'img2.jpg', title :'to' }, 
  { url: 'img3.jpg', title :'imc website' }
];
const containerStyles  ={
    height :"500px",
    width : "100%",
    margin:" 0 auto"
};
function App() {
  return (
    <div className="App">
      <div className="Content"></div>
        <Navbar />
      <div >
           <div style={containerStyles}>
              <ImageSlider slides={slides}/>
           </div>
        <div className="Home">
            <Home />    
        </div>
        <div className="Aboutus">
            <Aboutus />
        </div>
        <div className="team">
            <Team data={data}/>
        </div>
        <div className="footer">
            <Footer />
        </div>
      </div>
    </div>
  );
};
const data = [
  { 
      val: `0`,
      img: `president.jpg`,
      name: `president`
  },
  {
      val: `1`,
      img: `chair.jpg`,
      name: `chair`
  },
  {
      val: `2`,
      img: `project_manager.jpg`,
      name: `project manager`
  },
  {
      val: `3`,
      img: `design.jpg`,
      name: `Design manager`
  },
  {
      val: `4`,
      img: `production.jpg`,
      name: `production manager`
  },
  {
    val: `5`,
    img: `entrepreneurial.jpg`,
    name: `entrepreneurial managers`
},{
  val: `6`,
  img: `logistic.jpg`,
  name: `logistic manager`
}
];

export default App;
