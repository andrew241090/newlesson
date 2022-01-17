import React from 'react';
import css from './flightstyle.css'

const Flight = (props) => {
    const {mission_name,launch_year,mission_patch}=props;
    return (
        <div className={'main'}>
            <div>Mission Name: {mission_name}</div>
            <div>Launch Year: {launch_year}</div>
            <img src={mission_patch} alt="{mission_patch}"/>
        </div>
    );
};

export default Flight;