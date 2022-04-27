import React from 'react';
import Header from '../Components/Header/Header';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, InputGroup, FormControl, Button} from 'react-bootstrap';

const Contact = () => {
    return (
        <Container style={{margin:'0px'}}>
            <Row>
                <Header />
                <Col style={{margin: 'auto'}}>
                <Card  id='card-col'>
                    <Card.Header id="card-head" as="h6">Formulaire de contact</Card.Header>
                    <Card.Body>
                    <Row>
                        <Col>
                            <Row>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon3">
                                     Prénom :
                                 </InputGroup.Text>
                                 <FormControl id="basic-url" aria-describedby="basic-addon3" />
                            </InputGroup>
                            </Row>
                            <Row>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="basic-addon3">
                                     Mail : 
                                    </InputGroup.Text>
                                    <FormControl id="basic-url" aria-describedby="basic-addon3" />
                                </InputGroup>
                            </Row>
                        </Col>

                        <Col>
                            <Row>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="basic-addon3">
                                    Nom :
                                    </InputGroup.Text>
                                    <FormControl id="basic-url" aria-describedby="basic-addon3" />
                                </InputGroup>
                            </Row>
                            <Row>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="basic-addon3">
                                     Sujet : 
                                    </InputGroup.Text>
                                    <FormControl id="basic-url" aria-describedby="basic-addon3" />
                                </InputGroup>
                            </Row>
                        </Col>
                        </Row>
                        <Row>
                            <InputGroup>
                                <InputGroup.Text>Message :</InputGroup.Text>
                                <FormControl as="textarea" aria-label="With textarea" style={{height: '150px',maxHeight: '150px',minHeight: '150px'}}/>
                            </InputGroup>
                         </Row>
                         <Row className='d-flex justify-content-center'>
                            <Button variant="danger" className='bouton' style={{marginTop:'10px',width: '200px'}}>Envoyer</Button>
                        </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};
export default Contact;