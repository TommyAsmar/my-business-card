import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import myPhoto from '../images/my-photo.png';

export default function Info() {
    return (
        <section className="info">
            <div className="hero">
                <img src={myPhoto} alt="My Photo" />
            </div>
            <h1>Tommy El Asmar</h1>
            <p>Software Engineer</p>
            <div className="buttons">
                <a href="mailto:tommyelasmar@gmail.com" target="_blank" className="icon-wrapper">
                    <button className="email-button">
                        <MdEmail style={{ color: "black", fontSize: "1.2em" }}/>
                        Email
                    </button>
                </a>
                <a href="https://www.linkedin.com/in/tommyelasmar/" target="_blank" className="icon-wrapper">
                    <button className="linkedin-button">
                        <FaLinkedin className="linkedin-icon"/>
                        LinkedIn
                    </button>
                </a>
            </div>
        </section>
    )
}