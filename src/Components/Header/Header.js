import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import logo from '../../img/logo.png';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
    console.log(window.innerHeight)
    return (
        <Col xs='3' id='sidemenu' style={{height:`${window.innerHeight}px`}} className='sticky-top'>

            <img src={logo} width='100px' />

            <Row>
                <Link className='link' to={'/'}>Accueil</Link>
            </Row>
            <Row>
                <Link className='link' to={'/Competition'}>Compétition</Link>
            </Row>
            <Row>
                <Link className='link' to={'/Contact'}>Contact</Link>
            </Row>
            <Row>
                <Link className='link' to={'/Compte'}>Compte</Link>
            </Row>

        </Col>
    );
};
export default Header;