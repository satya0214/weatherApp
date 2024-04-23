// function changeTimeFormat(timeStamp){ 
    function changeTimeFormat(timeStamp){
        let date;
        if(timeStamp) {
             date = new Date(timeStamp * 1000);
        } else {
             date = new Date()
        }
   
    //  let date = new Date()
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let newformat = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    const time = hours +':'+ minutes +' '+ newformat;
    // return hours +':'+ minutes +' '+ newformat;
    return time;
}

export default changeTimeFormat;