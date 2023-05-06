import React from 'react';
import "./singlepost.css"
import blogImg from "../../images/hoverla.jpg"
import ReactPlayer from 'react-player/youtube'
export default function SingleHoverla() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img src={blogImg}
                     alt="blog image"
                     className="singlePostImg"
                />
                <h1 className="singlePostTitle">Hoverla</h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>Andrii</b></span>
                    <span className="singlePostDate">2 hour ago</span>
                </div>
                <p className="singlePostDesc">
                    Hoverla is the highest peak in Ukraine, located in the Carpathian Mountains. It stands at an impressive 2,061 meters above sea level and is a popular destination for hikers and mountaineers from all over the world. Here's everything you need to know about this majestic mountain.
                    <br/><br/>
                    Hoverla is part of the Chornohora mountain range, which is home to some of the most stunning natural scenery in Ukraine. The mountain is situated in the Ivano-Frankivsk Oblast region and is a popular destination for both locals and tourists. In fact, it is considered to be one of the Seven Wonders of Ukraine.
                    <br/><br/>
                    To reach the summit of Hoverla, hikers must first navigate a steep and challenging trail. The hike can take anywhere from 4 to 8 hours, depending on your fitness level and the weather conditions. Along the way, hikers will be treated to stunning views of the surrounding mountains and valleys.
                    <br/><br/>
                    Once you reach the summit, you will be rewarded with breathtaking panoramic views of the Carpathian Mountains. On a clear day, you can see for miles in every direction, and the view is truly awe-inspiring. The summit of Hoverla is also home to a small observatory and a marker that indicates the highest point in Ukraine.
                    <br/><br/>
                    If you are planning to hike Hoverla, it is important to come prepared. Make sure to bring plenty of water and snacks, as well as warm clothing and rain gear, as the weather can change quickly in the mountains. It is also recommended to hike with a guide or in a group, as the trail can be difficult to navigate in some places.
                    <br/><br/>
                    In conclusion, Hoverla is a must-visit destination for anyone who loves hiking and mountain climbing. It offers some of the most stunning natural scenery in Ukraine and is a true test of physical endurance. So why not plan your trip to Hoverla today and experience the majesty of this incredible mountain for yourself?
                </p>
                <div className="video">
                    <ReactPlayer url="https://youtu.be/NcV_Dyvbcbg" />
                </div>
            </div>
        </div>
    );
}