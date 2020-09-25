import React from 'react';
import './Brewing.css';
import {Container, Navbar, Row, Col} from "react-bootstrap";


export default function (props){
    return (
        <>
            <div className="Background-workDesk"/>
            <Container>
            <Navbar variant="dark">
                <Navbar.Brand href="#home" className="mx-auto">
                    <h1>Brewing Table</h1>
            </Navbar.Brand>
            </Navbar>
                <Container>
                    <Col xs={2}>
                        <h1>Inventory</h1>
                        <Container>
                            <Col>
                                <Row>
                                    <div className=""></div>
                                </Row>
                            </Col>
                        </Container>
                    </Col>
                </Container>
            </Container>
        </>
    )
}