import React from 'react'
import { Line } from 'react-chartjs-2'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Dchart() {
    const [tempData, setTempData] = useState([])
    const [chartData, setChartData] = useState({})
    const [noData, setNoData] = useState([])
    const [xAxis, setxAxis] = useState([])
    const [yAxis, setyAxis] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:5000/data")
             .then(res => {
                 let xVal = []
                 let yVal = []
                 setTempData(res.data)
                 tempData.forEach(function(value){
                    xVal.push(value.Year)
                    yVal.push(value.Glob)
                 })
                 setxAxis(xVal)
                 setyAxis(yVal)
                //  console.log(`xAxis data: ${xAxis}`)
                //  console.log(`yAxis data: ${yAxis}`)
             })
              .catch(err => {
                 console.log(err)
             })
            chart()
    },[])

    const chart = () => {

       
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
            setNoData({
                labels: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
                //labels: xAxis,
                datasets: [{
                    label: 'Global temp',
                    data: [12, 19, 3, 5, 2, 3, 100],
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

    return(
        <div>
            <p>Dchart is displayed below</p>
            {
                xAxis.length && yAxis.length > 0 ?
                <Line data={chartData}/>
                :
                <Line data={noData}/>
            }
        </div>
    )

}