import ImageWithTextOverlay from './Home';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Aboutus from './Aboutus';
function App() {
  return (
    <div className="App">
      <div className="Content">
        <Navbar />
        <div className="Home">
            <Home />    
        </div>
        <div className="Aboutus">
            <Aboutus />
        </div>
      </div>
    </div>
  );
}

export default App;
