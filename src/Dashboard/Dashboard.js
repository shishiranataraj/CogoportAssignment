import React,  { useState }  from 'react'
import "./Dashboard.css";
import { DataGrid } from '@material-ui/data-grid';
import {truckData} from "../Trucks";
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
// const columns = [ "truckId" , "driverID", "status", "max_km", "city_located", "max_load" ];


const columns = [
    { field: 'id', headerName: 'ID', width: 150 },
    {
      field: 'truckId',
      headerName: 'Truck ID',
      width: 150,
      editable: true,
    },
    {
      field: 'driverID',
      headerName: 'Driver ID',
      width: 150,
      editable: true,
    },
    {
      field: 'status',
      headerName: 'Status',
      type: 'number',
      width: 150,
      editable: true,
    },
    {
      field: 'max_km',
      headerName: 'Max KM',
      editable: true,
      width: 150,
      
    },
    {
      field: 'city_located',
      headerName: 'City Located',
      editable: true,
      width: 160,
      
    },
    {
      field: 'destination',
      headerName: 'Destination',
      editable: true,
      width: 160,
      
    },
    {
      field: 'max_load',
      headerName: 'Max Load',
      editable: true,
      width: 160,
      
    },
  ];

  

export default function Dashboard() {
    const obj = [];
    const [visible, setVisible] = useState(false);
    const [selected_origin_city,setSelected_origin_city]= useState('');
    const [selected_destination_city,setSelected_destination_city] = useState('');
    const [selected_row,setSelected_row] = useState('');
    const [load, setLoad] = useState('');
    const [errorFlag,setErrorFlag] = useState(false);
    
    const handleChangeOriginCity = (event) => {
        setSelected_origin_city(event.target.value);
        console.log(selected_origin_city)
       
       
      };
    const handleChangeDestinationCity = (event) => {
        setSelected_destination_city(event.target.value);
        console.log(selected_destination_city);
       
       
      };
      
    // const handleChangeSelectedRow = (event) => {
    //     setSelected_row(event.target.value);
    //     console.log("Selected row " + selected_row)
    //   };
    const Table = () => {
        for (var i = 0; i < truckData.length; i++){
            if ( (truckData[i].city_located === selected_origin_city) && (truckData[i].destination === selected_destination_city)){
            obj.push( truckData[i])
            }
           
        }
         return(
                
            <DataGrid
            rows={obj}
            columns={columns}
            pageSize={5}
            checkboxSelection

            onSelectionChange={(newSelection) => {
             setSelected_row(newSelection.rows);
             console.log(newSelection.rows);
             }}
          />
         
        )

        
    }
   
    const Filters = () =>{
      
        if({visible }){
         return(
        <div className="filters">
       
        <InputLabel id="demo-controlled-open-select-label">Select Origin City</InputLabel>
        <Select
        labelId="demo-controlled-open-select-label"
        id="demo-controlled-open-select" 
        value={selected_origin_city}
        onChange={handleChangeOriginCity}
      > 
      <MenuItem value="">
      <em>None</em>
      </MenuItem>
        {
        truckData.map((result) => (
        <MenuItem value={result.city_located}>{result.city_located}</MenuItem>
        ))}
        </Select>
        <InputLabel id="demo-controlled-open-select-label">Select Destination City</InputLabel>
        <Select
        labelId="demo-controlled-open-select-label"
        id="demo-controlled-open-select" 
        value={selected_destination_city}
        onChange={handleChangeDestinationCity}
      > 
      <MenuItem value="">
      <em>None</em>
      </MenuItem>
        {
        truckData.map((result) => (
        <MenuItem value={result.destination}>{result.destination}</MenuItem>
        ))}
  
  </Select>
  
  </div>
         )
         }
    }
    const ErrorComponent = () => {
        if(obj === ' '){
            return(
                <p>Cannot find trucks for the given criteria</p>
            )
        }
        else return null;
    }
    return (
        <div style={{ height: 400, width: '100%' }}>
                <h2>Available trucks</h2>
                <Table />
                <p> Please select criteria to display available trucks</p>
                <ErrorComponent />
                <Filters />
      </div>
    )
}
