import React from "react";

import Footer from "../Footer/Footer";
import ImbeddedTweet from "../ImbeddedTweet/ImbeddedTweet";
import MainMenu from "../Menu/MainMenu";

import './SideBar.css';

export default function SideBar() {
    return (
        <div className="SideBar">
            <MainMenu />
            <ImbeddedTweet />
            {/* <Footer /> */}
        </div>
    );
}

