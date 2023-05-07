import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import Posts from "../../components/posts/Posts";
import "./home.css"
import { useState, useEffect } from 'react';

export default function Home() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const shouldRenderSidebar = windowWidth >= 1200;

    return (
        <>
            <Header />
            <div className="home">
                <Posts />
                {shouldRenderSidebar && <Sidebar />}
            </div>
        </>
    );
}