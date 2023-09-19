import React from "react";
import './MyPosts.css';
import Post from "../Post/Post";

const MyPosts = () => {
    return (
        <div className={'posts-wrapper'}>
            <div className={'posts'}>
                <div className={`new-post`}>
                    <h3 className={`new-post__title`}>My posts</h3>
                    <input className={`new-post__write-text`} type="text" placeholder={`your news`}/>
                    <button className={`new-post__send-btn`}>Send</button>
                </div>
            </div>
            <div className={'comments'}>
                <Post message={`Comment #1`} likesCount={0}/>
                <Post message={`Comment #2`} likesCount={3}/>
                <Post message={`Comment #3`} likesCount={5}/>
                <Post message={`Comment #4`} likesCount={7}/>
                <Post message={`Comment #5`} likesCount={9}/>
            </div>
        </div>
    )
}

export default MyPosts;