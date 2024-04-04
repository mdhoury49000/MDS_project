import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../../Redux/actions';
import { ListGroup, Button, Card, CardBody, CardHeader, CardFooter, Row, Col, Container } from 'reactstrap';
import NavigationBar from '../NavBar/Navbar';
function Panier() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const totalPrice = cartItems.reduce((acc, item) => acc + (item.quantity * item.product.price), 0).toFixed(2);

  return (
    <>
    <NavigationBar/>
    <Container>
      <h2 style={{ textAlign: 'center', margin: '20px 0' }}>Mon Panier</h2>
      <Row>
        {cartItems.length > 0 ? cartItems.map(({ product, quantity }, index) => (
          <Col md="6" lg="4" xl="3" key={index} className="mb-4">
            <Card>
              <CardHeader>{product.name}</CardHeader>
              <CardBody>
                <p>Description: {product.description}</p>
                <p>Type: {product.vehicleType} | Nature: {product.partNature}</p>
                <p>Quantité: {quantity}</p>
                <p>Prix unitaire: {product.price} €</p>
                <p>Prix total: {(quantity * product.price).toFixed(2)} €</p>
              </CardBody>
              <CardFooter className="text-center">
                <Button color="danger" onClick={() => handleRemoveFromCart(product.id)}>Supprimer</Button>
              </CardFooter>
            </Card>
          </Col>
        )) : <Col><p>Votre panier est vide.</p></Col>}
      </Row>
      {cartItems.length > 0 && (
        <div className="text-right mt-3">
          <h4>Total: {totalPrice} €</h4>
          <Button color="primary">Passer à la caisse</Button>
        </div>
      )}
    </Container>
    </>
  );
}

export default Panier;
