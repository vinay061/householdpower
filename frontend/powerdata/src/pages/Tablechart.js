import React from "react";
import { Line } from 'react-chartjs-2'

//This function displays the chart for the time and voltage
export default function Tablechart(props){

    //assign the data received from Tabledata to chartValues
    const chartvalues = props.data
    //limiting the values using slice. Can be changed
    const values = chartvalues.slice(0,1000)
    let time = []
    let voltage = []
    values.forEach(elt =>{
         time.push(elt.Time)   // array to maintain x axis values
         voltage.push(elt.Voltage) // array to maintain y axis values
    })
    
    return(
        <div>
            <p>Chart to compare between Time and Voltage</p>
            <Line data={
                {
                    labels: time,
                    datasets: [{
                        label: 'Voltage',
                        data: voltage,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
                }
            }
            />
        </div>
    )
}