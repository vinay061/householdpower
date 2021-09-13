import React from 'react'
import { Line } from 'react-chartjs-2'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Chartdata() {
    const [tempData, setTempData] = useState([])
    const [chartData, setChartData] = useState({})
    const [xData, setxData] = useState([])
    let xAxis = []
    let yAxis = []
    useEffect(() => {
        axios.get("http://localhost:5000/data")
             .then(res => {
                 setTempData(res.data)
                //  console.log(typeof(tempData))
                //  console.log(xAxis.length)
             })
              .catch(err => {
                 console.log(err)
             })
            chart()
    },[])

    // const getData = () => {
        
    // }

    const chart = () => {

        tempData.forEach(function(value){
            xAxis.push(value.Year)
            yAxis.push(value.Glob)
        })
        // console.log(`xAxis: ${xAxis}`)
        // console.log(`yAxis: ${yAxis}`)
        // console.log(`chartdata: ${chartData}`)
        
        if(xAxis.length > 0 && yAxis.length > 0){
            setChartData({
                //labels: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
                labels: xAxis,
                datasets: [{
                    label: 'Global temp',
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

        else {
            setChartData({
                labels: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
                //labels: xAxis,
                datasets: [{
                    label: 'Global temp',
                    data: [12, 19, 3, 5, 2, 3],
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
    }

   

    return (
        <div>
            <p>Chart is displayed as follows</p>
            <Line data={chartData}/>
            {/* <p>{xAxis.length}</p> */}
            {/* {
                xAxis.length > 0 ?
                <div>
                    <Line data={chartData}/>
                </div>
                :
                <div>
                    <Line data={chartData}/>
                </div>
                
            } */}
   
            
        </div>
    )
}
