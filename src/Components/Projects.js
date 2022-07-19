import protofolio from '../Asets/protofolio.jpeg'
import factory from '../Asets/factory.jpeg'
import ehr from '../Asets/ehr.jpeg'

export default function Projects(){
    return(
        <>
        <section id="project">
            <h1>Projects</h1>
            <div className='projektet'>
                <Project emri='Protofolio' image={protofolio} link='https://github.com/ardittshabani/protofolio'/>
                <Project emri='Vinex' image={factory} link='https://github.com/ardittshabani/Web-Project'/>
                <Project emri='EHR' image={ehr} link='https://github.com/ardittshabani/e-Health-Project'/>
            </div>
        </section>
        </>
    )
}

function Project(props){
    return(
        <a className='div-link' href={props.link}>
        <div className="project-div" 
            style={{
            backgroundImage: `url(${props.image})`,
            backgroundSize: 'cover',
            }}>
            <h1 className="proj-h1">{props.emri}</h1>
        </div>
        </a>
    )
}