import computer from '../Asets/computer.png'
import {
    BrowserRouter as Router,   
    Routes, HashRouter,
    Route,
    Link, 
    Switch} from 'react-router-dom';
import ReactJS from '../Asets/react.png';
import JS from '../Asets/js.png';
import html from '../Asets/html-5.png';
import css from '../Asets/css-3.png';
import bootstrap from '../Asets/bootstrap.png';
import Java from '../Asets/java.png';
import php from '../Asets/php.png';
import Csharp from '../Asets/c-sharp.png';
import figma from '../Asets/figma.png';
import adxd from '../Asets/adobe-xd.png';


export default function About(){
    return(
        <>
        <section id="about">
            <div id='aboutme'>
                <div>
                    <h1 >About me</h1>
                    <p>I am Ardit Shabani from Kosovo, I'm studying Computer Science and Engeenering in secon year. Besides I am trained in Web Development and love to code using HTML5, CSS3, PHP, React JS and much more.</p>
                </div>
                <img src={computer} width='500px' height='500px'/>
            </div>
            <h1>My Education and Experience</h1>
            <div id='experience'>
                <Experience viti='2005' eksperienca='Shkolla Fillore' title='Ahmet Hajdari' body='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'/>               
                <Experience viti='2005' eksperienca='Shkolla Fillore' title='Ahmet Hajdari' body='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'/>
                <Experience viti='2005' eksperienca='Shkolla Fillore' title='Ahmet Hajdari' body='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'/>               
                <Experience viti='2005' eksperienca='Shkolla Fillore' title='Ahmet Hajdari' body='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'/>
            </div>
            <h1>My Skills</h1>
            <Skills/>
        </section>
        </>
    )
}


function Experience(props){
    return(
        <>
        <div className='ex'>
            <h1>{props.eksperienca}</h1>
            <div id='viti'>
                <p className='viti'>{props.viti}</p>
                <p>&nbsp;-&nbsp;</p>
                <p>{props.title}</p>
            </div>
            <p>{props.body}</p>
        </div>
        </>
    )
}


function Skills(){
    return(
        <>
        <div id='skills'>
            <Router>
                <nav>
                    <ul>
                        <li>
                            <Link to='/'>Front End</Link>
                        </li>
                        <li>
                            <Link to='/Back'>Back End</Link>
                        </li>
                        <li>
                            <Link to='/Design'>Design</Link>
                        </li>
                    </ul>
                </nav>
                <div>
                <Routes>
                    <Route excat path='/' element={<Front/>}/>
                    <Route excat path='/Back' element={<Back/>}/>
                    <Route excat path='/Design' element={<Design/>}/>
                </Routes>
                </div>
            </Router>
        </div>
        </>
    )
}

function Front(){
    return(
        <>
        <div id='front'>
            <img src={html} />
            <img src={css} />
            <img src={ReactJS} />
            <img src={JS} />
            <img src={bootstrap} />
        </div>
        </>
    )
}

function Back(){
    return(
        <>
        <div id='back'>
            <img src={Java} />
            <img src={php} />
            <img src={Csharp} />
        </div>
        </>
    )
}

function Design(){
    return(
        <>
        <div id='design'>
            <img src={adxd} />
            <img src={figma} />
        </div>
        </>
    )
}

