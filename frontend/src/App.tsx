import React from 'react'
import { useState } from 'react'

import './App.css'

function App() {

  interface dateValue {
      days?: boolean,
      hours?: boolean,
      minutes?: boolean,
      seconds?: boolean
  }

  const DateTime: React.FC<dateValue> = ({ days, hours, minutes, seconds }) => {
    const now: Date = new Date();
    let time: string = "";
    if (days === undefined && hours === undefined && minutes === undefined && seconds === undefined) {
      time = now.toLocaleString();
      return  time;
    } else {
      return <></>
  }}
  return (
    <>
      <div className="timer">
        <h1>Current Date and Time</h1>
        <div className="datetime">
         <p><DateTime days={true} hours={true} minutes={true} seconds={true} /></p>
         <p><DateTime /></p>
        </div>
      </div>
    </>
  )
}


export default App
