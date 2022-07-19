import Memoi from '../Asets/Memoji.png'
import email from '../Asets/email.png'
import phone from '../Asets/phone.png'
import location from '../Asets/location.png'
export default function Home(){
    return(
        <section id="home">
            <div>
                <img src={Memoi} widht="300px" height="300px"/>
            </div>
            <div>
                <p id='hello-p'>Hello There</p>
                <p id='name-p'>I'M Ardit Shabani</p>
                <p id='pers-p'>Engeener and Developer</p>
                <div className='personal-info'>
                    <img src={location}/>
                    <p className='p-p'>24 marsi St. Ramnishte, Viti</p>
                </div>
                <div className='personal-info'>
                    <img src={phone}/>
                    <p className='p-p'>+38349795770</p>
                </div>
                <div className='personal-info'>
                    <img src={email} />
                    <p className='p-p'>arditt.shabani@gmail.com</p>
                </div>
                <a href='https://www.linkedin.com/in/ardit-shabani-74663a202/'>Connect with me</a>
            </div>
        </section>
    )   
} 