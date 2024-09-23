import React from 'react';
import '../Style/HomeComponents.css';
import 'normalize.css'
import ImgArt from '../img/imgArt.jpeg'


function HomeComponents() {
  return (
    <div > 
 <br /> <br /> <br /><br />
    <div className='Info'>
    <img  className='imagen2'
              src={ImgArt}
              width="400"
              height="500"
              alt="Imagen Art"
            />

 <div className='Texto'>
  <br /> <br /> 
<h1 className='Titulo' >¿Que es Art?</h1>

<p className='Parrafo' >Art Barber Shop es una barbería de origen local, establecida en Nosara barrio Arenales por Jeank Ruiz. Nos especializamos en una amplia gama de cortes de cabello, desde estilos modernos y clásicos hasta opciones innovadoras y personalizadas. Nuestro enfoque combina arte y elegancia, ofreciendo una experiencia distintiva y de alta calidad, todo bajo una filosofía de excelencia y dedicación. </p>
</div>
</div>


<br /><br /> <br /> <br /> <br /> <br /><br />


 <div className='DivMision'>
  <br />
  <h1 className='Mision'>Misión</h1>
   <p className='TextoMision' >En Art Barber Shop nuestra misión es ofrecer un servicio de excelencia, donde la tradición y la innovación se encuentran. Nos dedicamos a crear experiencias personalizadas, cuidando de cada cliente con atención al detalle y profesionalismo. Nos comprometemos a elevar la autoestima de quienes nos visitan, brindando cortes de cabello, afeitados y cuidados masculinos que reflejan estilo, confianza y comodidad. Nuestro objetivo es ser un espacio acogedor donde cada persona se sienta valorada y salga renovada, llevando consigo una imagen que resalte su mejor versión. </p>
   <br /> <br /> <br />
 </div>
 <br /><br /><br /> <br /> <br /> <br /> <br /> <br />

<div className='DivVisión'>
<br /> 
  <h1 className='Vision' >Visión</h1>
  <p className='TextoVision' >Nuestra visión en Art Barber Shop es convertirnos en un referente de estilo y cuidado personal, siendo reconocidos por nuestra dedicación a la calidad y atención al cliente. Aspiramos a ser un lugar donde la tradición de la barbería se combina con las ultimas y técnicas modernas, creando una experiencia única que inspire confianza y lealtad en cada cliente. Queremos expandir nuestra presencia, destacándonos por nuestra profesionalidad y excelencia, mientras fomentamos  una comunidad donde el cuidado personal es sinónimo de bienestar, autenticidad y expresión individual  </p>
  <br />
</div>

<br /><br /> <br /> <br /> <br /><br /> <br /> <br /> 
    </div>


    
 


  )
}

export default HomeComponents ;