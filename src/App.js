import {
  BrowserRouter as Router,   
  Routes, HashRouter,
  Route,
  Link, 
  Switch} from 'react-router-dom';
import { useEffect, useRef } from 'react';
import Home from './Components/Home'
import About from './Components/About'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

function App() {

  return (
    <div id="main-div">
      <div id="top-div">
    
        <div id="logo-div">
            <h1 className='logo-h1'>Ardit</h1>
        </div>
        <div id="nav-div">
                <nav>
                    <ul className='nav-ul'>
                        <li  className='link'><a href='#home'>Home</a></li>
                        <li  className='link'><a href='#about'>About</a></li>
                        <li  className='link'><a href='#project'>Projects</a></li>
                        <li  className='link'><a href='#contact'>Contact</a></li>
                    </ul>
                </nav>
        </div>
      </div>
      <div id='body-div'>
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
