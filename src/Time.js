import React, { useState } from "react";
import './style.css';

const Time = () => {
    const newTime = new Date().toLocaleTimeString();

    const [time, setTime] = useState(newTime);

    const updateTime = () => {
        const newsTime = new Date().toLocaleTimeString();

        setTime(newsTime, 1000);
    }

    setInterval(updateTime)

    return (
        <div className="container">
            <p className="time">{time}</p>
        </div>
    )
}


export default Time