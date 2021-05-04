const Card = (props)=>{
    return(
        <div  className="card">
            <img className="img--cardI" src={props.urlImage} alt={props.urlImageAlt} srcset=""/>
            <h3 className="title--film">{props.titlefilm}</h3>
        </div>
    )
}
export default Card;