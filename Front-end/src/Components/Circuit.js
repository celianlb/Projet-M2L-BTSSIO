import React from 'react';
import { Row, Col, Button, Container, Card, Modal, FormControl, Form } from 'react-bootstrap';
import logo from '../img/logo.png';
import { Link } from 'react-router-dom';
import './Circuit.css';
import { useState,useEffect } from 'react';
import epinal from '../img/epinal.jpg'
import quiche from '../img/quiche.png'


const Circuit = (props) => {
    const [data, setData] = useState([])
    const [show, setShow] = useState(false);
          
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [users, setUsers] = props.state
    console.log('circuit',users.idabonnee);
    const handleSubmit = () => {
    var inputmdp =  document.getElementById('inputmdp').value
    if (inputmdp === users.user.mdp){
        inscription(users.user.idabonnee, props.props.idcompetition)
        alert('Inscription réussie')
    }else{
        alert('Mot de passe incorrect')
    }
    setShow(false)
    };
    function inscription(id, idcompetition){
        console.log(id, idcompetition)
        var question = `http://localhost:5500/api/competition/inscription/${id}/${idcompetition}`;
        convertQuestionInscription(question)
        }



    function request(){
        var question = 'http://localhost:5500/api/circuit';
        convertQuestion(question)
    }
    
    const convertQuestion = (question) =>{
        fetch(question)
            .then(res => res.json())
            .then(res => {
                setData(res)
                
            })
    }
    const convertQuestionInscription = (question) =>{
        fetch(question)
            .then(res => res.json())
            .then(res => {
                
            })
    }
    
    console.log('data circuit' ,data)

    let displayInfo =(
            console.log('data circuit ', data),
            console.log('props : ', props.props),
            
            data.map(element =>{
    
                console.log(".map", element)
                if(props.props.idcircuit === element.idcircuit){
                    console.log('ok');
                    return (
                    <>  
                    <img src={getImg(element.img)} width='100%'></img>
                    <p><u>Nom du circuit :</u> {element.nom}</p>
                    <p><u>Longueur du circuit :</u> {element.nbkm} m </p>
                    <p>{element.info}</p></>)
                }else{
                    return null
                }
                
            })
            
        )

        function getImg(img) {
            console.log('check img : ', img)
            switch (img) {
              case 'epinal':
                return `.${epinal}`;
              case 'quiche':
                return `.${quiche}`
              default:
                return 'foo';
            }
          }
        

        useEffect(()=>{

            request()
        
        },[])

          
    return (
    <Row className="d-flex justify-content-center" style={{marginLeft: 'auto' }}>
        <Card id='card-col' style={{ width: '70%',marginBottom: '20px'}}>
            
          <Card.Title>{props.props.nomcompetition}</Card.Title>
       
        <Card.Body>
          <Card.Text style={{margin: 'auto'}}>
            
            {data.lenght === 0 ? console.log(' circuit undefined') : displayInfo}
            <p><u>Date de la compétition :</u> {props.props.date.substr(8, 2)}/{props.props.date.substr(5, 2)}/{props.props.date.substr(0, 4)}</p>
            <p><u>Heure de la compétiton :</u> {props.props.heure}</p>
            <p><u>Nombre de tours :</u> {props.props.tours}</p>
            
          </Card.Text>
                <Row>
                    {users.user ?
                    <>
                    <Row>
                    <Link to="/Competition/Live" style={{ marginBottom: '5%'}}>
                        <Button variant="danger" className='bouton' >
                            On Live
                        </Button>
                    </Link>
                    </Row> 
                    <Row>
                    <Button variant="danger" onClick={handleShow} className='bouton' >
                            Inscription
                    </Button>
                    </Row>
                    
                    
                    </> :
                    <Row style={{ marginBottom: '100px'}}>
                    <Link to="/Competition/Live">
                        <Button variant="danger" className='bouton'>
                            On Live
                        </Button>
                    </Link>
                    </Row>}

                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Inscription à la compétition</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>Etes-vous sur de vouloir vous inscrire à cette compétition ?<hr/>
                            <Form>
                            <Form.Group as={Col} controlId="validationCustom01">
                                        <Form.Control                                 
                                            id='inputmdp'
                                            required
                                            type='password'
                                            aria-describedby="basic-addon1"
                                            placeholder="Confirmation du mot de passe"
                                        />
                                    </Form.Group>
                            </Form>
                            </Modal.Body>

                                <Modal.Footer>
                                    
                                    <Button variant="danger" onClick={handleSubmit}>
                                        Confirmer
                                    </Button>
                                    <Button variant="danger" onClick={handleClose}>
                                        Close
                                    </Button>
                                </Modal.Footer>

                        </Modal>
                </Row>
                         
        </Card.Body>
      </Card>
     <hr />
     </Row>
    
    );
};
export default Circuit;