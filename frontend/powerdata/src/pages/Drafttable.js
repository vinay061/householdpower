import React from 'react'
import { useContext } from 'react'
import { Table } from 'react-bootstrap'
import { DataContext } from '../App'



export default function Drafttable() {

    const powerData = useContext(DataContext)
    

    return (
        <div>
            <h1>Table Data</h1>
            <p>Data displayed in table format</p>
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
                <tbody>
                        {
                            powerData.map((value,index) =>{
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
