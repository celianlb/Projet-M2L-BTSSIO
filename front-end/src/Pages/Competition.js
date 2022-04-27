import React from 'react';
import Circuit from '../Components/Circuit';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Header from '../Components/Header/Header';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';



const Competition = ({state}) => {

const [data, setData] = useState([])
const [users, setUsers] = state

console.log('comp', state);
function request(){
    var question = 'http://localhost:5500/api/competition';
    convertQuestion(question)
}

const convertQuestion = (question) =>{
    fetch(question)
        .then(res => res.json())
        .then(res => {
            setData(res)
        })
}

    let displayCircuit =(
        console.log('test', data),
        
        data.map(element =>{

            console.log(".map", element)
            
            return(<Circuit props={element} state={[users, setUsers]}/>)
        })
        
    )
        


useEffect(()=>{

    request()

    


},[])



    return (
        <Container style={{margin:'0px'}}>
            <Row >
                <Header />
                    <Col style={{marginLeft:'10%'}}>
                        {data.length == 0 ? console.log("data is undefined") : displayCircuit}
                    </Col>
            </Row>
        </Container>
    );
};
export default Competition;