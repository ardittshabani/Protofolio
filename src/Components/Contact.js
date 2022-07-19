
export default function Contact(){
    return(
        <>
        <section id="contact">
            <h1>Get In Touch</h1>
            <form>
                <div>
                    <input className="input-row" type='text' required placeholder="Name"></input>
                    <input className="input-row" type='email' required placeholder="Email"></input>
                    <input  className="input-row" type='text' required placeholder="Subject"></input>
                </div>
                <div className="input-body-div">
                    <input className="input-body" type='textarea' required placeholder="Your Message"></input>
                </div>
                <div>
                    <button>Send Message</button>
                </div>
            </form>
        </section>
        </>
    )
}