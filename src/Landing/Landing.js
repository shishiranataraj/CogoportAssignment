import React from 'react';
import  { Redirect } from 'react-router-dom'    
import { useHistory } from "react-router-dom";



export default function Landing(props) {
    let history = useHistory();
    const redirectDashboard = () => {
        history.push('/dashboard')
    }
    const redirectTrack = () => {
        history.push('/track')
    }
    return (
        <div>
            <p>Cogoport Assignment</p>
            <div>
                <p>Shishira Nataraj</p>
                <h1>Truck management task</h1>
                <button onClick={redirectDashboard}>Enter Dashboard</button>
                <button onClick={redirectTrack}>Track vehicle</button>
            </div>
        </div>
    )
}
