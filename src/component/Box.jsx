import sunrise from '../assets/sunrise.png'
import sunset from '../assets/sunset.png'
import sun from '../assets/sunImage.png'
import humidity from '../assets/humidity 1.png'
import pressure from '../assets/pressure.png'
import windSpeed from '../assets/wind 1.png'
import uV from '../assets/uv-white 1.png'


const Box=(props)=>{ 
  // console.log('props',props)
  const weatherData = props.data
  // console.log('weatherData',weatherData)
    return (
      <div className="sunny">
      <div className="temperature">
         <div className="degree">
            <h1 className="degreeCelcius">{weatherData.temperature}<sup>o</sup>C</h1>
            <span classNames="currentTemperature"> 
              <span>Feels like:</span>
              <span className="currentCelcius">{weatherData.feelsLike}<sup>o</sup>C</span>
            </span>
          </div>
          <div className="sunCondition">
            <div className="sunrise">
              <img src={sunrise} className="sunriseImage"/>
              <div className="imageData">
                  <h3>Sunrise</h3>
                  <h3>{weatherData.sunrise}</h3>
              </div>
            </div>
            <div className="sunset">
              <img src={sunset} className="sunsetImage"/>
              <div className="imageData">
                  <h3>Sunset</h3>
                  <h3>{weatherData.sunset}</h3>
              </div>
            </div>
          </div>
      </div>

      <div className="sun">
          <img className='sunImgCondition' src={sun}/>
          <h1 className='sunHeading'>Sunny</h1>
          
      </div>
      <div className="weatherCondition">
         <div className="humidity">
          <img className='humidityImg' src={humidity}/>
          <h3 className='currentWeatheCondition'>{weatherData.humadity}%</h3>
          <p className='currentWeatheCondition'>Humidity</p>
         </div>
         <div className="wind">
          <img className='windImg' src={windSpeed}/>
          <h3 className='currentWeatheCondition'>{weatherData.windSpeed} KM/h</h3>
          <p className='currentWeatheCondition'>Wind speed</p>
         </div>
         <div className="pressure">
          <img className='pressureImg' src={pressure}/>
          <h3 className='currentWeatheCondition'>{weatherData.surfacePressure} hPa</h3>
          <p className='currentWeatheCondition'>Pressure</p>
         </div>
         <div className="uv">
          <img className='uvImg' src={uV}/>
          <h3 className='currentWeatheCondition'>{weatherData.uv}</h3>
          <p className='currentWeatheCondition'>UV</p>
         </div>
      </div>
  </div>
    )
}

export default Box;