import "./contact.css"
import React from "react";
import Image from "../../images/hood-irony-hood.gif";

export default function Contact() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <h1 className="singlePostTitle">Contact</h1>
                <p className="singlePostDesc">
                    Contact me via this methods!
                </p>

                <div className="icons">
                    <a href="https://www.facebook.com" target="_blank">
                        <i className="topIcon fa-brands fa-square-facebook"></i>
                        Facebook
                    </a>
                    <a href="https://www.twitter.com" target="_blank">
                        <i className="topIcon fa-brands fa-square-twitter"></i>
                        Twitter
                    </a>
                    <a href="https://www.pinterest.com" target="_blank">
                        <i className="topIcon fa-brands fa-square-pinterest"></i>
                        Pinterest
                    </a>
                    <a href="https://www.instagram.com" target="_blank">
                        <i className="topIcon fa-brands fa-square-instagram"></i>
                        Instagram
                    </a>
                </div>
                <p className="text">
                    Or write me on my Gmail: andysakhno@gmail.com
                </p>
            </div>
        </div>

    );
}