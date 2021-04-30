const Card = (props)=>{
    return(
        <div className={props.className}>
            <img className="img--card" src={props.Image} alt={props.Alt} srcset=""/>
            <h3 className={props.classNameH3}>{props.contenuH3}</h3>
        </div>
    )
}
export default Card;