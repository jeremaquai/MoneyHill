import React from "react";

import ImbeddedTweet from "../ImbeddedTweet/ImbeddedTweet";
import MainMenu from "../Menu/MainMenu";

import './SideBar.css';

export default function SideBar() {
    return (
        <div title="SideBar" className="SideBar">
            
            <div>
                <MainMenu />
            </div>
            <div className="ImbeddedTweet" >
                <ImbeddedTweet />
            </div>
            
        </div>
    );
}

