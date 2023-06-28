import React, { useState }  from "react";

import { Container, Row } from "react-bootstrap";

import SingleBook from "./SingleBook";

// LATEST RELEASE COMPONENT
export default function LatestRelease(props) {

    // set selected book state
    const [selectedBook, setSelectedBook] = useState(null);

    // handle click
    function handleBookClick(book) {
        props.onBookSelect(book.asin);
        setSelectedBook(book.asin)
    }


    return (
        <Container fluid>
        <Row 
            xxxl={1}
            xl={2}
            lg={3}
            md={4}
            sm={6}
            xs={6}
            xxs={12}
        >
            {
            props.books.map((book, i) => (
                <SingleBook 
                    key={i}
                    book={book} 
                    onClick={() => handleBookClick(book)}
                    selected={selectedBook === book.asin}
                />
            ))
            }
        </Row>
        </Container>
    );
}

