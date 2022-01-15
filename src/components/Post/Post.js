import React from 'react';

const Post = ({posts:{id,userid,title,body}}) => {
    return (
        <div>
            <div>ID: {id}</div>
            <div>USERID :{userid}</div>
            <div>TITLE: {title}</div>
            <div>BODY: {body}</div>
        </div>
    );
};

export default Post;