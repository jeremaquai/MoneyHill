import React from "react";
import './ImbeddedTweet.css';
import { TWEETDATA } from "../../data/ImbeddedTweetData";

export default function ImbeddedTweet() {
    return (
        <div className="tweet">
            <iframe role={'document'} title={TWEETDATA.tweet.title} border='0'frameBorder='0' height='100%' max-width='100%'
            src={TWEETDATA.tweet.url} >
            </iframe>
        </div>
    );
}