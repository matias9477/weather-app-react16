import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import transformForecast from '../services/transformForecast';
import ForecastItem from './ForecastItem/';
import getUrlForecastByCity from './../services/getUrlForecastByCity';


class ForecastExtended extends Component {
    constructor(){
        super();
        this.state = { forecastData: null }
    }

    componentDidMount() {
        const url_forecast= getUrlForecastByCity(this.props.city);

        fetch(url_forecast).then(
            data => (data.json())
        ).then(
            weather_data => {
                console.log(weather_data);
                const forecastData = transformForecast(weather_data);
                console.log(forecastData);
                this.setState({forecastData})
            }
        );
    }
    

    renderForecastItemDays(forecastData){

        
        return forecastData.map( forecast => (
        <ForecastItem 
        key={`${forecast.weekDay}${forecast.hour}`}
        weekDay={forecast.weekDay} 
        hour={forecast.hour} 
        data={forecast.data}/>));
        
    }

    renderProgress(){
        return "Cargando Pronostico extendido...";
    }


    render(){
        const city = this.props.city;
        const {forecastData} = this.state;
        
        return (<div>
            <h2 className="forecastTittle">Pronóstico extendido para {city}</h2>
            {forecastData ? this.renderForecastItemDays(forecastData)
            : this.renderProgress()}

            
            </div>);
    }
}

ForecastExtended.protoTypes = {
    city: PropTypes.string.isRequired,
}

export default ForecastExtended;