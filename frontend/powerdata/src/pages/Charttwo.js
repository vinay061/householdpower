import React from 'react'
import { useContext } from 'react'
import { DataContext } from '../App'
import { Line } from 'react-chartjs-2'

export default function Charttwo() {

    const powerData = useContext(DataContext)
    const date = []
    const power = []
    const newValues = powerData.slice(0, 100)
    newValues.forEach(element => {
        date.push(element.Date)
        power.push(element.Global_active_power)
    })

    return (
        <div>
            <h2>Chart Two</h2>
            <p>Comparing the data between the Date and Global active power</p>
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
            }
            />
        </div>
    )
}
