const BASE_URL = 'https://api.open-meteo.com/v1/forecast';
const currentWeatherDetails = '?latitude={latitude}&longitude={longitude}&current=surface_pressure&hourly=temperature_2m,relative_humidity_2m,wind_speed_120m&daily=sunrise,sunset,uv_index_max&timeformat=unixtime&timezone=auto&forecast_days=1'
const dayForeCast = '?latitude={latitude}&longitude={longitude}&daily=apparent_temperature_max&timeformat=unixtime&timezone=auto&forecast_days=5'
const hourlyForeCast = '?latitude={latitude}&longitude={longitude}&hourly=temperature_2m,wind_speed_120m,wind_direction_120m&timeformat=unixtime&timezone=auto&forecast_days=1'
// const locationData = [{
//     name: 'Udupi',
//     lat:
// }]

export default {BASE_URL,currentWeatherDetails, dayForeCast}