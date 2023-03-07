import React from "react";
import './Footer.css';
import { FOOTERDATA } from "../../data/FooterData";

export default function Footer() {
    return (
        <footer>
            <div className="tweet">
                <iframe title={FOOTERDATA.tweet.title} border='0'frameborder='0' max-height='45%' max-width='100%'
                src={FOOTERDATA.tweet.url} >
                </iframe>
            </div>
            <div className="DevContact" >
                <p>&copy;Jeremaquai2023</p>
            </div>
        </footer>
    );
}