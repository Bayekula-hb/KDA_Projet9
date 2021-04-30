const Card = (props)=>{
    return(
        <div className={props.className}>
            <img className={props.classNameImg} src={props.Image} alt={props.Alt} srcset=""/>
            <h3 className={props.classNameH3}>{props.contenuH3}</h3>
        </div>
    )
}
export default Card;