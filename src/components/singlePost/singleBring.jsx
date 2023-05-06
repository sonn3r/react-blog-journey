import React from 'react';
import "./singlepost.css"
import blogImg from "../../images/bring.webp"
import ReactPlayer from 'react-player/youtube'
export default function SingleBring() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img src={blogImg}
                     alt="blog image"
                     className="singlePostImg"
                />
                <h1 className="singlePostTitle">What to bring on a trip</h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>Andrii</b></span>
                    <span className="singlePostDate">9 hour ago</span>
                </div>
                <p className="singlePostDesc">
                    Planning for a trip can be exciting, but it can also be stressful. One of the most important aspects of planning is knowing what to bring. Packing the right items can make all the difference in ensuring that your trip is comfortable, enjoyable, and stress-free. Here are some essential items to consider when packing for a trip.
                    <br/><br/>
                    Clothing: One of the most important things to pack is appropriate clothing. Check the weather forecast for your destination and pack accordingly. You'll want to bring a mix of comfortable clothing for sightseeing, as well as more formal attire if you plan on going to fancy restaurants or events.
                    <br/><br/>
                    Toiletries: Don't forget your toiletries! Pack items such as toothpaste, toothbrush, shampoo, conditioner, soap, and deodorant. If you're flying, remember to pack liquids in 3.4-ounce containers and put them in a clear, quart-sized bag to comply with TSA regulations.
                    <br/><br/>
                    Electronics: Nowadays, we rely heavily on our electronics while traveling. Bring your smartphone, laptop, camera, and any other gadgets you need. Make sure to also pack their chargers and adapters for different outlets.
                    <br/><br/>
                    Medications: If you take prescription medications, make sure to pack enough for the duration of your trip. It's also a good idea to bring over-the-counter medications such as pain relievers, antacids, and motion sickness pills.
                    <br/><br/>
                    Travel documents: Don't forget your passport or ID, boarding pass, travel itinerary, and any other important travel documents. Keep them in a safe place, such as a travel wallet, to ensure that you don't lose them.
                    <br/><br/>
                    Comfort items: Lastly, don't forget to pack some comfort items. These could include a neck pillow, eye mask, earplugs, or a favorite book or magazine. These items can help you relax and make your travel experience more comfortable.
                    <br/><br/>
                    In conclusion, packing for a trip can be overwhelming, but it doesn't have to be. By considering these essential items, you'll be well on your way to a stress-free and enjoyable trip. Happy travels!
                </p>
                <div className="video">
                    <ReactPlayer url="https://youtu.be/ldoMwroOtWk" />
                </div>
            </div>
        </div>
    );
}