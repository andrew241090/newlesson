import React, {useEffect, useState} from 'react';

import Comment from "../Comment/Comment";

const Comments = () => {

    const [comment,setComment] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(value => setComment(value))
    },[])

    return (
        <div>
            {comment.map(value => <Comment key={value.id} id={value.id} name={value.name} email={value.email} body={value.body}/>)}
        </div>
    );
};

export default Comments;