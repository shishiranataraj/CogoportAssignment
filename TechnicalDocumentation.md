## 1. Creation of JSON data locally. 
    this is how a sample data field looks like
        {   id: 6,
            truckId : 1125,
            driverID: 4526,
            status: "Unbooked",
            max_km: 20,
            city_located: "Mumbai",
            destination: "",
            max_load: 100
        }
## 2. Importing the data into the components.
        import {truckData} from "../Trucks";

## 3. Selectively filtering and storing data in an array.
         for (var i = 0; i < truckData.length; i++){
            if ( (truckData[i].city_located === selected_origin_city) && (truckData[i].destination === selected_destination_city)){
            obj.push( truckData[i])
            }

## 4. Displaying the selecte data onto the datagrid
          <DataGrid
            rows={obj}
            columns={columns}
            pageSize={5}
            checkboxSelection

            onSelectionChange={(newSelection) => {
             setSelected_row(newSelection.rows);
             console.log(newSelection.rows);
             }}

## 5. Handling events for all the clicks and inputs.
            const handleChangeDestinationCity = (event) => {
                setSelected_destination_city(event.target.value);
                console.log(selected_destination_city);
                };

## 6. Routes setup.
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
                </Switch>
            </Router>

## 7. Writing css to style and position components.
        .filters{
        display: flex;
        flex-direction: row;
        margin-left: auto;
        margin-right: auto;
        margin-top: 40px;
        justify-content: center;
        }
## 8. Setup Firebase Hosting


    