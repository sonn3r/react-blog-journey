import React from 'react';
import "./singlepost.css"
import blogImg from "../../images/kyiv.jpg"
import ReactPlayer from 'react-player/youtube'
export default function SingleKyiv() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img src={blogImg}
                     alt="blog image"
                     className="singlePostImg"
                />
                <h1 className="singlePostTitle">Kyiv</h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>Andrii</b></span>
                    <span className="singlePostDate">1 hour ago</span>
                </div>
                <p className="singlePostDesc">
                    Kyiv, the capital city of Ukraine, is a vibrant metropolis with a rich history and culture. It is a city that has something to offer everyone, from its stunning architecture and historical landmarks to its vibrant nightlife and delicious cuisine. Here are some of the great places you should visit when you are in Kyiv.
                    <br/><br/>
                    One of the most iconic landmarks in Kyiv is the golden-domed St. Sophia Cathedral. This UNESCO World Heritage Site is a must-visit for anyone interested in history and architecture. The cathedral was built in the 11th century and is a stunning example of Byzantine architecture.
                    <br/><br/>
                    Another famous landmark is the Kyiv Pechersk Lavra, a complex of caves and churches that dates back to the 11th century. The caves are home to the mummified remains of numerous monks and are an important pilgrimage site for Orthodox Christians.
                    <br/><br/>
                    If you are looking for a place to enjoy the outdoors, head to the Mariyinsky Park. This picturesque park is located in the heart of the city and offers stunning views of the Dnieper River. It is a great place to relax and enjoy a picnic, or to take a leisurely stroll along the paths.
                    <br/><br/>
                    For those who are interested in Ukrainian culture and history, the National Museum of Ukrainian History is a must-visit. The museum is located in a beautiful building in the heart of the city and offers a fascinating insight into the country's past.
                    <br/><br/>
                    Finally, no visit to Kyiv is complete without experiencing its vibrant nightlife. The city is home to numerous bars and nightclubs, offering everything from live music to world-class DJs. If you are looking for a night out, head to the trendy district of Podil, where you will find some of the city's best nightlife spots.
                    <br/><br/>
                    In conclusion, Kyiv is a city that offers something for everyone. Whether you are interested in history, culture, or just want to enjoy the city's vibrant atmosphere, there are plenty of great places to visit. So why not book your trip to Kyiv today and experience this amazing city for yourself?
                </p>
                <div className="video">
                    <ReactPlayer url="https://youtu.be/_nkYNuRPAZE" />
                </div>
            </div>
        </div>
    );
}