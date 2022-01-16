import React from 'react';

const Post = ({post}) => {
    const {id,userId,title,body}=post;
    return (
        <div>
            <div>ID: {id}</div>
            <div>USERID :{userId}</div>
            <div>TITLE: {title}</div>
            <div>BODY: {body}</div>
        </div>
    );
};

export default Post;