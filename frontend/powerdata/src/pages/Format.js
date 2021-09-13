import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2'
import { Bar } from 'react-chartjs-2'

export default function Format() {
    
    const [home, setHome]= useState([])
    const [chartData, setChartData] = useState({})
    const [barData, setBarData] = useState({})
    let xAxis = []
    let yAxis = []
    useEffect(() =>{
        getChartData()
        chart()
        barchart()
    },[])



    async function getChartData(){
        await axios.get("http://localhost:5000/data")
                   .then(res => {
                       setHome(res.data)
                       //console.log(res.data)

                   })
                   .catch(err =>{
                       console.log(err)
                    })
        }
        //console.log(home)
        
        const rows = home.slice(0,10)
        console.log(rows)
        rows.forEach(elt => {
            xAxis.push(elt.Year)
            yAxis.push(elt.Glob)
        })
        console.log(`xAxis: ${xAxis}`)
        console.log(`yAxis: ${yAxis}`)

        async function chart () {

            const rows = home.slice(0,10)
            console.log(rows)
            rows.forEach(elt => {
                xAxis.push(elt.Year)
                yAxis.push(elt.Glob)
            })
            console.log(`Inside chart xAxis: ${xAxis}`)
            console.log(`Inside chart() yAxis: ${yAxis}`)

            await setChartData({
                //labels: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
                labels: xAxis,
                datasets: [{
                    label: 'Global temp',
                    //data: [12, 19, 3, 5, 2, 3, 100],
                    data: yAxis,
                    backGroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                    ],
                    borderColor: [ 'rgba(255, 99, 132, 1)',],
                    borderWidth: 1,
                }],
                options : {
                    responsive : true,
                }
            })
       
        }

        function barchart() {
            setBarData({
                //labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                labels: xAxis,
                datasets: [{
                    label: '# of Votes',
                    //data: [12, 19, 3, 5, 2, 3],
                    data: yAxis,
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
            })
        }

    return (
        <div>
            <p>Format Page</p>
            <Line data={chartData}/>
            <Bar data={barData}/>
        </div>
    )
}
