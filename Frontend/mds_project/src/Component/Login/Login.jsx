import React, { useState } from 'react';
import {Container,Row, Form, FormGroup, Label, Input, Button, FormFeedback} from 'reactstrap';
import NavigationBar from '../NavBar/Navbar';



export default function Login() {
    
    const [userDetails, setUserDetails] = useState({
        email: '',
        password: '',
      });
      const [submitted, setSubmitted] = useState(false);
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setUserDetails({ ...userDetails, [name]: value });
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true);
        if ( email && password ) {
          console.log("Form Details: ", userDetails);
        }
      };

    const isFormValid = () => {
        return email && password;
    };

    const { email, password } = userDetails;

    return (
        <>
        <NavigationBar />
        <section className='section-login'>
          <Container style={{ maxWidth: '600px' }}>
          <Form onSubmit={handleSubmit}>
            <Row>
            <h2>Bonjour !</h2>
            <p>Connectez-vous pour dévouvrir toutes nos fonctionnalités.</p>
            </Row>
            
              <FormGroup className='formgroup'>
                  <Label for="">Email<span className='etoile'>*</span></Label>
                  <Input type="email" name="email" id="email" value={email} onChange={handleChange} invalid={submitted && !email.includes('@')}/>
                  <FormFeedback>Un email valide est requis.</FormFeedback>
              </FormGroup>
              <FormGroup className='formgroup'>
                  <Label for="">Mot de passe<span className='etoile'>*</span></Label>
                  <Input type="password" name="password" id="password"  value={password} onChange={handleChange}/>
              </FormGroup>
              <Button type="submit" disabled={!isFormValid()}>Se connecter</Button>
              <p className='info'>Envie de nous rejoindre ? <a href="/Register">Créer un compte</a></p>
          </Form>
          </Container>
        </section>
        
        </>
    )
}
