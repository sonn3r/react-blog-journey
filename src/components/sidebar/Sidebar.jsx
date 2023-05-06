import "./sidebar.css"
import Image from "../../images/mountain.png"
import {Link} from "react-router-dom";
export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img src={Image} className="sidebarImg" alt="mountain"/>
                <p>
                    My name is Andrii Sakhno and I am a web developer. I am passionate about creating innovative
                    and functional websites that enhance the user experience. In this blog, I will be sharing my
                    journey in the world of web development, as well as tips and tricks for creating effective websites.
                </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Lifehacks</li>
                    <li className="sidebarListItem">Countries</li>
                    <li className="sidebarListItem">Places</li>
                    <li className="sidebarListItem">Landscape</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW ME</span>
                <div className="sidebarSocial">
                    <Link></Link>
                    <a href="https://www.facebook.com" target="_blank">
                        <i className="sidebarIcon fa-brands fa-square-facebook"></i>
                    </a>
                    <a href="https://www.twitter.com" target="_blank">
                        <i className="sidebarIcon fa-brands fa-square-twitter"></i>
                    </a>
                    <a href="https://www.pinterest.com" target="_blank">
                        <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
                    </a>
                    <a href="https://www.instagram.com" target="_blank">
                        <i className="sidebarIcon fa-brands fa-square-instagram"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}