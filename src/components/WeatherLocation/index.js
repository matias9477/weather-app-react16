import React, {Component} from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY,
} from './../../constants/weathers';

const location = "Buenos Aires,ar";
const api_key = "a05ce5942f2fa1fcee2ecc135dd44bb3";
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather";
const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;


const data = {
    temperature: 69,
    weatherState: SUN,
    humidity: 10,
    wind: '10 m/s',
}

const data2 = {
    temperature: 639,
    weatherState: WINDY,
    humidity: 666,
    wind: 'ANISMANLOMATARON',
}



class WeatherLocation extends Component{

    constructor() {
        super();
        this.state = {
            city: "Barcelona",
            data: data,
        };
    }

    handleUpdateClick = () =>{
        fetch(api_weather);
        
        this.setState( {
            data:data2,
        });
    }


    render(){
        const { city,data } = this.state;
        return(
            <div className="weatherLocationCont">
            <Location city={city} />
            <WeatherData data={data} />
            <button onClick={this.handleUpdateClick}>Actualizar</button>
             </div>
        );
    }
   

}

export default WeatherLocation;