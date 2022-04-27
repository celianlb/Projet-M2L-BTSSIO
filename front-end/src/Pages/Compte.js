import React from 'react';
import { Container, Row , Col, Card , InputGroup, FormControl, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../Components/Header/Header'
import { useEffect, useState } from 'react';



const Compte= ({state}) => {

    console.log(state)
    const [users, setUsers] = state
    
    const handleSubmit = () => {
           var inputmail = document.getElementById('inputmail').value
           var inputmdp =  document.getElementById('inputmdp').value

           request(inputmail,inputmdp)
      };

      function request(email,mdp){

        var question = `http://localhost:5500/api/users/verify_mdp/${email}/${mdp}`;
        
        convertQuestion(question)
        }
      const convertQuestion = (question) =>{
        fetch(question)
            .then(res => res.json())
            .then(res => {
                console.log(res.user);
                console.log(res.result);
                setUsers(res)
               
            })
        }
        
        
    return (
        <Container style={{margin:'0px'}}>
            <Row>
                <Header />
                <Col style={{margin: 'auto'}}>
                    <Card id='card-col'>
                    {users.result === 'true' ? 
                        <>
                            <Card.Header id="card-head" as="h6">Connected to {users.user.prenom}</Card.Header>
                            <Card.Body> 
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1">Prenom :</InputGroup.Text>
                                    <FormControl
                                        placeholder= {users.user.prenom}
                                        aria-describedby="basic-addon1"
                                        disabled
                                    />
                            </InputGroup>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1">Nom :</InputGroup.Text>
                                    <FormControl
                                        placeholder= {users.user.nom}
                                        aria-describedby="basic-addon1"
                                        disabled
                                    />
                            </InputGroup>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1">Email :</InputGroup.Text>
                                    <FormControl
                                        placeholder= {users.user.email}
                                        aria-describedby="basic-addon1"
                                        disabled
                                    />
                            </InputGroup>
                                <Button variant="danger" onClick={() =>{setUsers([])}}>Se deconnecter</Button>
                            </Card.Body>
                        </>
                     : 
                        <>
                            <Card.Header id="card-head" as="h6">Formulaire de connexion</Card.Header>
                            <Card.Body>    
                                <Row>
                                    <Col>
                                        <Row style={{marginBottom : '20px'}}>
                                            <InputGroup className="mb-3">
                                                <FormControl
                                                    id='inputmail'
                                                    placeholder="email"
                                                    required
                                                    aria-describedby="basic-addon1"
                                                />
                                            </InputGroup>
                                        </Row>
                                        <Row style={{marginBottom : '20px'}}>
                                            <InputGroup className="mb-3"> 
                                                <FormControl
                                                    id='inputmdp'
                                                    placeholder="mot de passe"
                                                    required
                                                    type='password'
                                                    aria-describedby="basic-addon1"
                                                />
                                            </InputGroup>
                                        </Row>
                                    </Col>
                                    <Row className='d-flex justify-content-center'>
                                        <Col>
                                            <Button type="button" onClick={handleSubmit} variant="danger" className='bouton' style={{marginTop:'10px',width: '200px'}}>Se connecter</Button>
                                        </Col>
                                        <Col>
                                            <Link to='/Inscription'>
                                                <Button variant="outline-secondary" style={{marginTop:'10px',width: '200px'}}>S'inscrire</Button>
                                            </Link>
                                        </Col>    
                                    </Row>
                                </Row>
                            </Card.Body>
                        </>}
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};
export default Compte;