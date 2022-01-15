import React from 'react';
import css from './user.css'

const User = (props) => {
const {id, name, email, surname, address}=props;
    return (
        <div className={"userwrap"}>
            <div>ID: {id}</div>
            <div>NAME: {name}</div>
            <div>SURNAME: {surname}</div>
            <div>EMAIL: {email}</div>
            <div>STREET: {address.street}</div>
            <div>CITY: {address.city}</div>
            <div>ZIPCODE: {address.zipcode}</div>
        </div>
    );
};

export default User;