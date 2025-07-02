const Hero = () => {
    return (
        <div id="carouselExampleCaptions" className="carousel slide">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://www.shutterstock.com/image-vector/wireless-ear-headphones-ad-3d-600nw-2128379057.jpg" className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Primera Imagen</h5>
                        <p>esta es la descripción de la primera imagen</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://academia.nubimetrics.com/hubfs/productos-tecnologicos-2.jpg" className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Segunda Imagen</h5>
                        <p>Esta es la descripcion de la segunda imagen</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://media.cnn.com/api/v1/images/stellar/prod/cnne-f5a0b291-140108031947-neptune-pine-smart-watch-story-top.jpg?c=16x9&q=h_833,w_1480,c_fill" className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Tercera imagen</h5>
                        <p>Esta es la descripcion de la tercera imagen</p>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}
export default Hero;