import React, { useState, useEffect } from "react";
import "../styles/TrafficLight.css";

const TrafficLight = () => {
    const [color, setColor] = useState("green");

    useEffect(() => {
        const sequence = [
            { color: "green", duration: 3000 },
            { color: "yellow", duration: 2000 },
            { color: "red", duration: 5000 },
            { color: "yellow", duration: 2000 },
        ];

        let currentStep = 0;

        const changeLight = () => {
            setColor(sequence[currentStep].color);
            setTimeout(() => {
                currentStep = (currentStep + 1) % sequence.length;
                changeLight();
            }, sequence[currentStep].duration);
        };

        changeLight();
    }, []);

    return (
        <div className="traffic-light">
            <div className={`bulb ${color === "green" ? "green" : ""}`}></div>
            <div className={`bulb ${color === "yellow" ? "yellow" : ""}`}></div>
            <div className={`bulb ${color === "red" ? "red" : ""}`}></div>
        </div>
    );
};

export default TrafficLight;
