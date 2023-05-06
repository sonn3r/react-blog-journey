import React from 'react';
import "./singlepost.css"
import blogImg from "../../images/hotel2.avif"
import ReactPlayer from 'react-player/youtube'
export default function SingleHotels() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img src={blogImg}
                     alt="blog image"
                     className="singlePostImg"
                />
                <h1 className="singlePostTitle">Hotels</h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>Andrii</b></span>
                    <span className="singlePostDate">11 hours ago</span>
                </div>
                <p className="singlePostDesc">
                    Hotels are an essential part of any travel experience, offering a comfortable and convenient place to rest and recharge. Whether you are planning a business trip, a family vacation, or a romantic getaway, choosing the right hotel can make all the difference. Here are some things to consider when selecting a hotel.
                    <br/><br/>
                    Location: The location of your hotel is crucial. You'll want to choose a hotel that is convenient for the activities you have planned. If you're planning on exploring the city, for example, you may want to choose a hotel that is centrally located. If you're visiting a theme park or other attraction, consider staying at a hotel nearby.
                    <br/><br/>
                    Amenities: The amenities offered by a hotel can make your stay more enjoyable. Look for hotels that offer features such as a pool, fitness center, spa, restaurant, and free breakfast. Some hotels also offer business services, such as meeting rooms or a business center, which can be convenient if you're traveling for work.
                    <br/><br/>
                    Price: The cost of a hotel can vary greatly, so it's important to consider your budget when selecting a hotel. Consider what amenities are important to you and prioritize them accordingly. Look for deals or special offers, such as discounted rates for extended stays or promotional rates for booking early.
                    <br/><br/>
                    Reviews: It's important to read reviews from other travelers when selecting a hotel. Check online review sites such as TripAdvisor or Yelp to see what other guests have to say about their experiences. Pay attention to both positive and negative reviews, and use them to help inform your decision.
                    <br/><br/>
                    Brand: Some travelers prefer to stay at hotels affiliated with a particular brand or chain, such as Hilton or Marriott. These hotels often offer consistent quality and service across their locations, making them a reliable choice for frequent travelers.
                    <br/><br/>
                    In conclusion, selecting the right hotel can greatly enhance your travel experience. By considering factors such as location, amenities, price, reviews, and brand, you can find the perfect hotel to suit your needs and preferences.
                </p>
                <div className="video">
                    <ReactPlayer url="https://youtu.be/2oyvVhq48OA" />
                </div>
            </div>
        </div>
    );
}