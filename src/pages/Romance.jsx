import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from "react-bootstrap/Row";
import BookRomance from '../components/booksCategories/BookRomance';

export default function Romance({romanceFilter}) {
    return (
        <>
            <Navbar expand="lg" variant="light" bg="light">
                <Container>
                    <Navbar.Brand style={{ fontSize: '3em' }}>Romance</Navbar.Brand>
                </Container>
            </Navbar>

            <Container fluid className='mt-5 pt-5'>
                <Row className="d-flex justify-content-center">
                    {
                        romanceFilter.map((book, i) => (
                            <BookRomance book={book} key={i} />
                        ))
                    }
                </Row>
            </Container>
        </>
    )
}
