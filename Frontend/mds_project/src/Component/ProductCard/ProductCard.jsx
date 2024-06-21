import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Redux/actions'; // Assurez-vous que ce chemin est correct
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Button,
  Badge,
  Row,
  Col,
  Container,
} from 'reactstrap';

function ProductCard({ product }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product, 1)); // Ici, nous ajoutons toujours une quantité de 1, ajustez selon besoin
  };

  return (
    <Card className="piece-card">
      {/* <CardImg width="100%" src={product.image} alt={product.name} style={{objectFit: 'cover' }} /> */}
      <img src={product.image} alt="" style={{ width: '100%', height: 'auto', objectFit: 'none' }} />
      <CardBody>
        <Row className='row-1'>
          <Col className='col-title'><CardTitle tag="h5">{product.name}</CardTitle></Col>
          <Col><p className='price'>{product.price} €</p></Col>
        </Row>
        <Row className='row-2'>
          <Col>
            <Row className='description'><p className='content'><strong>Marque : </strong>{product.marque}</p></Row>
            <Row className='description'><p className='content'><strong>Modèle : </strong>{product.modele}</p></Row>
          </Col>
          <Col>
            <Row className='description'><p className='content'><strong>Vendeur : </strong>{product.vendeur}</p></Row>
            <Row className='description'><p className='content'><strong>Lieu : </strong>{product.lieu}</p></Row>
          </Col> 
        </Row>
        <Row className='row-3'>
        <Button onClick={handleAddToCart} size="sm">Ajouter au panier</Button>
        </Row>
      </CardBody>
    </Card>

  );
}

export default ProductCard;
