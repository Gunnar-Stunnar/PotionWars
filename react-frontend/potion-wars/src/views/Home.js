import React from 'react';
import {Container, Row, Col, Button} from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";

import './Home-style.css';

export default function(props){

    return (
        <>
            <div className="Background"/>
            <div className="Background-Filter"/>
        <Container fluid className='d-flex h-100 flex-column p-3 mx-auto mainBody'>
            <Navbar variant="dark">
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src="https://media1.giphy.com/media/Pitu26Px1RYZnDQT9l/giphy.gif"
                        width="35"
                        height="35"
                        className="d-inline-block align-top"
                    />
                    Potion Wars
                </Navbar.Brand>
            </Navbar>
            <Container className='my-auto text-center'>
            <h1 className='home-cover'>POTION WARS</h1>
                <h2 className='lead'> Brew new recipies and Battle head to head with other wizards</h2>
                <Container>
                <img
                    src="https://i.pinimg.com/originals/29/32/63/293263670b8780146ab0c4e40a2ea890.gif"
                />
                <Row className='d-flex flex-row'>
                    <Button variant="outline-primary"  className='flex-grow-1 mx-4'>Play</Button>
                    <Button variant="outline-primary" className='flex-grow-1 mx-4'>How to play</Button>
                    <Button variant="outline-primary" className='flex-grow-1 mx-4'>About Us</Button>
                </Row>

            </Container>
            </Container>
        </Container>

            
    </>
        );
}