import React from "react";
import { Line } from 'react-chartjs-2'

export default function Chartdata(props){

    console.log(`In the chartdata child section: ${props}`)
    const chartvalues = props.data
    console.log(chartvalues)
    const values = chartvalues.slice(0,400)
    console.log(values)
    let date = []
    let power = []
    values.forEach(elt =>{
          date.push(elt.Date)
          power.push(elt.Global_active_power)
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