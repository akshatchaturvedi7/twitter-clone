import { Avatar, Button } from "@material-ui/core";
import React, { useState } from "react";
import "./TweetBox.css"; 
import db from "./firebase";



function TweetBox(){
    const [tweetMessage,setTweetMessage]=useState("");
    const [tweetImage,setTweetImage]=useState("");

    const sendTweet = (e) =>{
        e.preventDefault();
        db.collection("posts").add({
            displayName: "Jiraiya",
            username: "thetoadsage",
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL9OjQVd58De7AAQCa-OrjjXJ--e44Iw8J9w&usqp=CAU"
        });
        setTweetImage("");
        setTweetMessage("");
    };
    return(
        <div className="tweetbox">
            <form>
                <div className="tweetbox__input">
                    <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFeN02YCvHS0QOnfY3Gu6vDfqmtXwAXHT6Iw&usqp=CAU"></Avatar>
                    <input onChange={e=>setTweetMessage(e.target.value)} value={tweetMessage} placeholder="What's happening" type="text"/>                
                </div>
                <div>
                    <input className="tweetbox__inputimage" onChange={e=>setTweetImage(e.target.value)} value={tweetImage} placeholder="Optional: Enter Image URL" type="text"></input>
                </div>
                <Button onClick={sendTweet} type="submit" className="tweetbox__tweetbutton">Tweet</Button>
            </form>
        </div>
    );
}

export default TweetBox;