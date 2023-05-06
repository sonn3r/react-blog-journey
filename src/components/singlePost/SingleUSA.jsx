import React from 'react';
import "./singlepost.css"
import blogImg from "../../images/usa2.jpg"
import ReactPlayer from 'react-player/youtube'
export default function SingleUSA() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img src={blogImg}
                     alt="blog image"
                     className="singlePostImg"
                />
                <h1 className="singlePostTitle">USA</h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>Andrii</b></span>
                    <span className="singlePostDate">4 hour ago</span>
                </div>
                <p className="singlePostDesc">
                    The United States of America is a vast and diverse country with something to offer for everyone. From towering skyscrapers to breathtaking natural wonders, there is no shortage of things to see and do in the USA.
                    <br/><br/>
                    One of the most iconic cities in the USA is New York City. Known as the city that never sleeps, it is a hub of culture, commerce, and entertainment. From the bright lights of Times Square to the world-famous Statue of Liberty, New York City is a must-see destination for anyone visiting the USA.
                    <br/><br/>
                    Another great destination in the USA is California. This state is home to some of the country's most famous landmarks, including the Golden Gate Bridge in San Francisco and the Hollywood Sign in Los Angeles. California is also known for its beautiful beaches, vibrant culture, and world-class cuisine.
                    <br/><br/>
                    For those who love the great outdoors, the USA has no shortage of stunning national parks. From the awe-inspiring Grand Canyon in Arizona to the majestic Yellowstone National Park in Wyoming, there are endless opportunities to explore the natural beauty of the USA.
                    <br/><br/>
                    The USA is also known for its diverse cultural offerings. From the blues and jazz music of the Deep South to the Latin flavors of Miami, there is no shortage of cultural experiences to be had. Visitors can also explore the country's rich history at museums and historical landmarks such as the Smithsonian Institution in Washington D.C.
                    <br/><br/>
                    Finally, no trip to the USA would be complete without trying some of the country's famous cuisine. From fast food to fine dining, the USA has it all. Visitors can try classic American dishes like burgers, hot dogs, and apple pie, or sample regional specialties such as Tex-Mex in Texas or deep-dish pizza in Chicago.
                    <br/><br/>
                    In conclusion, the USA is a diverse and exciting destination with something to offer for everyone. Whether you are interested in history, culture, nature, or just want to indulge in some delicious food, there is no shortage of great experiences to be had in the USA.
                </p>
                <div className="video">
                    <ReactPlayer url="https://youtu.be/_KEb4P3t9Ec" className="video"/>
                </div>
                <div className="video">
                    <ReactPlayer url="https://youtu.be/h3fUgOKFMNU" className="video"/>
                </div>
            </div>
        </div>
    );
}