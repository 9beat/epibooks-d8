import React, { useState, useEffect } from 'react'
import { Col, Card, ListGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Singlebook.css'
import Spinner from './Spinner';

// import CommentArea from './CommentArea';

export default function SingleBook(props) {
    
    // const [click, setClick] = useState(false);
    const [selected, setSelected] = useState(false);
    const [loading, setLoading] = useState(true);

    // se= () => {


    const selectedBook = () => {
        if (selected) {
            setSelected(true);
            props.onClick(selected);
        } else {
            setSelected(false);
            props.onClick(props.book.asin);
        } 
    }

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 0.00001);
    }, [props.book.img]);

    return (
        <Col 
            xxxl={1}
            xl={2}
            lg={3}
            md={4}
            sm={6}
            xs={6}
            xxs={12}
            className="mx-auto"
        >
            <Card 
                className=
                    {
                    props.selected 
                        ? "body-card:hover shadow-danger" 
                        : "body-card my-5"
                    } 
                onClick={selectedBook}
            >
                {
                    loading 
                    ? <Spinner /> 
                    :<Card.Img 
                        variant='top' 
                        src={props.book.img}
                        alt={props.book.title}
                        className="book-image"
                    />}
                <Card.Body  className='d-flex flex-column justify-content-center align-align-items-center'>
                    <Card.Title 
                        className="book-title m-0 p-0"
                    >
                    <h5>{props.book.title}</h5>
                    </Card.Title>
                    <ListGroup>
                        <Card.Text className="m-auto">
                            <i>ISBN: </i><b>{props.book.asin}</b>
                        </Card.Text>
                        <Card.Text className=" mt-3 d-flex justify-content-around align-items-center">
                            <Link
                                className="text-decoration-none" 
                                to={`/${props.book.category}`}>
                            <h5 className='text-center'>
                                #<b>{props.book.category}</b>
                            </h5>
                            </Link>
                            <Card.Text className="text-center mt-1">
                                <h6>$<i>{props.book.price}</i></h6>
                            </Card.Text>
                        </Card.Text>

                    </ListGroup>
                    <Link
                        className="text-decoration-none text-light"
                        to={`/${props.book.category}/${props.book.asin}`}
                    >
                            <Button className="show-details mt-3 w-100">
                                <span className="btn-font">show details</span>
                            </Button>
                    </Link>

                </Card.Body>
            </Card>
        </Col>
    )
}




