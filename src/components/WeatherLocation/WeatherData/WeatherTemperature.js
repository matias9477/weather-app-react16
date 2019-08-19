import React from 'react';
import PropTypes from 'prop-types';
import WeatherIcons from 'react-weathericons';
import {
    CLOUD,
    SUN,
    RAIN,
    THUNDER,
    DRIZZLE,
    SNOW,
} from './../../../constants/weathers';
import './styles.css';

const icons = {
    [SUN]: "day-sunny",
    [CLOUD]: "cloud",
    [THUNDER]: "day-thunderstore",
    [DRIZZLE]: "day-showers",
    [RAIN]: "rain",
    [SNOW]: "snow",
  
};


const getWeatherIcon = weatherState =>{
    const icon = icons[weatherState];

    const sizeIcon = "4x";

    if(icon)
        return <WeatherIcons className="wicon" name={icon} size={sizeIcon}/>
    else    
        return <WeatherIcons className="wicon" name={"day-sunny"} size="2x"/>
};



const WeatherTemperature = ({ temperature, weatherState}) =>(
    <div className="weatherTemperatureCont">
        {
            getWeatherIcon(weatherState)
        }
        <span className="temperature">{`${temperature}`}</span>
        <span className="temperatureType">{` C°`}</span>
    </div>
);

WeatherTemperature.propTypes={
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
};

export default WeatherTemperature;