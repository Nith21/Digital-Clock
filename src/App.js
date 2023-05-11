import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const date = new Date();
  // const days = [
  //   "SUNDAY",
  //   "MONDAY",
  //   "TUESDAY",
  //   "WEDNESDAY",
  //   "THURSDAY",
  //   "FRIDAY",
  //   "SATURDAY",
  // ];
  // console.log(date.getTimezoneOffset())
  const [currentDate, setCurrentDate] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  useEffect(() => {
    setCurrentDate({
      hours: date.getHours(),
      minutes: date.getMinutes(),
      seconds: date.getSeconds(),
    });
  });

  // function Hour(h) {
  //   if (h >= 12) {
  //     return h - 12;
  //   }
  //   return h;
  // }

  const amPm = currentDate.hours >= 12 ? "PM" : "AM";

  function Zero(h) {
    const length = h.toString().length;
    if (length <= 1) {
      return "0" + h;
    }
    return h;
  }
  return (
    <>
      <div className="head">
       
      </div>
      
      <div className="App">
        <div className="time">{Zero(currentDate.hours)}</div>
        <span>:</span>
        <div className="time">{Zero(currentDate.minutes)}</div>
        <span>:</span>
        <div className="time">{Zero(currentDate.seconds)}</div>
        <span>:</span>
        <span className="AMPM">{amPm}</span>
      </div>
      {/* <div className="dayDiv">
        <span className="day">{days[date.getDay()]}</span>
      </div> */}
    </>
  );
}

export default App;
