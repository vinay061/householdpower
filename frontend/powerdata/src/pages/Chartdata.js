import React from "react";
import { Line } from 'react-chartjs-2'

//This function displays the chart between the date and Global active power
export default function Chartdata(props){

    //assign the data received from Tabledata to chartValues
    const chartvalues = props.data
    //limiting the values using slice. Can be changed
    const values = chartvalues.slice(0,1000)
    let date = []
    let power = []
    values.forEach(elt =>{
          date.push(elt.Date)   // array to maintain x axis values
          power.push(elt.Global_active_power) // array to maintain y axis values
    })
    console.log(`Date data(chartdata): ${date}`)
    console.log(`Power data(chartdata): ${power}`)
    
    
    return(
        <div>
            <p>Chart data to compare between the Date and Global Active Power</p>
            <Line data={
                {
                    labels: date,
                    datasets: [{
                        label: 'Global Active Power',
                        data: power,
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
            }/> 
        </div>
    )
}