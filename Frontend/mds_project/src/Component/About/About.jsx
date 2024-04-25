import React from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import NavigationBar from '../NavBar/Navbar';
function About() {
  return (
    <>
    <NavigationBar/>
    <Container>
      <Row className="my-5">
        <Col>
          <h1>À propos de Nous</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta.</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Nos Abonnements</h2>
        </Col>
      </Row>
      <Row>
        {/* Carte Abonnement 1 */}
        <Col md="4">
          <Card>
            <CardBody>
              <CardTitle tag="h5">Abonnement Basique</CardTitle>
              <CardText>Avec l'abonnement Basique, bénéficiez d'un accès limité à nos ressources.</CardText>
              <Button>Choisir</Button>
            </CardBody>
          </Card>
        </Col>
        {/* Carte Abonnement 2 */}
        <Col md="4">
          <Card>
            <CardBody>
              <CardTitle tag="h5">Abonnement Premium</CardTitle>
              <CardText>Le plan Premium offre un accès illimité à toutes nos ressources.</CardText>
              <Button>Choisir</Button>
            </CardBody>
          </Card>
        </Col>
        {/* Carte Abonnement 3 */}
        <Col md="4">
          <Card>
            <CardBody>
              <CardTitle tag="h5">Abonnement VIP</CardTitle>
              <CardText>Le plan VIP ajoute des services exclusifs en plus de tous les avantages du Premium.</CardText>
              <Button>Choisir</Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default About;
