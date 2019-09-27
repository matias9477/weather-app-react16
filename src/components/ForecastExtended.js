import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import ForecastItem from './ForecastItem/';
import CircularProgress from '@material-ui/core/CircularProgress';


const renderForecastItemDays = (forecastData) =>{
    return forecastData.map ( forecast => (
    <ForecastItem 
    key={`${forecast.weekDay}${forecast.hour}`}
    weekDay={forecast.weekDay} 
    hour={forecast.hour} 
    data={forecast.data}/>));
    
}

const renderProgress = () =>{
    return <CircularProgress size={50}/>;
}

const ForecastExtended = ({city, forecastData}) => (        
            <div>
            <h2 className="forecastTittle">Pronóstico extendido para {city}</h2>
            {forecastData ? renderForecastItemDays(forecastData)
            : renderProgress()}

            
            </div>
    );


ForecastExtended.protoTypes = {
    city: PropTypes.string.isRequired,
    forecastData: PropTypes.array,
}

export default ForecastExtended;