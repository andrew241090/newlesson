import React from 'react';

import css from './userstyle.css';

const User = ({user, getUser}) => {
    const {id, name} = user;
    return (
        <div className={"main"}>
            <div>{id}) {name}</div>
            <button onClick={()=>getUser(user)}>Details</button>
        </div>

    );
};

export default User;