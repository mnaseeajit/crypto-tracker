import React from "react";
import "./style.css";
import Button from "../Button";
import SwipeableTemporaryDrawer from "./drawer";
import { Link } from "react-router-dom";
import ThemeButton from "./themeButton";

function Header({toggleDarkMode,isDarkMode}){
    return (
        <div className="header">
            <h1 className="logo">
                CryptoTracker<span style={{color : "var(--blue)"}}>.</span>
             </h1>
             <div className="links">
                <ThemeButton isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}/>
                <Link to="/">
                    <p className="link">Home</p>
                </Link>
                <Link to="/compare">
                    <p className="link">Compare</p>
                </Link>
                <Link to="/watchlist">
                    <p className="link">WatchList</p>
                </Link>
                <Link to="/dashbord">
                    <Button text="Dashbord"
                            onClick={()=>console.log('btn clicked')}/>
                </Link>
             </div>
             <div className="mobile-drawer">
                <SwipeableTemporaryDrawer />
             </div>
        </div>
    )
}

export default Header;