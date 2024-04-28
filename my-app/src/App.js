
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Aboutus from './Aboutus';
import ImageSlider from "./ImageSlider";
const slides=[
  { url: 'public/img1.jpg', title :'welcome' },
  { url: 'public/img2.jpg', title :'to' }, 
  { url: 'public/img3.jpg', title :'imc website' }
];
const containerStyles  ={
height :"500px",
width : "100%",
margin:" 0 auto",
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
      </div>
    </div>
  );
};
export default App;
