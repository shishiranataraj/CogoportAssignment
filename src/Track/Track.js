import React , {useState} from 'react';
import {truckData} from "../Trucks";
import { useHistory } from "react-router-dom";
import "./Track.css"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default function Track() {
    let history = useHistory();
    const obj = [];
    const [truckID, setTruckID] = useState();
    const [flag, setFlag] = useState(0);
    const [id, setId] = useState(0);
    const [city_located, setCity_located] = useState('');
    const [destination, setDestination] = useState('');
    const [status, setStatus] = useState('');
    

    const handleEntry = (event) =>{
        setTruckID(event.target.value);
        
    }
    const handleRedirect = () => {
        history.push("/")
    }
  
    const handleSubmit = () => {
        setFlag(1);
        for (var i = 0; i < truckData.length; i++){
            console.log(truckData[i].truckId);
            if(truckData[i].truckId === parseInt(truckID)){
            obj.push( truckData[i])
            }
        }
        setId(obj[0].id);
        setCity_located(obj[0].city_located);
        setDestination(obj[0].destination);
        setStatus(obj[0].status);
        console.log(obj[0].status)
        }
    
    const DisplayText = () =>{
        if(id !== 0){
            return(<div>
            <h2>Your truck status can be seen here  </h2>
            <table className="tableBorder">
                <tr>
                  <th>ID</th>
                  <th>{id}</th>
                </tr>
                <tr>
                  <td>Source City</td>
                  <td>{city_located}</td>
                </tr>
                <tr>
                  <td>Destination City</td>
                  <td>{destination}</td>
                </tr>
                <tr>
                  <td>Status</td>
                  <td>{status}</td>
                </tr>
              </table>
              </div>)
        }
        else{
            return(
                <p>Enter truck ID</p>
            )
        }
    }
    return (
        <div>
            <div className="selectContainer">
                <TextField id="standard-basic" label="Enter Truck ID" type="text" placeholder="enter truck id" value={truckID} onChange={handleEntry} />
                <Button variant="contained" className="button" color="primary" onClick={handleSubmit}>Enter</Button>
            </div>
           <DisplayText className="mainContainer" />
           <Button variant="contained" className="button" color="primary" onClick={handleRedirect}>Take me home</Button>
        </div>
    )
}
