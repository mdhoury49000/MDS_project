import React, { useState } from 'react';
import {Container, Form, FormGroup, Label, Input, Button, FormFeedback} from 'reactstrap';
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
        <h2>Connexion</h2>
        <Container style={{ maxWidth: '600px', marginTop: '20px' }}>
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label for="">Email</Label>
                <Input type="email" name="email" id="email" placeholder="Exemple@domaine.com" value={email} onChange={handleChange} invalid={submitted && !email.includes('@')}/>
                <FormFeedback>Un email valide est requis.</FormFeedback>
            </FormGroup>
            <FormGroup>
                <Label for="">Mot de passe</Label>
                <Input type="password" name="password" id="password" placeholder="Mot de passe" value={password} onChange={handleChange}/>
            </FormGroup>
            <Button type="submit" color="primary" disabled={!isFormValid()}>Connexion</Button>
        </Form>
        </Container>
        </>
    )
}
