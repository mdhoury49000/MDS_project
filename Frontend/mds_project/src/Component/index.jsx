// src/pages/HomePage.js
import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard/ProductCard';
import { Container, Row, Col,Button } from 'reactstrap';
import NavigationBar from './NavBar/Navbar';
const PRODUCTS_PER_PAGE = 9; // 3 par ligne * 4 lignes

function HomePage() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const mockProducts = [
      { id: 1, name: 'Produit 1', price: '10.99', image: 'url_de_l_image', description: 'Description du produit 1.', state: 'Nouveau', vehicleType: 'Voiture', partNature: 'Moteur' },
      { id: 2, name: 'Produit 2', price: '12.99', image: 'url_de_l_image', description: 'Description du produit 2.', state: 'Occasion', vehicleType: 'Moto', partNature: 'Roue' },
      { id: 3, name: 'Produit 3', price: '15.49', image: 'url_de_l_image', description: 'Description du produit 3.', state: 'Nouveau', vehicleType: 'Camion', partNature: 'Frein' },
      { id: 4, name: 'Produit 4', price: '20.00', image: 'url_de_l_image', description: 'Description du produit 4.', state: 'Reconditionné', vehicleType: 'Vélo', partNature: 'Selle' },
      { id: 5, name: 'Produit 5', price: '25.99', image: 'url_de_l_image', description: 'Description du produit 5.', state: 'Nouveau', vehicleType: 'Voiture', partNature: 'Phare' },
      { id: 6, name: 'Produit 6', price: '30.99', image: 'url_de_l_image', description: 'Description du produit 6.', state: 'Occasion', vehicleType: 'Moto', partNature: 'Guidon' },
      { id: 7, name: 'Produit 7', price: '35.50', image: 'url_de_l_image', description: 'Description du produit 7.', state: 'Nouveau', vehicleType: 'Camion', partNature: 'Pneu' },
      { id: 8, name: 'Produit 8', price: '40.99', image: 'url_de_l_image', description: 'Description du produit 8.', state: 'Reconditionné', vehicleType: 'Vélo', partNature: 'Chaîne' },
      { id: 9, name: 'Produit 9', price: '45.99', image: 'url_de_l_image', description: 'Description du produit 9.', state: 'Nouveau', vehicleType: 'Voiture', partNature: 'Batterie' },
      { id: 10, name: 'Produit 10', price: '50.00', image: 'url_de_l_image', description: 'Description du produit 10.', state: 'Occasion', vehicleType: 'Moto', partNature: 'Moteur' },
      // Continuez à ajouter des produits si nécessaire
    ];
    
    // Ici, remplacez par un appel API ou utilisez des données mockées
    setProducts(mockProducts);
  }, []);

  // Calculer les produits à afficher sur la page courante
  const indexOfLastProduct = currentPage * PRODUCTS_PER_PAGE;
  const indexOfFirstProduct = indexOfLastProduct - PRODUCTS_PER_PAGE;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Changer de page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
    <NavigationBar />
    <Container>
      <Row>
        {currentProducts.map(product => (
          <Col md="4" key={product.id} className="mb-4">
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
      <Row>
        <Col className="d-flex justify-content-between">
          {currentPage > 1 && (
            <Button onClick={() => paginate(currentPage - 1)}>Précédent</Button>
          )}
          {indexOfLastProduct < products.length && (
            <Button onClick={() => paginate(currentPage + 1)}>Suivant</Button>
          )}
        </Col>
      </Row>
    </Container>
  

    </>
  );
}

export default HomePage;