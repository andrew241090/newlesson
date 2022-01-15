import React, {useEffect, useState} from 'react';

import Post from "../Post/Post";

const Posts = () => {

    const [post, setPost] = useState( []);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => setPost(value))
    },[])

    return (
        <div>
            {post.map(value => (<Post key={value.id} id={value.id} title={value.title} body={value.body}/>))}
        </div>
    );
};

export default Posts;