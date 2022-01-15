import React from 'react';

import Posts from "../Posts/Posts";
import css from "./post.css"

const Post = (props) => {

    const {id, title, body} = props;

    return (
        <div className={'postwrap'}>
            <div>ID: {id}</div>
            <div>TITLE: {title}</div>
            <div>BODY: {body}</div>
        </div>
    );
};

export default Post;