import React from 'react';
import NavigationBar from '../NavBar/Navbar';
import { Row, Col } from 'reactstrap';
import Footer from '../Footer/Footer';

export default function Artistes() {
  return (
    <>
    <NavigationBar/>
    <div className='bg-artistes'>
      <Row className='row-artistes'>
        <Col className='col-artistes'>
        <h1 className='title'>Envie de découvrir des artistes ?</h1>
        <div>
          <a href="" className='btn'>Découvrir le concept</a>
        </div>
        </Col>
      </Row>
    </div>
    <Footer/>
    </>
  )
}
