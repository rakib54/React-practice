import React from 'react';
import './Header.css'



const Header = () => {
    return (
        <div className="header">
            <h1>Facebook Lite</h1>
            <nav>
                <a href="./friends">Friends</a>
                <a href="./feed">NewsFeed</a>
                <a href="./photos">Photos</a>
                
            </nav>
        </div>
    );
};

export default Header;