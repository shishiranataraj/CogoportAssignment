import React , {useState} from 'react';
import {truckData} from "../Trucks";

export default function Track() {
    const obj = [];
    const [truckID, setTruckID] = useState();
    const [flag, setFlag] = useState(0);
    const [id, setId] = useState('');
    const [city_located, setCity_located] = useState('');
    const [destination, setDestination] = useState('');
    const [status, setStatus] = useState('');
    

    const handleEntry = (event) =>{
        setTruckID(event.target.value);
        
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
    
    
    return (
        <div>
            <input type="text" placeholder="enter truck id" value={truckID} onChange={handleEntry}></input>
            <button onClick={handleSubmit}> Enter</button>
            <p>
                {status} , {destination}, {city_located} , {id}
            </p>
        </div>
    )
}
