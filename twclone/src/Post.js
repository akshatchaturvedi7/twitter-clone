import { Avatar } from "@material-ui/core";
import React from "react";
import "./Post.css"
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';

 function Post({displayName, userName, verified, text, image, avatar}){
     return(
        <div className="post">
            <div className="post__avatar">
                <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlwnYKDKdIr4S0DOpTksC9bcB0VbrOuywtaQ&usqp=CAU"></Avatar>
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>
                            Naruto Uzumaki{" "}<span className="post__headerSpecial"><VerifiedUserIcon className="post__badge" />@iamgonnabehokage</span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>Hey Pervy Sage lets train...</p>
                    </div>
                </div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcN8Ui3p_Wj7r3XIOCoTa6Q0v4VZltOPry6Q&usqp=CAU" alt="" />
                <div className="post__footer">
                    <ChatBubbleOutlineIcon fontSize="small"/>
                    <RepeatIcon fontSize="small" />
                    <FavoriteBorderIcon fontSize="small" />
                    <PublishIcon fontSize="small" />
                </div>
            </div>
        </div>
     );
 }

export default Post;