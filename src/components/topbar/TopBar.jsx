import "./topbar.css"
import Image from "../../images/pfphome.jpg"
import {Link} from "react-router-dom";
export default function TopBar() {
    return (
        <div className="top">
           <div className="topLeft">
               <a href="https://www.facebook.com" target="_blank">
                   <i className="topIcon fa-brands fa-square-facebook"></i>
               </a>
               <a href="https://www.twitter.com" target="_blank">
                   <i className="topIcon fa-brands fa-square-twitter"></i>
               </a>
               <a href="https://www.pinterest.com" target="_blank">
                   <i className="topIcon fa-brands fa-square-pinterest"></i>
               </a>
               <a href="https://www.instagram.com" target="_blank">
                   <i className="topIcon fa-brands fa-square-instagram"></i>
               </a>
           </div>
           <div className="topCenter">
               <ul className="topList">
                   <li class="topListItem">
                       <Link className="link" to="/home">HOME</Link>
                   </li>
                   <li class="topListItem">
                       <Link className="link" to="/about">ABOUT</Link>
                   </li>
                   <li class="topListItem">
                       <Link className="link" to="/contact">CONTACT</Link>
               </li>
               </ul>
           </div>
           <div className="topRight">
               <img
                   className="topImg"
                   src={Image}
                   alt="profile picture"
               />
           </div>
        </div>
    )
}