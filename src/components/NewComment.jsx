import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

const API = `https://striveschool-api.herokuapp.com/api/comments/`;
const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDliNzZjZWM5NGZiODAwMTQ4MjZhZmIiLCJpYXQiOjE2ODc5MTAwOTQsImV4cCI6MTY4OTExOTY5NH0._Pm1wByVW9N8iA0zxYmLw69YUQNGIZuIX9O2m8Nq4vs`;

export default function NewComment({ setCommentsCount, id }) {

    // set comment state
    const [comment, setComment] = useState([]);

    // set modal show 
    const [modalShow, setModalShow] = useState(false);

    // set review state
    const [review, setReview] = React.useState("");

    // set rating state
    const [rating, setRating] = React.useState("");

    // handle modal close
    function handleClose(e) {
        setModalShow(false);

        e.preventDefault();
        e.stopPropagation();
    }

    // handle modal show
    function handleModalShow(e) {
        setModalShow(true);

        e.preventDefault();
        e.stopPropagation();
    }

    // handle form submit
    async function handleSubmit(e) {
        e.preventDefault();
        e.stopPropagation();

        let newComment = {
            comment: review,
            rate: rating,
            elementId: id
        };

        if (rating >= 1 && rating <= 5) {
            try {
                const response = await fetch(API, {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                },
                body: JSON.stringify(newComment),
            });
            const data = await response.json();
            setComment([...comment, data]);
            handleClose();
        } catch (error) {
            console.error("RATING ERROR: ", error);
        }
        } else {
            alert("Rating must be between 1 and 5");
            setRating("");
        }

        setRating("");
        setCommentsCount((prevCount) => prevCount + 1);
    }

    function handleReviewChange(e) {
        setReview(e.target.value);
    }

    function handleRatingChange(e) {
        setRating(e.target.value);
    }

    return (
        <>
        <Button 
            className="w-100"
            variant="primary"
            onClick={handleModalShow}>
                Add comment
        </Button>

        {/* modal review */}
        <Modal 
            show={modalShow}
            onClick={handleClose}
            className=""
        >
            <Modal.Header className="d-flex justify-content-end">
                <Button
                    variant="danger"
                    size="sm"
                    onClick={handleClose}
                >
                    Close
                </Button>
            </Modal.Header>
            <Modal.Body
                className="d-flex justify-content-center w-100 mx-auto"
                onClick={(e) => e.stopPropagation()}
            >
                <Form
                    className="text-center"
                    onSubmit={handleSubmit}
                >
                    <Form.Group className="mb-3 text-center">
                        <Form.Label>
                            <h5><i>What do you think about this book?</i></h5>
                        </Form.Label>
                        <Form.Control
                            className="input-text"
                            type="textarea"
                            placeholder="Write a review..."
                            onChange={handleReviewChange}
                            onClick={(e) => e.stopPropagation()}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3 input-number">
                        <Form.Label>
                            <h5><i>Did you like it?</i></h5>
                        </Form.Label>
                        <Form.Control
                            className="input-small"
                            type="number"
                            placeholder=" (Rate it from 1 to 5)"
                            min={1}
                            max={5}
                            value={rating}
                            onChange={handleRatingChange}
                            onClick={(e) => e.stopPropagation()}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button 
                    className="m-0 px-5 w-100 mx-auto"
                    variant="primary"
                    type="submit"
                    onClick={handleSubmit}
                >
                    Send
                </Button>
            </Modal.Footer>
        </Modal>
        </>
    );
}

