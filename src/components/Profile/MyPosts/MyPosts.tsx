import React from "react";
import './MyPosts.css';

const MyPosts = () => {
    return (
        <div className={'posts'}>
            <div className={`new-post`}>
                <h3 className={`new-post__title`}>My posts</h3>
                <input className={`new-post__write-text`} type="text" placeholder={`your news`}/>
                <button className={`new-post__send-btn`}>Send</button>
            </div>
        </div>
    )
}

export default MyPosts;