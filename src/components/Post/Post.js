import React from 'react';

import css from './Post.css'

const Post = ({post}) => {
    const {id,userId,title,body}=post;
    return (
        <div className={'postdet'}>
            <div>ID: {id}</div>
            <div>USERID :{userId}</div>
            <div>TITLE: {title}</div>
            <div>BODY: {body}</div>
        </div>
    );
};

export default Post;