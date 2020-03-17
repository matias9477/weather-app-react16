import getUrlForecastByCity from './../services/getUrlForecastByCity';
import transformForecast from './../services/transformForecast';
import getUrlWeatherByCity from './../services/getUrlWeatherByCity';
import transformWeather from './../services/transformWeather';


export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';
export const GET_WEATHER_CITY="GET_WEATHER_CITY";
export const SET_WEATHER_CITY="SET_WEATHER_CITY";
export const SET_WEATHER = 'SET_WEATHER';

export const setCity = payload =>({type: SET_CITY, payload});
const setForecastData = payload =>({type: SET_FORECAST_DATA, payload})

const getWeatherCity = payload => ({type: GET_WEATHER_CITY, payload});
const setWeatherCity = payload => ({type: SET_WEATHER_CITY, payload});

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

export const setWeather = payload =>{

    return dispatch => {
        payload.forEach(city => {
            dispatch(getWeatherCity(city));

            const api_weather = getUrlWeatherByCity(city);

            fetch(api_weather).then( resolve =>{
                return resolve.json();
            }).then (data => {
                const weather = transformWeather(data);

            dispatch(setWeatherCity({city, weather}));        
            });
        });
    }
}