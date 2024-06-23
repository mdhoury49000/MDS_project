import React from 'react'
import NavigationBar from '../NavBar/Navbar';
import { Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import Footer from '../Footer/Footer';

export default function Contact() {
  return (
    <>
    <NavigationBar/>
    <div className='bg-contact'>
      <Row>
        <Col>
        <h1 className='title'>Nous contacter</h1>
        </Col>
      </Row>
    </div>
    <Row className='title-contact'><h2>Contactez-nous</h2></Row>
    <Row className='bloc'>
    <div className='bloc-noir'>
        <h3>Une question ?</h3>
        <p>Besoin d'aide ou d'informations supplémentaires ? N'hésitez pas à nous contacter en remplissant le formulaire en fonction de vos besoins !</p>
    </div>
    </Row>
    <Row className='info-row'>
    <p>Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais :</p>
    </Row>
    <div className='contact-form'>
    <Form onSubmit="">
        <h3 className='title'>Formulaire de contact</h3>
        <Row form>
            <Col className='col-3'>
            
                <FormGroup>
                <Label for="lastName">Nom*</Label>
                    <Input type="text" name="lastName" id="lastName" placeholder="Nom" />
                </FormGroup>
            </Col>
            <Col className='col-3'>
                <FormGroup>
                <Label className='prenom-label' for="lastName">Prénom*</Label>
                    <Input type="text" name="firstName" id="firstName" placeholder="Prénom"/>
                </FormGroup>
            </Col>
        </Row>
        <Row form>
          <Col className='col-6'>
            <FormGroup>
              <Label for="email">Email*</Label>
              <Input type="email" name="email" id="email"/>
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col className='col-6'>
            <FormGroup>
              <Label for="telephone">Téléphone*</Label>
              <Input placeholder='## ## ## ## ##' type="tel" name="telephone" id="telephone"/>
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col className='col-6'>
            <FormGroup>
              <Label for="sujet">Sujet du message*</Label>
              <Input placeholder='Demande' type="text" name="sujet" id="sujet"/>
            </FormGroup>
          </Col>
        </Row>
        <FormGroup className='message-row'>
            <Label for="message">
            Message*
            </Label>
            <Input id="message" name="message" type="textarea"/>
        </FormGroup>
        <Button type="submit">Envoyer</Button>
      </Form>
    </div>
    <Footer/>
    </>
  )
}
