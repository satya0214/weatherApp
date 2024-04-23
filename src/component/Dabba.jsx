import cloud1 from '../assets/clouds 1.png'
import clear1 from '../assets/clear 1.png'
import navigation1 from '../assets/navigation 1.png'
import navigation2 from '../assets/navigation 2.png'
import navigation3 from '../assets/navigation3.png'
function Dabba(props) {
  const forecastData = props.hourlyData;
  // const forecastData = [
  //   {
  //     time: '9 AM',
  //     temperature: '25°C',
  //     distance: '10 km',
  //     imageCloud:clear1,
  //     imgNavigation:navigation1
  //   },
  //   {
  //     time: '10 AM',
  //     temperature: '27°C',
  //     distance: '12 km',
  //     imageCloud:clear1,
  //     imgNavigation:navigation2
  //   },
  //   {
  //     time: '11 AM',
  //     temperature: '29°C',
  //     distance: '15 km',
  //     imageCloud:cloud1,
  //     imgNavigation:navigation1
  //   },
  //   {
  //     time: '12 PM',
  //     temperature: '31°C',
  //     distance: '18 km',
  //     imageCloud:cloud1,
  //     imgNavigation:navigation3
  //   },
  //   {
  //     time: '12 PM',
  //     temperature: '31°C',
  //     distance: '18 km',
  //     imageCloud:clear1,
  //     imgNavigation:navigation1
  //   }

  // ]; 

  return (
    <div className="dabbaContainer">
      <h1 className="dabba">Hourly Forecast:</h1>
      <div className="forecastHourContent">
      {forecastData.map((forecast, index) => (
        <div key={index} className="forecastHour">
          <span>{forecast.time}</span>
          <img className="buttonIcon" src={forecast.imageCloud}/>
          <span>{forecast.temperature}</span>
          <img className="buttonIcon" src={forecast. imgNavigation}/>
          <span>{forecast.distance}</span>
        </div>
      ))}
      </div>
    </div>
  );
}

export default Dabba;