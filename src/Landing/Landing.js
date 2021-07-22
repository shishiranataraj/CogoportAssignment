import React from 'react';
import  { Redirect } from 'react-router-dom'    
import { useHistory } from "react-router-dom";
import Button from '@material-ui/core/Button';



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
                <Button variant="contained" className="button" color="primary" onClick={redirectDashboard}>Go to dashboard</Button>
                <Button variant="contained" className="button" color="primary" onClick={redirectTrack}>Track Vehicle</Button>
            </div>
        </div>
    )
}
