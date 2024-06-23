import React from 'react';
import NavigationBar from '../NavBar/Navbar';
import { Row, Col } from 'reactstrap';
import Footer from '../Footer/Footer';
import inspi1 from '../../images/inspi-1.png';
import inspi2 from '../../images/inspi-2.png';
import inspi3 from '../../images/inspi-3.png';
import inspi4 from '../../images/inspi-4.png';
import inspi5 from '../../images/inspi-5.png';
import inspi6 from '../../images/inspi-6.png';
import inspi7 from '../../images/inspi-7.png';
import inspi8 from '../../images/inspi-8.png';
import inspi9 from '../../images/inspi-9.png';
import inspi10 from '../../images/inspi-10.png';
import inspi11 from '../../images/inspi-11.png';
import inspi12 from '../../images/inspi-12.png';



export default function Inspirations() {
  return (
    <>
    <NavigationBar/>
    <div className='bg-inspirations'>
      <Row>
        <Col>
        <h1 className='title'>Besoin d'inspirations ?</h1>
        </Col>
      </Row>
    </div>
    <div className='section-inspiration'>
        <Row>
            <h3>C'est tablement bien !</h3>
            <Col> <img src={inspi1} alt="" /></Col>
            <Col> <img src={inspi2} alt="" /></Col>
            <Col> <img src={inspi3} alt="" /></Col>
        </Row>
        <Row>
        <h3>Illuminez ecolo !</h3>
            <Col> <img src={inspi4} alt="" /></Col>
            <Col> <img src={inspi5} alt="" /></Col>
            <Col> <img src={inspi6} alt="" /></Col>
        </Row>
        <Row>
        <h3>Tic-Tac Tic-Tac...</h3>
            <Col> <img src={inspi7} alt="" /></Col>
            <Col> <img src={inspi8} alt="" /></Col>
            <Col> <img src={inspi9} alt="" /></Col>
        </Row>
        <Row>
        <h3>D'autres inspirations</h3>
            <Col> <img src={inspi10} alt="" /></Col>
            <Col> <img src={inspi11} alt="" /></Col>
            <Col> <img src={inspi12} alt="" /></Col>
        </Row>
    </div>
    <Footer/>
    </>
  )
}
