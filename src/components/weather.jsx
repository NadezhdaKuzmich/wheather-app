import React from "react";


const Weather = props => {
    const icon = `https://openweathermap.org/img/w/${props.icon}.png`;
    return (
        <div className="weather-box">
            { props.city &&
            <ul className="wheather-list">
                <li><b>Місцезнаходження:</b> <span><img src={icon} alt="icon" /> {props.city}, {props.country}</span></li>
                <li><b>Опис:</b>{props.description}</li>
                <li><b>Температура:</b> <span>{props.temp} &#176;</span></li>
                <li><b>Тиск:</b> {props.pressure}</li>
                <li><b>Вологість:</b> {props.humidity}</li>
                <li><b>Швидкість вітру:</b> {props.speed}</li>
                <li><b>Напрям у градусах:</b> <span>{props.deg} &#176;</span></li>
            </ul>            
            }
            <p className="error">{props.error}</p>
        </div>
    )
}

export default Weather;