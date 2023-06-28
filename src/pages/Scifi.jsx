import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from "react-bootstrap/Row";
import BookScifi from '../components/booksCategories/BookScifi';
import Jumbotron from '../components/Welcome';
import Browse from './Browse';

export default function Scifi({scifiFilter}) {
    return (
        <>

            {/* <Navbar expand="lg" variant="light" bg="light">
                <Container>
                    <Navbar.Brand style={{ fontSize: '3em' }}>Scifi</Navbar.Brand>
                </Container>
            </Navbar> */}
            <Browse />
            <Container fluid className='mt-5 pt-5'>
                <Row className="d-flex justify-content-center">
                    {
                        scifiFilter.map((book, key) => (
                            <BookScifi book={book} key={key} />
                        ))
                    }
                </Row>
            </Container>
        </>


    )
}
