// src/components/ProductCard.js
import React from 'react';
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Button,
  Badge
} from 'reactstrap';

function ProductCard({ product, onAddToCart }) {
  return (
    <Card className="mb-4 shadow-sm">
      <CardImg top width="100%" src={product.image} alt={product.name} style={{ maxHeight: '200px', objectFit: 'cover' }} />
      <CardBody>
        <CardTitle tag="h5">{product.name}</CardTitle>
        <CardText>{product.description}</CardText>
        <CardText>
          <small className="text-muted">Type: {product.vehicleType}</small><br />
          <small className="text-muted">Nature: {product.partNature}</small>
        </CardText>
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <Badge color="secondary">{product.state}</Badge>
          </div>
          <Button onClick={() => onAddToCart(product)} size="sm" color="primary">Ajouter au panier</Button>
        </div>
        <div className="mt-3">
          <h6>Prix: {product.price} €</h6>
        </div>
      </CardBody>
    </Card>
  );
}

export default ProductCard;
