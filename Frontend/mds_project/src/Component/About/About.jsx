import React from 'react'
import NavigationBar from '../NavBar/Navbar';
import { Row, Col } from 'reactstrap';
import LogoNoir from '../../images/Logo-Final-Blanc-SF.png';
import Temoignages from '../Temoignages/Temoignages';
import Footer from '../Footer/Footer';



export default function About() {
  return (
    <>
    <NavigationBar/>
    <div className='bg-about'>
      <Row>
        <Col>
        <h1 className='title'>Qui sommes nous ?</h1>
        </Col>
      </Row>
    </div>
    <div className="about section-1">
        <Row>
            <img src={LogoNoir} alt="" />
        </Row>
        <Row>
            <p>Chez Aut'up, nous croyons en l'union harmonieuse entre la beauté et la durabilité. Pour nous, chaque pièce de voiture recueillie est une opportunité de révéler son potentiel caché, de lui insuffler une nouvelle vie empreinte de créativité. Nous ne nous contentons pas de restaurer ces pièces, nous les récupérons avec soin, les revitalisons, et les présentons au monde sous un nouveau jour, prêtes à être réutilisées.</p>
        </Row>
    </div>
    <div className="about section-2">
        <Row>
            <p>Notre engagement environnemental va bien au-delà de la simple restauration. En offrant une seconde chance à ces pièces automobiles, nous évitons qu'elles ne finissent dans des décharges, préservant ainsi les ressources de notre planète et promouvant un mode de vie durable.

Découvrez notre vaste collection en ligne, où chaque pièce a une histoire unique. Nos pièces allient esthétique et conscience écologique. Que vous recherchiez une pièce rare pour votre collection personnelle ou que vous souhaitiez simplement ajouter une touche d'originalité à votre espace, Aut'up a la pièce parfaite pour vous.</p>
        </Row>
    </div>
    <div className="about section-3">
        <h2>Témoignages et avis</h2>
        <Row className='row-bloc'>
            <Temoignages/>
            <Temoignages/>
        </Row>
    </div>
    <Footer/>
    </>
  )
}
