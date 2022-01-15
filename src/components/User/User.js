import React from 'react';
import css from './user.css'

const User = (props) => {
const {id, name, email, surname, street}=props;
    return (
        <div className={"userwrap"}>
            <div>ID: {id}</div>
            <div>NAME: {name}</div>
            <div>SURNAME: {surname}</div>
            <div>EMAIL: {email}</div>
            <div>STREET: {street}</div>
        </div>
    );
};

export default User;