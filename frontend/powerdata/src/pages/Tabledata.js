import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Table } from 'react-bootstrap'
import Tablechart from './Tablechart'
import Chartdata from './Chartdata'



// this function displays the data received from the database in a table format
export default function Tabledata() {

    const [tableData, setTableData] = useState([])

    useEffect(() =>{
        getTableData()
    },[])

    //function to get the data from the url and assign to the state variable setTableData
    async function getTableData(){
        await axios.get("http://localhost:5000/data")
                   .then(res => {
                       setTableData(res.data)
                    })
                    .catch(err => {
                        console.log(err)
                    })
    }

    return (
        <div>
            {/*Data received from database is passed to the chart component through tabledata variable*/}
            <Tablechart data={tableData}/> 
            <br></br>
            <br></br>
            <br></br>
            {/*Data received from database is passed to the chart component through tabledata variable*/}
            <Chartdata data={tableData}/>
            <br></br>
            <br></br>
            <br></br> 
            <p>Data displayed in table format</p>
            {/* Data recieved from the database is displayed in the table as below*/}
            <Table className="striped bordered hover variant=light">
                <thead>
                    <tr>
                        <th>Serial Number</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Global Active Power</th>
                        <th>Global Reactive Power</th>
                        <th>Voltage</th>
                        <th>Global Intensity</th>
                        <th>Sub Metering 1</th>
                        <th>Sub Metering 2</th>
                        <th>Sub Metering 3</th>
                    </tr>
                </thead>
                    <tbody className="hover">
                        {
                            tableData.map((value,index) =>{
                                return(
                                    <tr key={index}>
                                        <td>{index+1}</td>
                                        <td>{value.Date}</td>
                                        <td>{value.Time}</td>
                                        <td>{value.Global_active_power}</td>
                                        <td>{value.Global_reactive_power}</td>
                                        <td>{value.Voltage}</td>
                                        <td>{value.Global_intensity}</td>
                                        <td>{value.Sub_metering_1}</td>
                                        <td>{value.Sub_metering_2}</td>
                                        <td>{value.Sub_metering_3}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
            </Table>
         </div>
    )
}
