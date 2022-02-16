import React from 'react';
import { Row, Col, Button, Container, Card } from 'react-bootstrap';
import logo from '../img/logo.png';
import { Link } from 'react-router-dom';
import plan1 from '../img/plan1.png'
const Circuit = ({Competition}) => {



    return (
    <Row className="d-flex justify-content-center">
        <Card id='card-col' style={{ width: '50%',marginBottom: '20px' }}>
            
          <Card.Title>Course de la Banane</Card.Title>
        <Card.Img variant="top" src={plan1} />
        <Card.Body>
          <Card.Text>
            La course de la Banane comporte 12 tours de 3,75 m sur un circuit plat et goudronné.
          </Card.Text>
                <Row>
                    <Link to="/Inscription">
                        <Button variant="danger" className='bouton' style={{ marginTop: '5%', width: '200px'}}>
                            Inscription
                        </Button>
                    </Link>
                </Row>
                <Row>
                    <Link to="/Competition/Live">
                        <Button variant="danger" className='bouton' style={{ marginTop: '5%', width: '200px'}}>
                            On Live
                        </Button>
                    </Link>
                </Row>         
        </Card.Body>
      </Card>
     <hr />
     </Row>
    
    );
};
export default Circuit;