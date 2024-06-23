import React from 'react';
import NavigationBar from '../NavBar/Navbar';
import { Row, Col } from 'reactstrap';
import Footer from '../Footer/Footer';
import bgTarifs from '../../images/bg-tarifs.png';
import packStandard from '../../images/pack-S.png';
import packMedium from '../../images/pack-M.png';
import packPremium from '../../images/pack-P.png';
import panierPack from '../../images/panier-pack.png';




export default function Tarifs() {
  return (
    <>
    <NavigationBar/>
    <div className='bg-tarifs'>
      <Row>
        <Col>
        <h1 className='title'>Nos tarifs</h1>
        </Col>
      </Row>
    </div>
    <div className="tarifs section-1">
        <h2>Tarifs artistes</h2>
        <p>Chez Aut'up, nous croyons au pouvoir de la créativité et souhaitons aider les artistes à se faire connaître. Nos tarifs spéciaux pour artistes sont conçus pour mettre en avant vos créations uniques et augmenter votre notoriété. En bénéficiant de nos prix préférentiels, vous pouvez exposer vos œuvres sur notre plateforme, atteindre un public plus large et développer votre réputation dans le monde de l'art et de la décoration.</p>
    </div>
    <div className="tarifs section-2">
        <h2>Nos pack</h2>
        <Row className='pack-section'>
        <div className='pack pack-S'>
          <Row>
            <h3>Pack Standard</h3>
          </Row>
            
            <Row>
                <p>Notre Pack Standard offre une visibilité de base pour vos créations. Idéal pour les artistes émergents, ce pack inclut la mise en avant de cinq pièces sur notre plateforme pendant un mois.</p>
            </Row>
                <a className='btn' href=""><img src={panierPack} alt="" /></a>
        </div>
        </Row>
        <Row  className='space-section'></Row>
        <Row className='pack-section'>
        <div className='pack pack-M'>
          <Row>
            <h3>Pack Médium</h3>
          </Row>
            
            <Row className='pack-conternt'>
                <p>Le Pack Médium est parfait pour les artistes souhaitant augmenter leur visibilité. Il inclut la mise en avant de 15 pièces pendant trois mois, des promotions régulières sur nos réseaux sociaux.</p>
            </Row>
                <a className='btn' href=""><img src={panierPack} alt="" /></a>
        </div>
        </Row>
        <Row className='space-section'></Row>
        <Row className='pack-section'>
        <div className='pack pack-P'>
          <Row>
            <h3>Pack Premium</h3>
          </Row>
            
            <Row className='pack-content'>
                <p>Pour une visibilité maximale, choisissez notre Pack Professionnel. Il inclut la mise en avant illimitée de vos œuvres pendant six mois, des promotions sur nos réseaux sociaux, une place dans notre newsletter, et une page dédiée à votre profil d'artiste sur notre site.</p>
            </Row>
                <a className='btn' href=""><img src={panierPack} alt="" /></a>
        </div>
        </Row>
        
    </div>
    <Footer/>
    </>
  )
}
