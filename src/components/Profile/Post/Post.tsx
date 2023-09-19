import React from "react";
import './Post.css';

type PostPropsType = {
    message: string,
    likesCount: number,
}

const Post = (props: PostPropsType) => {
    const {message, likesCount} = props;

    return (
        <div className={`post`}>
            <p className={`post__text`}>{message} </p>
            <span className={`post__like`}>{likesCount} likes</span>
        </div>
    )
}

export default Post;