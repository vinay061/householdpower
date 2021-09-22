import React from 'react'
import { Line } from 'react-chartjs-2'
import { useContext } from 'react'
import { DataContext } from '../App'

export default function Chartone() {
 
const powerData = useContext(DataContext)

//limiting the values using slice. Can be changed
const values = powerData.slice(0,100)
let time = []
let voltage = []
values.forEach(elt =>{
     time.push(elt.Time)   // array to maintain x axis values
     voltage.push(elt.Voltage) // array to maintain y axis values
})

    return (
        <div>
            <h1>Chart One</h1>
            <p>Comparing the data between Time and Voltage consumption</p>
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
