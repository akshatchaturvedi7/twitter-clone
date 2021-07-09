import { Avatar } from "@material-ui/core";
import React from "react";
import "./Post.css"

 function Post({displayName, userName, verified, text, image, avatar}){
     return(
        <div className="post">
            <div className="post__avatar">
                <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlwnYKDKdIr4S0DOpTksC9bcB0VbrOuywtaQ&usqp=CAU"></Avatar>
            </div>
        </div>
     );
 }

export default Post;