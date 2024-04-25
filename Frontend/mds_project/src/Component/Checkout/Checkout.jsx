import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import NavigationBar from '../NavBar/Navbar';
function CheckoutPage() {
  const cartItems = useSelector(state => state.cart.items);
  const totalPrice = cartItems.reduce((acc, item) => acc + item.quantity * item.product.price, 0).toFixed(2);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logique de soumission du paiement
    console.log('Paiement effectué');
  };

  return (
    <>
    <NavigationBar/>
    <Container>
      <h2>Page de Paiement</h2>
      <Row>
        <Col md={6}>
          <h4>Récapitulatif de Commande</h4>
          {cartItems.map((item, index) => (
            <div key={index}>
              {item.product.name} - {item.quantity} x {item.product.price}€
            </div>
          ))}
          <h5>Total: {totalPrice}€</h5>
        </Col>
        <Col md={6}>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="cardNumber">Numéro de Carte</Label>
              <Input type="text" name="cardNumber" id="cardNumber" placeholder="Numéro de carte" />
            </FormGroup>
            <FormGroup>
              <Label for="expirationDate">Date d'Expiration</Label>
              <Input type="text" name="expirationDate" id="expirationDate" placeholder="MM/AA" />
            </FormGroup>
            <FormGroup>
              <Label for="cvv">CVV</Label>
              <Input type="text" name="cvv" id="cvv" placeholder="CVV" />
            </FormGroup>
            <Button type="submit" color="primary">Confirmer le paiement</Button>
          </Form>
        </Col>
      </Row>
    </Container></>
  );
}

export default CheckoutPage;
