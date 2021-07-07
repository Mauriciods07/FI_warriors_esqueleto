import React from 'react'

const Carousel = () =>{
    return(
        <div>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="./Carrousel-Img/01.jpg" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                         <img src="./Carrousel-Img/02.jpg" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                         <img src="./Carrousel-Img/03.jpg" className="d-block w-100" alt="..."/>
                    </div>
                </div>
                </div>

        </div>
    )
}

export default Carousel