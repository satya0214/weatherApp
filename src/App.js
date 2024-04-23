import logo from "./logo.svg";
import Header from "./component/Header";
import Card from "./component/Card";
import "./App.css";
import List from "./component/Items";
import Box from "./component/Box";
import Apiservice from "./services/ApiService.js";
import React, { useState, useEffect } from "react";
//import Profilepic from './assets/sunrise.png'
import cloud1 from "./assets/clouds 1.png";
import clear1 from "./assets/clear 1.png";
import navigation1 from "./assets/navigation 1.png";
import navigation2 from "./assets/navigation 2.png";
import navigation3 from "./assets/navigation3.png";
import Dabba from "./component/Dabba";
import changeTimeFormat from "./services/CommonService.js";

// import cloud5 from './assets/clouds 1.png'
// import clear1 from './assets/clear 1.png'
import drizzle from "./assets/drizzle 1.png";
import rain from "./assets/rain 1.png";

import Feels from "feels";
import DayForecast from './component/DayForecast';
import Spinner from './component/Spinner';
import LocationData from "./constants/LocationData.js";
function App() {
  const [currentWeatherDetails, setCurrentWeatherDetails] = useState(null);
  const [forecastData, setForecastData] = useState([]);
  const [dayForCastData, setDayForCastData] = useState([]);
  const [location, setLocation] = useState(LocationData[0]);
  const errorCallBack = (error) => {
    console.log(error);
  };
  const successCallBack = (response) => {
    const data = response.data;
    const currentTime = new Date().getHours();
    const temperatureListInCelcius = data.hourly.temperature_2m;
    const humadityList = data.hourly.relative_humidity_2m;
    const windSpeedList = data.hourly.wind_speed_120m;
    const currentSurfacePressure = data.current.surface_pressure;
    const currentUV = data.daily.uv_index_max[0];
    const sunrise = data.daily.sunrise[0];
    const sunset = data.daily.sunset[0];
    const feelsLike = new Feels({
      temp: temperatureListInCelcius[currentTime],
      humidity: humadityList[currentTime],
    })
      .toC()
      .like(["AAT", "HI_CA"]);
    const currentWeather = {
      time: currentTime,
      temperature: temperatureListInCelcius[currentTime],
      humadity: humadityList[currentTime],
      windSpeed: windSpeedList[currentTime],
      surfacePressure: currentSurfacePressure,
      uv: currentUV,
      sunrise: getTime(sunrise),
      sunset: getTime(sunset),
      feelsLike: Math.round(feelsLike * 100) / 100,
    };
    // console.log("currentWeather", currentWeather, currentTime);
    const timeList = data.hourly.time;
    // console.log("timeList", timeList);

    const ForecastData = [];
    // const obj =
    //     {
    //       time:changeTimeFormat(timeList[currentTime]) ,
    //       temperature:temperatureListInCelcius[currentTime]+'°C',
    //       distance:windSpeedList[currentTime]+'KM',
    //       imageCloud:clear1,
    //       imgNavigation:navigation1
    //     }

    for (let i = 0; i < 5; i++) {
      const obj = {
        time: changeTimeFormat(timeList[currentTime + i]),
        temperature: temperatureListInCelcius[currentTime + i] + "°C",
        distance: windSpeedList[currentTime + i] + "KM",
        imageCloud: i === 0 || i === 1 || i === 4 ? clear1 : cloud1,
        // imgNavigation: (i < 4) ? navigation1
      };
      if (i === 0) {
        obj.imgNavigation = navigation1;
      } else if (i === 1) {
        obj.imgNavigation = navigation2;
      } else {
        obj.imgNavigation = navigation3;
      }
      ForecastData.push(obj);
    }

    console.log("ForecastData", ForecastData);
    // const ForecastData = [
    //   {
    //     time:changeTimeFormat(timeList[currentTime+0]) ,
    //     temperature:temperatureListInCelcius[currentTime]+'°C',
    //     distance:windSpeedList[currentTime]+'KM',
    //     imageCloud:clear1,
    //     imgNavigation:navigation1
    //   },
    //   {
    //     time:changeTimeFormat(timeList[currentTime+1]) ,
    //      temperature:temperatureListInCelcius[currentTime+1]+'°C',
    //      distance:windSpeedList[currentTime+1]+'KM',
    //     imageCloud:clear1,
    //     imgNavigation:navigation2
    //   },
    //   {
    //     time:changeTimeFormat(timeList[currentTime+2]),
    //    temperature:temperatureListInCelcius[currentTime+2]+'°C',
    //      distance:windSpeedList[currentTime+2]+'KM',
    //     imageCloud:cloud1,
    //     imgNavigation:navigation1
    //   },
    //   {
    //     time:changeTimeFormat(timeList[currentTime +3]),
    //    temperature:temperatureListInCelcius[currentTime+3]+'°C',
    //      distance:windSpeedList[currentTime+3]+'KM',
    //     imageCloud:cloud1,
    //     imgNavigation:navigation3
    //   },
    //   {
    //    time:changeTimeFormat(timeList[currentTime+4]) ,
    //    temperature:temperatureListInCelcius[currentTime+4]+'°C',
    //      distance:windSpeedList[currentTime+4]+'KM',
    //     imageCloud:clear1,
    //     imgNavigation:navigation1
    //   }

    // ];
    setForecastData(ForecastData);

    // console.log("datadata", data);
    // console.log("ForecastData", ForecastData);
    // console.log("currentWeatherDetails", currentWeather);
    setCurrentWeatherDetails(currentWeather);
  };
  useEffect(() => {
    const fetchData = async () => {
      Apiservice.getData(location).then(successCallBack, errorCallBack);
      Apiservice.getFiveDaysForecastData(location).then(
        (response) => {
          const data = response.data;
          const fiveDaysForecast = [];
          const { apparent_temperature_max, time } = data.daily;
          // console.log(apparent_temperature_max, time);
          for (let i = 0; i < 5; i++) {
            const obj = {
              imgSrc: cloud1,
              temperature: apparent_temperature_max[i] + "°C",
              day: new Date(time[i] * 1000).toDateString(),
            };
            if (apparent_temperature_max[i] < 25) {
              obj.imgSrc = cloud1;
            } else if (apparent_temperature_max[i] < 30) {
              obj.imgSrc = cloud1;
            } else {
              obj.imgSrc = drizzle;
            }
            fiveDaysForecast.push(obj);
          }
          setDayForCastData(fiveDaysForecast);
          // console.log("fiveDaysForecast", fiveDaysForecast);
        },
        (error) => {
          console.log("error", error);
        }
      );
    };

    fetchData();
    console.log('location',location)
  }, [location]);

  const getTime = (timeStamp) => {
    let date = new Date(timeStamp * 1000);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let newformat = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    const time = hours + ":" + minutes + " " + newformat;
    return time;
  };
  const onLocationSelection = (data) => {
    console.log('onLocationSelection',data)
    setLocation(data)
  }
  const Box1 = <List location={location} />;
  const Box4 = <Dabba hourlyData={forecastData} />;
  const Box3 = <DayForecast data={dayForCastData} />;
  const Box2 = <Box data={currentWeatherDetails} />;
  

  return (
    <div className="App">
      <Header onLocationSelection={onLocationSelection}/>
      <div className="card-wrapper">
        <Card key={1} width="35%" data={Box1} />
        {currentWeatherDetails?  <Card key={2} width="60%" data={Box2} /> : <Spinner />}
        <Card key={3} width="39%" data={Box3} />
        <Card key={4} width="750px" data={Box4} />
      </div>
      
    </div>
  );
}

export default App;
