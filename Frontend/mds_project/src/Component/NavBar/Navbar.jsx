import React, { useState } from 'react';
import { Collapse, Navbar,Badge, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText,Row,Col} from 'reactstrap';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import logo from '../../../src/images/logo-autup.png';
import userIcon from '../../../src/images/user-icon.png';
import panier from '../../../src/images/panier.png';

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // État simulant la connexion de l'utilisateur
  const [userName, setUserName] = useState('Nom Utilisateur'); // Nom de l'utilisateur

  const toggleNavbar = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const toggleLogin = () => setIsLoggedIn(!isLoggedIn); // Simuler la connexion/déconnexion
  const cartItemsCount = useSelector(state => state.cart.items.reduce((total, item) => total + item.quantity, 0));

  return (
    
    // <Navbar color="light" light expand="md">
    //   <NavbarBrand href="/">
    //   <img alt="logo" src={logo} style={{width: 200}}/>
    //   </NavbarBrand>
    //   <NavbarToggler onClick={toggleNavbar} />
    //   <Collapse isOpen={isOpen} navbar>
    //     <Nav className="mx-auto" navbar>
    //       <NavItem>
    //         <NavLink tag={Link} to="/">Accueil</NavLink>
    //       </NavItem>
    //       <NavItem>
    //         <NavLink tag={Link} to="/Pieces">Pieces</NavLink>
    //       </NavItem>
    //       <NavItem>
    //       <NavLink tag={Link} to="/Panier">Panier <Badge color="secondary">{cartItemsCount}</Badge></NavLink>
    //       </NavItem>
    //       <NavItem>
    //         <NavLink tag={Link} to="/Blog">Blog</NavLink>
    //       </NavItem>
    //       <NavItem>
    //         <NavLink tag={Link} to="/Tarifs">Tarifs</NavLink>
    //       </NavItem>
    //     </Nav>
    //     <Nav className="ml-auto" navbar>
    //       <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown} nav inNavbar>
    //         <DropdownToggle nav caret>
    //           {isLoggedIn ? userName : 'Compte'}
    //         </DropdownToggle>
    //         <DropdownMenu right>
    //           {isLoggedIn ? (
    //             <>
    //               <DropdownItem>
    //                 <NavLink tag={Link} to="/profile">Profil</NavLink>
    //               </DropdownItem>
                  
    //               <DropdownItem divider />
    //               <DropdownItem onClick={toggleLogin}>
    //                 Déconnexion
    //               </DropdownItem>
    //             </>
    //           ) : (
    //             <>
    //               <DropdownItem>
    //                 <NavLink tag={Link} to="/login">Login</NavLink>
    //               </DropdownItem>
    //               <DropdownItem>
    //                 <NavLink tag={Link} to="/Register">Inscription</NavLink>
    //               </DropdownItem>
    //             </>
    //           )}
    //         </DropdownMenu>
    //       </Dropdown>
    //     </Nav>
    //   </Collapse>
    // </Navbar>
   
    <div className='navigation'>
     <Row>
      <Col className='col-3'>
      <a href="/"><img className='logo' src={logo} alt="" /></a>
      </Col>
      <Col>
      <nav>
          <ul>
          <li><a href="/Contact">Nous contacter</a></li>
            <li><a href="/Login"><img className='user-icon' src={userIcon} alt="" /></a></li>
            <li><a href="/Panier"><img className='panier-icon' src={panier} alt="" /></a></li>
          </ul>
        </nav>
      </Col>
       
     </Row>
     <Row>
        <nav>
          <ul>
            <li><a href="/">Accueil</a></li>
            <li><a href="/Pieces">Pièces</a></li>
            <li><a href="/Artistes">Artistes</a></li>
            <li><a href="/Inspirations">Inspirations</a></li>
            <li><a href="/Tarifs">Tarifs</a></li>
          </ul>
        </nav>
     </Row>
    </div>
   
  );
};

export default NavigationBar;
