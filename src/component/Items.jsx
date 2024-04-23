// function changeTimeFormat(timeStamp){ 

//     // let date = new Date(timeStamp * 1000);
//     let date = new Date()
//     let hours = date.getHours();
//     let minutes = date.getMinutes();
//     let newformat = hours >= 12 ? 'PM' : 'AM';
//     hours = hours % 12;
//     hours = hours ? hours : 12;
//     minutes = minutes < 10 ? '0' + minutes : minutes;
//     const time = hours +':'+ minutes +' '+ newformat;
//     // return hours +':'+ minutes +' '+ newformat;
//     return time;
// }
import changeTimeFormat from "../services/CommonService";



const List = (props) => {
  console.log('oeqweq',props)
    //     let date = new Date()
    //     let hours = date.getHours();
    //     let minutes = date.getMinutes();
    //     let newformat = hours >= 12 ? 'PM' : 'AM';
    //     hours = hours % 12;
    //     hours = hours ? hours : 12;
    //     minutes = minutes < 10 ? '0' + minutes : minutes;
    //    const time = hours +':'+ minutes +' '+ newformat;
      
    return (
        <div className="date">
                   <h3 className="Dateheading">{props.location?.Name}</h3>
                   <div className="dayTime">
                    <h1 className="Datetime">{changeTimeFormat()}</h1>
                    <p className="Dateday">{new Date().toDateString()}</p>
                   </div>
                </div>
    )
}

export default List;