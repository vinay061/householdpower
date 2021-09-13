import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Table } from 'react-bootstrap'

export default function Tabledata() {

    const [tableData, setTableData] = useState([])

    useEffect(() =>{
        getTableData()
    },[])

    async function getTableData(){
        await axios.get("http://localhost:5000/data")
                   .then(res => {
                       setTableData(res.data)
                       console.log(res.data)
                   })
    }
    return (
        <div>
            <p>Data displayed in table format</p>
            <Table className="striped bordered hover variant=dark">
                <thead>
                    <tr>
                        <th>Serial Number</th>
                        <th>Year</th>
                        <th>Temperature</th>
                        <th>Nhem</th>
                        <th>Shem</th>
                    </tr>
                </thead>
                    <tbody className="hover">
                        {
                            tableData.map((value,index) =>{
                                return(
                                    <tr key={index}>
                                        <td>{index}</td>
                                        <td>{value.Year}</td>
                                        <td>{value.Glob}</td>
                                        <td>{value.Shem}</td>
                                        <td>{value.Nhem}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
            </Table>
        </div>
    )
}
