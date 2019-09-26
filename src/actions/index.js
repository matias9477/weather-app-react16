import getUrlForecastByCity from './../services/getUrlForecastByCity';
import transformForecast from './../services/transformForecast';

export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';

export const setCity = payload =>({type: SET_CITY, payload});
const setForecastData = payload =>({type: SET_FORECAST_DATA, payload})

export const setSelectedCity = payload =>{
    return dispatch => {
        const url_forecast= getUrlForecastByCity(payload);

        dispatch(setCity(payload));

        //activo en el estado un indicador de busqueda de datos
        return fetch(url_forecast).then(
            data => (data.json())
        ).then(
            weather_data => {

                const forecastData = transformForecast(weather_data);

                //this.setState({forecastData})
                //modificacion del estado con el resultado del fetch
                dispatch(setForecastData({city: payload, forecastData}));
            }
        );
    };
};