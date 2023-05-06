import "./post.css"
import Image from "../../images/vinnitsia.jpg"
import {Link} from "react-router-dom";

export default function VinnytsiaPreview() {
    return (
        <div className="post">
            <img
                className="postImg"
                src={Image}
                alt=""
            />
            <div className="postInfo">
                <div className="postTags">
                    <span className="postTag">Places</span>
                </div>
                <span className="postTitle"><Link className="link" to="/vinnytsia">Vinnytsia</Link></span>
                <hr/>
                <span className="postDate">3 hour ago</span>
            </div>

            <p className="postDesc">
                Vinnytsia is a picturesque city located in central Ukraine. It is a hidden gem that is often overlooked by tourists, but it has a lot to offer for those who take the time to explore it. Here's a guide to some of the best things to do in Vinnytsia.

                One of the most popular attractions in Vinnytsia is the Roshen Fountain. This impressive fountain is the largest floating fountain in Europe and features a stunning light show that is synchronized with music. It is a must-see attraction and draws visitors from all over Ukraine and beyond.

                Another great place to visit is the Vinnytsia National Pirogov Memorial Estate. This museum complex is dedicated to the life and work of Nikolai Pirogov, a famous surgeon and scientist who lived in Vinnytsia. The complex includes Pirogov's former estate, a medical museum, and a park.

                If you are interested in history, be sure to visit the Vinnytsia Regional Museum. This museum offers a fascinating insight into the history and culture of Vinnytsia and the surrounding region. It has a wide range of exhibits, including archaeological artifacts, folk art, and traditional costumes.

                For those who love the outdoors, head to the Vinnytsia City Park. This park is a beautiful green space in the heart of the city and features walking trails, a lake, and a variety of sports facilities. It is a great place to relax and enjoy the fresh air.

                Finally, no trip to Vinnytsia is complete without trying the local cuisine. The city is known for its delicious borscht, a traditional Ukrainian soup made with beets and other vegetables. You can also try other local specialties, such as varenyky (dumplings) and holubtsi (stuffed cabbage rolls).

                In conclusion, Vinnytsia is a city that offers something for everyone. Whether you are interested in history, culture, or just want to relax and enjoy the outdoors, there are plenty of great places to visit. So why not plan your trip to Vinnytsia today and discover this hidden gem for yourself?
            </p>

        </div>

    )
}