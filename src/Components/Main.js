import React from 'react'

function Main() {
    return (
        <div>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://www.teahub.io/photos/full/88-884601_web-design-wallpaper-hd.jpg" className="d-block w-100" alt="slider-img-of-computer"/>
    </div>
    <div className="carousel-item">
      <img src="https://swall.teahub.io/photos/small/176-1764166_will-your-new-busine-women-in-technology-banner.jpg" className="d-block w-100" alt="slider-2"/>
    </div>
    <div className="carousel-item">
      <img src="https://media.istockphoto.com/vectors/vector-background-technology-in-the-concept-of-digital-vector-id1148006138?k=20&m=1148006138&s=612x612&w=0&h=LlIoJ1pbhG3ckbh48C7-z1JmTm8Jf8CNAafx42kuuZs=" className="d-block w-100" alt="slider-3"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
<h1>Hello</h1>
        </div>
    )
}

export default Main
