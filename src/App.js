import Navbar from './compopnent/Navbar'
import './App.css';
import About from './compopnent/About/About';
import { BrowserRouter, Routes,Route} from 'react-router-dom';
import Contact from './compopnent/Contact/Contact';
import Portfolio from './compopnent/Portfolio/Portfolio';
import Skills from './compopnent/Skills/Skills';
import Home from './compopnent/Home/Home'
// import {Routes} from 'react-dom'
function App() {
  return (
    <>
 <BrowserRouter>
    <Navbar/>
    <Routes>
    {/* <Route path="/" element={<Home/>}><Route/> */}
    <Route path="/" element={<Home />}></Route>

      <Route path="/about" element={<About />}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/portfolio" element={<Portfolio />}></Route>
      <Route path="/skills" element={<Skills/>}></Route>
    </Routes>
  </BrowserRouter>


    </>
   
  );  
}

export default App;

