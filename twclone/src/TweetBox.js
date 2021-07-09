import { Avatar, Button } from "@material-ui/core";
import React from "react";
import "./TweetBox.css"; 

function TweetBox(){
    return(
        <div className="tweetbox">
            <form>
                <div className="tweetbox__input">
                    <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL9OjQVd58De7AAQCa-OrjjXJ--e44Iw8J9w&usqp=CAU"></Avatar>
                    <input placeholder="What's happening" type="text"/>                
                </div>
                <div>
                    <input className="tweetbox__inputimage" placeholder="Optional: Enter Image URL" type="text"></input>
                </div>
                <Button className="tweetbox__tweetbutton">Tweet</Button>
            </form>
        </div>
    );
}

export default TweetBox;