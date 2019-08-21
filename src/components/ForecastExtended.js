import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import ForecastItem from './ForecastItem/';

const data = {
    temperature: 10,
    humidity: 10,
    weatherState: 'normal',
    wind: 'culo'
}

const days = [
    'Lunes','Martes', 'Miercoles', 'Jueves', 'Viernes',
];

class ForecastExtended extends Component {

    renderForecastItemDays(){
        return days.map( day => (<ForecastItem weekDay={day} hour={10} data={data}/>));
    }


    render(){
        const city = this.props.city;
        
        return (<div>
            <h2 className="forecastTittle">Pronóstico extendido para {city}</h2>
            {this.renderForecastItemDays()}
            </div>);
    }
}

ForecastExtended.protoTypes = {
    city: PropTypes.string.isRequired,
}

export default ForecastExtended;