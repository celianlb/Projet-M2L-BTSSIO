import React from 'react';
import Button from 'react-bootstrap/Button';
import Header from '../../Components/Header/Header';
import { Container, Row, Col, Card } from 'react-bootstrap';
import moto from '../../img/moto.png'
import './Accueil.css'
const Accueil = () => {
    return (
        <div>
        <Container style={{margin:'0px'}}>
            <Row>
                <Header />
                <Col>
                    <Row style={{margin:'auto'}}>
                        <Col>
                            <Row>
                                <Card id='card-col'>
                                    <Card.Header id="card-head" as="h6">La Maison Des Ligues de Loraine</Card.Header>
                                        <Card.Body>
                                             <Card.Text>
                                             La Maison des Ligues de Lorraine (M2L) a pour mission de fournir des espaces et des services aux différentes ligues sportives régionales et à d’autres structures hébergées. La M2L est une structure financée par le Conseil Régional de Lorraine dont l'administration est déléguée au Comité Régional Olympique et Sportif de Lorraine (CROSL).
                                             </Card.Text>             
                                        </Card.Body>
                                </Card>
                            </Row>
                            <Row>
                                <Col >

                                <Card id='card-col'>
                                        <Card.Body>
                                                 <Card.Text>
                                                 La maison des ligues de Lorraine regroupe toutes les disciplines du motocyclisme : endurance, motocross, trial, vitesse et tourisme.
                                                La ligue motocycliste régionale de Lorraine est affiliée à la Fédération française de Motocyclisme et fédère les clubs de la grande région.Sur ce site, vous trouverez toutes les actualités des clubs, de la M2L, et des informations pratiques et techniques concernant la pratique du motocyclisme dans toutes les disciplines. </Card.Text>                                       </Card.Body>
                                        
                                    </Card>

                                </Col>
                                <Col >
                                    <Card id='card-col'>
                                        <Card.Body>
                                            <img src= {moto} width='250px' />
                                                 <Card.Text>
                                                     Un sport motocycliste est une compétition consistant en des courses de motocyclettes selon des disciplines, formules et catégories. Les disciplines sont nombreuses et variées : de la course de vitesse sur circuit au moto-cross, en passant par le trial, le speedway ou l'endurance.
                                                    Le sport motocycliste est régi au niveau mondial par la Fédération internationale de motocyclisme (FIM), fondée en 1904.</Card.Text>
                                        </Card.Body>
                                        
                                    </Card>                              
                                </Col>
                            </Row>
                        </Col>
                    </Row>              
                </Col>
            </Row>
        </Container>
           

      
        </div>
    );
};
export default Accueil;