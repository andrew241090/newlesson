import React, {useState} from 'react';

import css from './App.css';
import Users from "./components/Users/Users";
import Posts from "./components/Posts/Posts";
import Userdetails from "./components/UserDetails/Userdetails";
import {postService} from "./services/post.service";

const App = () => {
    const [user, setUser] = useState(null);
    const [posts,setPost] = useState([]);

    const getUser = (user) => {
        setUser(user)
        setPost([])
    }
    const getUserId = (id) => {
postService.getByUserId(id).then(value => setPost(...[value]))

    }

    return (
        <div>
            <div className={'wrap'}>
                <Users getUser={getUser}/>
                {user && <Userdetails user={user} getUserId={getUserId}/>}
            </div>
            {posts.length && <Posts posts={posts}/>}
        </div>
    );
};

export default App;