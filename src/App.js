import React, {useEffect, useState} from 'react';

import css from "./App.css"

const App = () => {
    const [flight,setFlight]= useState([])

    useEffect(()=> {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())
            .then(value => {
                setFlight(value.filter(value => value.launch_year !== '2020'));
            });
    },[])

    return (
        <div className={'wrap'}>
            {
                flight.map(value => <div className={'main'} key={value.flight_number}>
                {value.mission_name} -- {value.launch_year}
                <img src={value.links.mission_patch} alt="mission_patch"/>
                    </div>)
            }
        </div>
    );
}

export default App;