import React from 'react';

import css from './userdet.css'

const Userdetails = ({user, getUserId}) => {
    const {id, name, username, email} = user;

    return (
        <div className={'userdet'}>
            <div>{id}</div>
            <div>{name}</div>
            <div>{username}</div>
            <div>{email}</div>
            <button onClick={()=> getUserId(id)}>Posts</button>
        </div>
    );
};

export default Userdetails;