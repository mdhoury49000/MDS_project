import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeItem } from '../../Redux/actions';
import { ListGroup, Button, Card, CardBody, CardHeader, CardFooter, Row, Col, Container } from 'reactstrap';
import NavigationBar from '../NavBar/Navbar';
import { useNavigate } from 'react-router-dom';
function Panier() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const navigate = useNavigate();
  // Ajout d'un article au panier
  const handleAddToCart = (product) => {
    dispatch(addToCart(product, 1));
  };
  
// Diminution de la quantité d'un article dans le panier
const handleDecreaseQuantity = (productId) => {
  // Pas besoin de trouver le produit entier, juste passer l'ID directement
  dispatch(removeItem(productId, 1));
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
                  <Button color="success" onClick={() => handleAddToCart(product)}>+</Button>{' '}
                  <Button color="warning" onClick={() => handleDecreaseQuantity(product.id)}>-</Button>{' '}
                </CardFooter>
              </Card>
            </Col>
          )) : <Col><p>Votre panier est vide.</p></Col>}
        </Row>
        {cartItems.length > 0 && (
          <div className="text-right mt-3">
            <h4>Total: {totalPrice} €</h4>
            <Button color="primary" onClick={() => navigate('/panier/paiement')}>Passer à la caisse</Button>
          </div>
        )}
      </Container>
    </>
  );
}

export default Panier;
