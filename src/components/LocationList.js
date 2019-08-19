import React from 'react';
import WeatherLocation from './WeatherLocation';

const LocationList = () => (
    <div>
        <WeatherLocation city="Barcelona, Es"/>
        <WeatherLocation city="Cordoba, Ar"/>
        <WeatherLocation city="Paris, Fr"/> 
        <WeatherLocation city="London, UK"/>
    </div>
);

export default LocationList;