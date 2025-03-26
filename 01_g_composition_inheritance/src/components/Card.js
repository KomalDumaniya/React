const Videocard = ({ videoCard }) => {
    return (
        <div className="row">
            <div className="column">
                <div className="card">
                    <video controls style={{ width: "300px" }}>
                        <source src={videoCard.video} type="video/mp4" />
                        video tag.
                    </video>
                    <div className="container">
                        <h4><b>{videoCard.title}</b></h4>
                        <p>{videoCard.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Textcard = ({ textCard }) => {
    return (
        <div className="row">
            <div className="column"></div>
            <div className="card">
                <div className="container" style={{ width: "300px" }}>
                    <h4><b>{textCard.title}</b></h4>
                    <p>{textCard.description}</p>
                </div>
            </div>
        </div>
    )
}

const Imagecard = ({ imageCard }) => {
    return (
        <div className="row">
            <div className="column"></div>
            <div className="card">
                <img src={imageCard.image} alt="myImage" style={{ width: "300px" }} />
                <div class="container">
                    <h4><b>{imageCard.title}</b></h4>
                    <p>{imageCard.description}</p>
                </div>
            </div>
        </div>
    )
}


export { Imagecard, Videocard, Textcard }
