import React from "react";
import { Line } from 'react-chartjs-2'

export default function Chartdata(props){

    console.log(`In the chartdata child section: ${props}`)
    const chartvalues = props.data
    console.log(chartvalues)
    const values = chartvalues.slice(0,100)
    console.log(values)
    let year = []
    let temp = []
    values.forEach(elt =>{
         year.push(elt.Year)
         temp.push(elt.Glob)
     })
    console.log(`Year data(chartdata): ${year}`)
    console.log(`Temp data(chartdata): ${temp}`)
    
    
    return(
        <div>
            <p>Chart of the table (child of table)</p>
            <Line data={
                {
                    labels: year,
                    datasets: [{
                        label: 'Global temp',
                        data: temp,
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