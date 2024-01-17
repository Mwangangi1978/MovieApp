const cardGrid =(props)=>{
    return(
        <div className="container">
            <div>
                <div className="card">
                    <div class="wrapper">
                        <img src={props.poster !== "N/A" ? props.poster : "https://via.placeholder.com/400"} class="cover-image" />
                    </div>
                    <p  class="title">{props.title}</p> 
                    {props.type && <p  class="character"> {props.type}</p> }
                </div>
            </div>
        </div>
    )
}

export default cardGrid;