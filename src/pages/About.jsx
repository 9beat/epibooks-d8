import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './About.css'
// import { Link } from 'react-router-dom'

// ABOUT PAGE
export default function About() {
    return (
        <>
        <Container fluid className='about-container'>
        <Row>
        <Col className="about-container bg-about" >
            <h1 className="m-5 about-heading">About us...</h1>
            <h5 className='m-5 about-taste text-center my-5'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Consectetur adipiscing elit..
            </h5>
        </Col>
        </Row>
        </Container>
        </>
    )
}
