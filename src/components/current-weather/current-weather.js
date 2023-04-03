import React from 'react';
import './current-weather.css';
import Raining from '../rain-animation/rain';

const CurrentWeather = ({data}) => {
    const desc = data.weather[0].description;
    const capital_desc = desc.charAt(0).toUpperCase() + desc.slice(1);

    const date = new Date((data.sys.sunrise + data.timezone) * 1000).getDate();
    const mon = new Date((data.sys.sunrise + data.timezone) * 1000).getMonth();
    const year = new Date((data.sys.sunrise + data.timezone) * 1000).getFullYear();



    return (
        <div className='weather'>
            {/* checking if any of the raining condition match execute it  raining animation*/}
         {capital_desc === "Shower rain" && <Raining />}
         {capital_desc === "Rain" && <Raining />}
         {capital_desc === "Light intensity drizzle rain" && <Raining />}
         {capital_desc === "Drizzle rain" && <Raining />}
         {capital_desc === "Heavy intensity drizzle rain" && <Raining />}
         {capital_desc === "Shower rain and drizzle" && <Raining />}
         {capital_desc === "Heavy shower rain and drizzle" && <Raining />}
         {capital_desc === "Light rain" && <Raining />}
         {capital_desc === "Moderate rain" && <Raining />}
         {capital_desc === "Heavy intensity rain" && <Raining />}
         {capital_desc === "Very heavy rain" && <Raining />}
         {capital_desc === "Extreme rain" && <Raining />}
         {capital_desc === "Freezing rain" && <Raining />}
         {capital_desc === "Light intensity shower rain" && <Raining />}
         {capital_desc === "Shower rain" && <Raining />}
         {capital_desc === "Heavy intensity shower rain" && <Raining />}
         {capital_desc === "Ragged shower rain" && <Raining />}
            {/* ------------------------------------------------------------------------------- */}


            <div className='top'>
                <div className='city-weather'>
                    <p className='city'>{data.city}</p>
                    <p>{date + "/" + mon + "/" + year}</p>
                    <p className='weather-description'>{capital_desc}</p>
                </div>
                <img alt="weather" className='weather-icon' src={`icons/${data.weather[0].icon}.png`} />
            </div>

            <div className='bottom'>
                <p className='temperature'>{Math.round(data.main.temp)}°C</p>
                <div className='details'>
                    <div className='parameter-row'>
                        <span className='parameter-label'>Details</span>
                    </div>
                    <hr className='detail-hr' />  
                    <div className='parameter-row'>
                        <span className='parameter-label'>Feels like</span>
                        <span className='parameter-value'>{Math.round(data.main.feels_like)}°C</span>
                    </div>
                    <hr />
                    <div className='parameter-row'>
                        <span className='parameter-label'>Wind</span>
                        <span className='parameter-value'>{Math.round(data.wind.speed)} m/s</span>
                    </div>
                    <hr />
                    <div className='parameter-row'>
                        <span className='parameter-label'>Humidity</span>
                        <span className='parameter-value'>{Math.round(data.main.humidity)} %</span>
                    </div>
                    <hr />
                    <div className='parameter-row'>
                        <span className='parameter-label'>Pressure</span>
                        <span className='parameter-value'>{Math.round(data.main.pressure)} hPa</span>
                    </div>
                    <hr />
                </div>
            </div>
        </div>
    );
}

export default CurrentWeather;