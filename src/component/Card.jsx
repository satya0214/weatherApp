
const Card = (props) => {
    return (
        <div 
        className='card' 
        style={{
            width: props.width,
            // height: props.height
        }} 
        // data="data"
        >
            {props.data}
             
        </div>
    )
}
export default Card;