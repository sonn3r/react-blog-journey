import "./posts.css"
import KyivPreview from "../post/KyivPreview";
import HoverlaPreview from "../post/HoverlaPreview";
import VinnytsiaPreview from "../post/VinnytsiaPreview";
import USAPreview from "../post/USAPreview";
import BringPreview from "../post/BringPreview";
import HotelsPreview from "../post/HotelsPreview";
export default function Posts() {
    return (
        <div className="posts">
            <KyivPreview/>
            <HoverlaPreview/>
            <VinnytsiaPreview/>
            <USAPreview/>
            <BringPreview/>
            <HotelsPreview/>
        </div>
    )
}