const Movie = (props) => {
    return (
        <div className="movie">
            <img src={props.img} alt="" />
            <p>Title: {props.title}</p>
            <p>Year: {props.year}</p>
        </div>
    )
}
export default Movie