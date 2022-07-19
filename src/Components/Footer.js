import Instagram from '../Asets/instagram.png'
import Facebook from '../Asets/facebook.png'
import LinkedIN from '../Asets/linkedin.png'
import Discord from '../Asets/discord.png'
import { Link } from 'react-router-dom'
import { Route, Router } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'

export default function Footer(){
    return(
        <>
            <footer>
                <nav className='footer-nav'>
                    <ul>
                        <li  className='link'><a href='#home'>Home</a></li>
                        <li  className='link'><a href='#about'>About</a></li>
                        <li  className='link'><a href='#project'>Projects</a></li>
                        <li  className='link'><a href='#contact'>Contact</a></li>
                    </ul>
                </nav>
                <div>
                    <a href=''><img src={Instagram}/></a>
                    <a href=''><img src={Facebook}/></a>
                    <a href=''><img src={LinkedIN}/></a>
                    <a href=''><img src={Discord}/></a>
                </div>
            </footer>
        </>
    )
}