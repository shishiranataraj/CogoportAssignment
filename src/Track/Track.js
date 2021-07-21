import React , {useState} from 'react';
import {truckData} from "../Trucks";

export default function Track() {
    const obj = [];
    const [truckID, setTruckID] = useState();
    
    const handleEntry = (event) =>{
        setTruckID(event.target.value);
        
    }
    const handleSubmit = () => {
       
        for (var i = 0; i < truckData.length; i++){
            console.log(truckData[i].truckId);
            if(truckData[i].truckId === parseInt(truckID)){
            obj.push( truckData[i])
            }
        }
        console.log(obj)
        }
    
    return (
        <div>
            <input type="text" placeholder="enter truck id" value={truckID} onChange={handleEntry}></input>
            <button onClick={handleSubmit}> Enter</button>
        </div>
    )
}
