import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Container, FormFeedback, Row, Col } from 'reactstrap';
import NavigationBar from '../NavBar/Navbar';
function RegisterForm() {
  const [userDetails, setUserDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    address: '',
    city: '',
    postalCode: '',
    gender: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    if ( firstName && lastName && email && password && password === confirmPassword && address && city && postalCode && gender) {
      console.log("Form Details: ", userDetails);
    }
  };

  const isFormValid = () => {
    return firstName && lastName && email && password && password === confirmPassword && address && city && postalCode && gender;
  };

  const { firstName, lastName, email, password, confirmPassword, address, city, postalCode, gender } = userDetails;

  return (
    <>
    <NavigationBar />
    <Container style={{ maxWidth: '600px', marginTop: '20px' }}>
      <h2>Inscription</h2>
      <Form onSubmit={handleSubmit}>
        <Row form>
            <Col md={6}>
                <FormGroup>
                    <Label for="firstName">Prénom</Label>
                    <Input type="text" name="firstName" id="firstName" placeholder="Prénom" value={firstName} onChange={handleChange} />
                </FormGroup>
            </Col>
            <Col md={6}>
                <FormGroup>
                    <Label for="lastName">Nom</Label>
                    <Input type="text" name="lastName" id="lastName" placeholder="Nom" value={lastName} onChange={handleChange} />
                </FormGroup>
            </Col>
        </Row>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input type="email" name="email" id="email" placeholder="exemple@domaine.com" value={email} onChange={handleChange} invalid={submitted && !email.includes('@')} />
              <FormFeedback>Un email valide est requis.</FormFeedback>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="password">Mot de passe</Label>
              <Input type="password" name="password" id="password" placeholder="Mot de passe" value={password} onChange={handleChange} invalid={submitted && password.length < 6} />
              <FormFeedback>Le mot de passe doit contenir au moins 6 caractères.</FormFeedback>
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="confirmPassword">Confirmer le mot de passe</Label>
          <Input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirmer le mot de passe" value={confirmPassword} onChange={handleChange} invalid={submitted && confirmPassword !== password} />
          <FormFeedback>Les mots de passe ne correspondent pas.</FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label for="address">Adresse</Label>
          <Input type="text" name="address" id="address" placeholder="1234 Rue Principale" value={address} onChange={handleChange} />
        </FormGroup>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="city">Ville</Label>
              <Input type="text" name="city" id="city" placeholder="Ville" value={city} onChange={handleChange} />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="postalCode">Code Postal</Label>
              <Input type="text" name="postalCode" id="postalCode" placeholder="75000" value={postalCode} onChange={handleChange} />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="gender">Sexe</Label>
          <Input type="select" name="gender" id="gender" value={gender} onChange={handleChange}>
            <option value="">Sélectionnez votre sexe</option>
            <option value="M">Masculin</option>
            <option value="F">Féminin</option>
            <option value="X">Ne souhaite pas préciser</option>
          </Input>
        </FormGroup>
        <Button type="submit" color="primary" disabled={!isFormValid()}>Inscription</Button>
      </Form>
    </Container>
    </>
  );
}

export default RegisterForm;
