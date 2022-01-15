import React from 'react';

import Comments from "../Comments/Comments";
import css from "./comment.css"

const Comment = (props) => {

    const {id, name, email, body} = props;

    return (
        <div className={"commentwrap"}>
            <div>ID: {id}</div>
            <div>NAME: {name}</div>
            <div>EMAIL: {email}</div>
            <div>BODY: {body}</div>
        </div>
    );
};

export default Comment;