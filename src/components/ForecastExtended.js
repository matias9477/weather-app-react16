import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ForecastExtended extends Component {
    render(){
        const city = this.props.city;
        
        return (<div>Pronostico extendido para {city}</div>);
    }
}

ForecastExtended.protoTypes = {
    city: PropTypes.string.isRequired,
}

export default ForecastExtended;