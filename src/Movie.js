export default function Movie (props){
    return (
    <div className="movie-item-style-2">
    <img src={props.img} alt=""/>
    <div className="mv-item-infor">
        <h6><a href="moviesingle.html"> {props.title} </a></h6>
        
        <p className="rate"><i className="ion-android-star"></i><span>{props.rating}</span> /10</p>
        <p className="describe">{props.descripcion}</p>
        <p className="run-time"> Run Time: {props.runTime}    .     <span>MMPA: PG-13 </span>    .     <span>Release: {props.date}</span></p>
        <p>Director: <a href="#">{props.director}</a></p>
        <p>Stars: {props.stars}</p>
    </div>
</div>
    )
}