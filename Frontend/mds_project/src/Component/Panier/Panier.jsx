// src/pages/CartPage.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../Redux/actions';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';

function Panier() {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const handleRemove = (productId) => {
    dispatch(removeFromCart(productId));
  };

  return (
    <Container>
      <h2>Mon Panier</h2>
      <ListGroup>
        {cartItems.map(({ product, quantity }) => (
          <ListGroupItem key={product.id}>
            {product.name} - {quantity} x {product.price}€
            <Button color="danger" size="sm" onClick={() => handleRemove(product.id)}>Supprimer</Button>
          </ListGroupItem>
        ))}
      </ListGroup>
    </Container>
  );
}

export default Panier;
