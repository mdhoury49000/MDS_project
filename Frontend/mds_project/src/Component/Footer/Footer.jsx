import React from 'react';
import { Row,Col } from 'reactstrap';
import logoFb from '../../images/facebook.png';
import logoInsta from '../../images/instagram.png';
import logoLinkedin from '../../images/linkedin.png';

export default function Footer() {
  return (
    <div className='footer'>
     <Row>
        <Col className='col1'>
            <ul>
                <li>CGU</li>
                <li>Politique de confidentialité</li>
                <li>Copyright</li>
            </ul>
        </Col>
        <Col className='col2'>
            <ul>
                <li><img src={logoFb} alt="" /></li>
                <li><img src={logoInsta}  alt="" /></li>
                <li><img src={logoLinkedin}  alt="" /></li>
            </ul>
        </Col>
        <Col className='col3'>
            <ul>
                <li>Nous contacter</li>
                <li>Recevoir la Newsletter</li>
            </ul>
        </Col>
     </Row>

    </div>
  )
}
