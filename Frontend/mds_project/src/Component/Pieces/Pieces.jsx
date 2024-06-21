// src/pages/HomePage.js
import React, { useState, useEffect } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { Container, Row, Col,Button } from 'reactstrap';
import NavigationBar from '../NavBar/Navbar';
import pneuImage from '../../images/pneu.png';
import Footer from '../Footer/Footer';


const PRODUCTS_PER_PAGE = 9; // 3 par ligne * 4 lignes

function HomePage() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const mockProducts = [
      { id: 1, name: 'Pneu', price: '30', image:pneuImage, marque: 'Ferrari', vendeur:'BPM Group', modele:'812 GTS', lieu:'Nantes' },
      { id: 1, name: 'Pneu', price: '30', image:pneuImage, marque: 'Ferrari', vendeur:'BPM Group', modele:'812 GTS', lieu:'Nantes' },
      { id: 1, name: 'Pneu', price: '30', image:pneuImage, marque: 'Ferrari', vendeur:'BPM Group', modele:'812 GTS', lieu:'Nantes' },
      { id: 1, name: 'Pneu', price: '30', image:pneuImage, marque: 'Ferrari', vendeur:'BPM Group', modele:'812 GTS', lieu:'Nantes' },
      { id: 1, name: 'Pneu', price: '30', image:pneuImage, marque: 'Ferrari', vendeur:'BPM Group', modele:'812 GTS', lieu:'Nantes' },
      { id: 1, name: 'Pneu', price: '30', image:pneuImage, marque: 'Ferrari', vendeur:'BPM Group', modele:'812 GTS', lieu:'Nantes' },
      { id: 1, name: 'Pneu', price: '30', image:pneuImage, marque: 'Ferrari', vendeur:'BPM Group', modele:'812 GTS', lieu:'Nantes' },
      { id: 1, name: 'Pneu', price: '30', image:pneuImage, marque: 'Ferrari', vendeur:'BPM Group', modele:'812 GTS', lieu:'Nantes' },
    
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
    <div className='piece-page space'></div>
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
    <Footer/>
    </>
  );
}

export default HomePage;