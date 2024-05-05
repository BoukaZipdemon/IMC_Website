import Footer from './Footer';
import './App.css';
import Navbar from './Navbar';
import Aboutus from './Aboutus';
import ImageSlider from "./ImageSlider";
import Team from "./Team";
import './signup.css';
import  Loginsignup from './Loginsignup';
import Services from "./Services";
import './services.css';
import ScrollToTop from "react-scroll-to-top";

const slides=[
  { url: 'mainphoto.jpg', title :'welcome' },
  { url: 'fin.jpg', title :'' }, 
  { url: 'light.jpg', title :'imc website' }
];
const containerStyles  ={
    height :"500px",
    width : "100%",
    margin:" 0 auto"
};
function App() {
  return (
    <div className="App">
      <Navbar />
      <ScrollToTop smooth color='red' viewBox='3 4 32 30'  width='72' height='72' svgPath='M14.9703 3.3437C13.0166 2.88543 10.9834 2.88543 9.02975 3.3437C6.20841 4.00549 4.00549 6.20841 3.3437 9.02975C2.88543 10.9834 2.88543 13.0166 3.3437 14.9703C4.0055 17.7916 6.20842 19.9945 9.02975 20.6563C10.9834 21.1146 13.0166 21.1146 14.9703 20.6563C17.7916 19.9945 19.9945 17.7916 20.6563 14.9703C21.1146 13.0166 21.1146 10.9834 20.6563 9.02975C19.9945 6.20842 17.7916 4.00549 14.9703 3.3437ZM9.18252 11.467C8.9482 11.2327 8.9482 10.8528 9.18252 10.6185L11.5757 8.22524C11.6883 8.11271 11.8409 8.0495 12 8.0495C12.1591 8.0495 12.3117 8.11271 12.4243 8.22524L14.8175 10.6185C15.0518 10.8528 15.0518 11.2327 14.8175 11.467C14.5832 11.7013 14.2033 11.7013 13.9689 11.467L12.6 10.098L12.6 15.3505C12.6 15.6819 12.3314 15.9505 12 15.9505C11.6686 15.9505 11.4 15.6819 11.4 15.3505L11.4 10.098L10.031 11.467C9.79673 11.7013 9.41683 11.7013 9.18252 11.467Z'/>
      <div >
           <div style={containerStyles}>
              <ImageSlider slides={slides}/>
           </div>
        <div className="Aboutus">
            <Aboutus />
        </div>
        <div className='Services'>
            <Services/>
        </div>
        <div className="team">
            <Team data={data}/>
        </div>
        <div className='Loginsignup'>
            <Loginsignup/>
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
