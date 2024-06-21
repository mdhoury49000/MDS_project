import React from 'react'
import { Row,Col } from 'reactstrap';
import starsRating from '../../images/stars-rating.png';
import pdpArtiste from '../../images/pdp-artiste.png';


export default function Temoignages() {
  return (
    <>
    <div className="temoignage bloc">
        <Row className='row-1'>
            <img src={pdpArtiste} alt="" />
            <Col>
                <Row>Martin Matin</Row>
                <Row>Artiste</Row>
            </Col>
        </Row>
        <Row className='row-2'>
            <img src={starsRating} alt="" />
        </Row>
        <Row className='row-3'>
            <p>Aut'up est une véritable mine d'or pour mes créations artistiques. Le choix de pièces détachées est vaste et de qualité exceptionnelle. Leur service client est toujours prêt à m'aider, ce qui facilite grandement mon processus créatif. Grâce à Aut'up, mes œuvres rencontrent un grand succès. Je recommande vivement !</p>
        </Row>
    </div>
    </>
  )
}
