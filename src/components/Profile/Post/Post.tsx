import React from "react";
import './Post.css';

type PostPropsType = {
    message: string
}

const Post = (props: PostPropsType) => {
    const {message} = props;

    return (
        <div className={`post`}>
            <p className={`post__text`}>{message}</p>
        </div>
    )
}

export default Post;