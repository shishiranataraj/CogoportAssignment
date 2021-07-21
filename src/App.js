import React, {useState, useEffect} from 'react'
import "./App.css";
import axios from "./axiosInstance";
import Landing from "./Landing/Landing"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import Track from "./Track/Track"

export default function App() {
   
  // const res = {
  //     result: ['0','1']
  // };
  // const addNewItem = () => {
  //   let { result, input } = this.res;
  //   result.push(input);
  //   // this.state.cart.push(this.state.input); // same as above, though bad practice 
  // };

  // useEffect(() => {
  //   axios
  //   .get("/v1/vehicles")
  //   .then((response) => {
  //     console.log(response.data);
  //     console.log(response.data.pagination.total);
  //     for(let i=0; i < parseInt(response.data.pagination.total); i++)  {
  //      addNewItem(response.data.vehicles[i].vehicle.id);
  //     };      
  //     console.log("res=" + res );  
  //   })
  //   .catch((e) => {
  //     console.log(e);
  //   });
  // }); 
  return (  
    <div className="App">
    <Router>
      <Switch>
     
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/track">
          <Track />
        </Route>
        <Route path="/">
          <Landing />
        </Route>
        {/* <Route path="/">
          <Header />
          <Landing />
        </Route> */}
      </Switch>
    </Router>
    </div>
  );
}

