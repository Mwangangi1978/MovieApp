const cardGrid =(props)=>{
    return(
        <>
            <div className="card">
                <div className="wrapper">
                    <img src={props.poster !== "N/A" ? props.poster : "https://via.placeholder.com/400"} class="cover-image" alt="Movie Title"/>
                </div>
                <p  className="title">{props.title}</p> 
                {props.type && <p  className="character"> {props.type}</p> }
                {props.year && <p  className="year"> {props.year}</p> }
            </div>    
        </>
    )
}

export default cardGrid;