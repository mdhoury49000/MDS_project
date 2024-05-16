import React from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import CarouselComponent from '../Carousel/Carousel';
import NavigationBar from '../NavBar/Navbar';
import imgJante from '../../images/jante.png';

function About() {
  return (
    <>
    <NavigationBar/>
    <div className='bg-home'>
      <Row className='row-home'>
        <Col className='col-home'>
        <h1 className='title'>Envie de décorer vos pièces ?</h1>
        <div>
          <button className='btn'>Découvrir le concept</button>
        </div>
        </Col>
      </Row>
    </div>
    <div className='home section-1'>
      <CarouselComponent/>
    </div>
    <div className='home section-2'>
      <Row>
      <Col className='col-4 d-flex flex-column justify-content-center align-items-center'>
        <img className='imgJante' src={imgJante} alt="" />
      </Col>
      <Col className='col-8 d-flex flex-column justify-content-center gap-5'>
        <h2 className='title'>Qui sommes-nous ?</h2>
        <p className='txt'>Chez Aut'up, nous sommes convaincus que la beauté et la durabilité vont de pair. Chaque pièce de voiture que nous restaurons est traitée avec soin et créativité. Nous nous engageons à réutiliser et à préserver l'environnement.
        <br/>
        <br/>
        Notre passion pour ces pièces détachées ne se limite pas à leur transformation, elle vise aussi à réduire le gaspillage et à encourager un mode de vie durable.
        <br/>
        <br/>
        Découvrez dès maintenant notre collection en ligne et laissez-vous séduire par nos créations uniques. 
        <br/>
        <br/>
        Vous trouverez chez nous la pièce parfaite pour embellir votre espace, tout en participant à une cause qui nous tient à cœur.</p>
      </Col>
      </Row>
      
    </div>

    </>
  );
}

export default About;
