import {useState,useEffect} from "react";
import Flight from "../Flight/Flight";

const Flights = () => {
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
                flight.map(value => <Flight key={value.flight_number} mission_name={value.mission_name}  launch_year={value.launch_year}
                   mission_patch={value.links.mission_patch}/>)}
        </div>
    );
}

export default Flights;