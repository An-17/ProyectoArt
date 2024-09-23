import Carousel from 'react-bootstrap/Carousel';
import ImgLogo from '../img/ART.png'
import ImgArt from '../img/Art.jpeg'
import imgMaquinas from '../img/Maquinas.jpeg'
import '../Style/Carrusel.css'


function Carrusel() {
  return (
    <Carousel>
      <Carousel.Item interval={500}>
      <img
              src= {ImgArt}
              width="1349"
              height="600"
              className="Img1"
            />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <img
              src= {ImgLogo}

              width="1349"
              height="600"
              className="Img2"
            />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <img
              src= {imgMaquinas}
              width="1349"
              height="600"
              className="Img3"
            />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrusel;