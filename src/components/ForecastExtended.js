import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import transformForecast from '../services/transformForecast';
import ForecastItem from './ForecastItem/';
import getUrlForecastByCity from './../services/getUrlForecastByCity';

/*
const data = {
    temperature: 10,
    humidity: 10,
    weatherState: 'normal',
    wind: 'culo'
}

const days = [
    'Lunes','Martes', 'Miercoles', 'Jueves', 'Viernes',
];

*/

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
                this.setState({forecastData})
            }
        );
    }
    

    renderForecastItemDays(){

        return "Render Items";
        /*
        return days.map( day => (<ForecastItem weekDay={day} hour={10} data={data}/>));
        */
    }

    renderProgress(){
        return "Cargando Pronostico extendido...";
    }


    render(){
        const city = this.props.city;
        const {forecastData} = this.state;
        
        return (<div>
            <h2 className="forecastTittle">Pronóstico extendido para {city}</h2>
            {forecastData ? this.renderForecastItemDays()
            : this.renderProgress()}

            
            </div>);
    }
}

ForecastExtended.protoTypes = {
    city: PropTypes.string.isRequired,
}

export default ForecastExtended;