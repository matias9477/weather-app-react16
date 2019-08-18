import React, {Component} from 'react';
import Location from './Location';
import {api_weather} from './../../constants/api_url';
import WeatherData from './WeatherData';
import transformWeather from './../services/transformWeather';
import './styles.css';






class WeatherLocation extends Component{

    constructor() {
        super();
        this.state = {
            city: "Barcelona",
            data: null,
        };
    }

    componentDidMount() {
        this.handleUpdateClick();
    }

    componentDidUpdate(prevProps, prevState) {
    }

    
    



    handleUpdateClick = () =>{
        fetch(api_weather).then( resolve =>{
            return resolve.json();
        }).then(data => {
            const newWeather = transformWeather(data);
            console.log(newWeather);
            this.setState({
                data: newWeather

            })
            
        });
    }


    render(){
        const { city,data } = this.state;
        return(
            <div className="weatherLocationCont">
            <Location city={city} />
            {data ? <WeatherData data={data} /> : "Cargando"}
             </div>
        );
    }
   

}

export default WeatherLocation;