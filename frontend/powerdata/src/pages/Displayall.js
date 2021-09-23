import React from 'react'
import Chartone from "./Chartone";
import Charttwo from "./Charttwo";
import Radarchart from './Radarchart';
import Drafttable from "./Drafttable";

export default function Displayall() {
    return (
        <div>
            <Chartone/>
            <br></br>
            <br></br>
            <br></br>
            <Charttwo/>
            <br></br>
            <br></br>
            <br></br>
            <Radarchart/>
            <br></br>
            <br></br>
            <br></br>
            <Drafttable/>
        </div>
    )
}

