import React from 'react'
import { Radar } from 'react-chartjs-2'
import { useContext} from 'react'
import { DataContext } from '../App'


export default function Radarchart() {

    const powerData = useContext(DataContext)

    const values = powerData.slice(0,100)
    let time = []
    let voltage = []
    let intensity = []
    values.forEach(elt =>{
        time.push(elt.Time)   // array to maintain x axis values
        voltage.push(elt.Voltage) // array to maintain y axis values
        intensity.push(elt.Global_intensity)
    })

    return (
        <div>
            <p>Radar Chart</p>
            <Radar data = {
                {
                    labels: time,
                    datasets: [{
                        label: 'Voltage',
                        data: voltage,
                        fill: true,
                        backgroundColor: 'rgba(255, 99, 132, 0.2)',
                        borderColor: 'rgb(255, 99, 132)',
                        pointBackgroundColor: 'rgb(255, 99, 132)',
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: 'rgb(255, 99, 132)'
                    }, {
                        label: 'Global intensity',
                        data: intensity,
                        fill: true,
                        backgroundColor: 'rgba(54, 162, 235, 0.2)',
                        borderColor: 'rgb(54, 162, 235)',
                        pointBackgroundColor: 'rgb(54, 162, 235)',
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: 'rgb(54, 162, 235)'
                        }]
                }
            }
            />
        </div>
    )
}
