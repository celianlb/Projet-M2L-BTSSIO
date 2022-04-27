import React from 'react';
import { Container, Row , Col, Card , Form, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../Components/Header/Header';
import { useEffect, useState } from 'react';



const Inscription = () => {

    const [validated, setValidated] = useState(false);
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();

            console.log('non');
            console.log('test',event.target[3].value,event.target[4].value);

        }else{
            console.log('yes')
            console.log('test',event.target[4].value);
            if(event.target[3].value === event.target[4].value){
                request(event.target[0].value,event.target[1].value,event.target[2].value,event.target[3].value) 
            }else{
                console.log('mdp pas pareil')
                alert('mdp pas pareil')
            }
            
        }
         
        
        //request(event.target[0].value,event.target[1].value,event.target[2].value)
        setValidated(true);
      };

    const [data, setData] = useState([])
 

function request(prenom,nom,email,mdp){

    var question = `http://localhost:5500/api/users/add_abonnee/${nom}/${email}/${mdp}/${prenom}`;
    
    convertQuestion(question)
}
const convertQuestion = (question) =>{
    fetch(question)
        .then(res => res.json())
        .then(res => {
            setData(res)
        })
}

    return (
    <Container style={{margin:'0px'}}>
        <Row>
            <Header />
                <Col style={{margin: 'auto'}} className='d-grid gap-3'>
                    <Card id='card-col'>
                        <Card.Header id="card-head" as="h6">Formulaire d'inscription {data.result}</Card.Header>
                        <Card.Body>
                            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                <Row style={{marginBottom : '20px'}}>
                                    <Form.Group as={Col} controlId="validationCustom01">
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="Prénom"
                                        />
                                    </Form.Group>
                                </Row>
                                <Row style={{marginBottom : '20px'}}>
                                    <Form.Group as={Col} controlId="validationCustom01">
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="Nom"
                                        />
                                    </Form.Group>
                                </Row>
                                <Row style={{marginBottom : '20px'}}>
                                    <Form.Group as={Col} controlId="validationCustom01">
                                        <Form.Control
                                            required
                                            type="mail"
                                            placeholder="Adresse e-mail"
                                        />
                                    </Form.Group>
                                </Row>
                                <Row style={{marginBottom : '20px'}}>
                                    <Form.Group as={Col} controlId="validationCustom01">
                                        <Form.Control                                   
                                            required
                                            type="password"
                                            placeholder="Mot de passe"
                                        />
                                    </Form.Group>
                                </Row>
                                <Row style={{marginBottom : '20px'}}>
                                    <Form.Group as={Col} controlId="validationCustom01">
                                        <Form.Control                                 
                                            required
                                            type="password"
                                            placeholder="Confirmation du mot de passe"
                                        />
                                    </Form.Group>
                                </Row>
                                    <Form.Group className="mb-3" style={{textAlign : 'left'}}>
                                        <Form.Check
                                            required
                                            label="J'accepte les conditions générales et la politique de confidentialité"
                                            feedback="Vous devez accepter les conditions générales avant de continuer."
                                            feedbackType="invalid"
                                        />
                                    </Form.Group>
                                    <Button type="submit" className="bouton">S'inscrire</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
        </Row>
    </Container >
    );
  }

export default Inscription;