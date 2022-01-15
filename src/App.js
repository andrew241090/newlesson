import React, {useState} from 'react';

import css from './App.css';
import Users from "./components/Users/Users";
import Posts from "./components/Posts/Posts";
import Userdetails from "./components/UserDetails/Userdetails";

const App = () => {
    const [user, setUser] = useState([]);
    const getUser = (user) => {
        setUser(user)
    }

    return (
        <div>
            <div className={'wrap'}>
                <Users getUser={getUser}/>
                <Userdetails user={user}/>
            </div>
            <Posts/>
        </div>
    );
};

export default App;