import logo from './logo.svg';
import './App.css';
import logoapp from './logoapp.png';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';


function App() {
  return (
    
    <BrowserRouter>
    <div className="App">
    <header className="app-bg">
        <div className="app-heading-container">
  <div className="app-heading-container">
    <h1 className="app-heading" style={{
        fontSize:"26px"
      }}>Book In Nook</h1>
    <img className="app-heading-logo"  src={logoapp} alt={'logo-app'}  style={{
        width: "45px",
        height: "45px"
      }} />
    </div>
  <h2 className="app-heading-menu-items">   <Link to="/">Home</Link>  </h2>
  <h2 className="app-heading-menu-items">   <Link to="/About">About</Link>  </h2>
  <h2 className="app-heading-menu-items">    <Link to="/Contact">Contact</Link>  </h2>
 
  </div>
        
        </header>
    </div>
    <Routes>
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
