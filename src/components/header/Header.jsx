import "./header.css"
import Image from "../../images/home.jpg"
export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleLg">Journey Blog</span>
                <span className="headerTitleSm">Andrii Sakhno</span>
            </div>
            <img className="headerImg" src={Image} alt="home-img"/>
        </div>
    )
}