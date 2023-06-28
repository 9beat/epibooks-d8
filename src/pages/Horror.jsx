import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from "react-bootstrap/Row";
import BookHorror from '../components/booksCategories/BookHorror';

export default function Horror({horrorFilter}) {
  return (
    <div>
      <Navbar expand="lg" variant="light" bg="light">
        <Container>
          <Navbar.Brand style={{fontSize:'3em'}}>Horror</Navbar.Brand>
        </Container>
      </Navbar>

      <Container fluid className='mt-5 pt-5'>
                <Row className="d-flex justify-content-center">
                    {
                        horrorFilter.map((book, i) => (
                            <BookHorror book={book} key={i} />
                        ))
                    }
                </Row>
        </Container>
    </div>
  )
}
