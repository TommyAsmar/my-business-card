import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";



export default function Footer() {
    return (
        <footer className="footer">
            <a href="https://x.com/tommy_asmar" target="_blank">
                <FaSquareXTwitter className="footer-icons"/>
            </a>
            <a href="https:://www.facebook.com" target="_blank">
                <FaFacebook className="footer-icons"/>
            </a>
            <a href="https://www.instagram.com/tommyasmar_" target="_blank">
                <FaSquareInstagram className="footer-icons"/>
            </a>
            <a href="https://github.com/TommyAsmar" target="_blank">
                <FaGithub className="footer-icons"/>
            </a>
            
            
            
            
        </footer>
    )
}