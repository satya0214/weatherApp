

function DayForecast(props){
    const dayforecastData = props.data;
    // const dayforecastData = [

    //     {
    //         imgSrc:cloud1,
    //         temperature: '25°C',
    //         day: 'friday,1 Sep'
            
    //     },
    //     {
    //         imgSrc:cloud1,
    //         temperature: '25°C',
    //         day: 'friday,1 Sep'
    //     },
    //     {
    //         imgSrc:clear1,
    //         temperature: '25°C',
    //         day: 'friday,1 Sep'
    //     },
    //     {
    //         imgSrc:drizzle,
    //         temperature: '25°C',
    //         day: 'friday,1 Sep'
    //     },
    //     {
    //         imgSrc:rain,
    //         temperature: '25°C',
    //         day: 'friday,1 Sep'
    //     },

    // ];

    return (
        <div className="DayForcastContainer">
        <h1 className="forecastHeading">5 Days Forecast:</h1>
        <div className='forcastFunctionContainer'>
       { dayforecastData.map((forecast , index) => ( 
        <div key={index} className="DayForcastData" >
             <img className='forecastImg' src={forecast.imgSrc}/>
        <span>{forecast.temperature}</span>
        <span>{forecast.day}</span>

    </div>
        )) }
        </div>
        </div>
    )
}

export default DayForecast;