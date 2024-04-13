import './App.css';
import Navbar from './Navbar'
import Home from './Home';
function App() {
  return (
    <div className="App">
      <div className="Content">
        <Navbar />
        <div className="home">
            <Home />    
        </div>
      </div>
    </div>
  );
}

export default App;
