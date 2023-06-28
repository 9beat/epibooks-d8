// dependencies
import { Row, Col, Button } from "react-bootstrap";
import { useState } from "react";

// endpoint for comments API & authorization token
const API = `https://striveschool-api.herokuapp.com/api/comments/`;
const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDliNzZjZWM5NGZiODAwMTQ4MjZhZmIiLCJpYXQiOjE2ODc5MTAwOTQsImV4cCI6MTY4OTExOTY5NH0._Pm1wByVW9N8iA0zxYmLw69YUQNGIZuIX9O2m8Nq4vs`;


// SINGLE COMMENT
export default function SingleComment({ item, i, setCommentsCount }) {

    // set comments state
    const [comments, setComments] = useState([item]);

    // handle delete comment
    async function deleteComment(e, commentId) {
        e.preventDefault();
        e.stopPropagation();
        try {
            await fetch(`${API}${commentId}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
            }})
            const updatedComments = comments.filter(
                (comment) => comment._id !== commentId
            )
            setComments(updatedComments);
        } catch (error) {
            console.error("Error:", error);
        } 
        setCommentsCount((prevCount) => prevCount + 1);
    }

    return (
        <div className="m-0 p-1" key={i}>
            <Row className="m-auto">
                <Col xs={9}>
                    <div className="text-warning text-center"><b>{item.rate}</b>★</div>
                    <p className="text-dark fw-bolder text-center">{item.author} says:</p> 
                    <div className="text-dark fs-6 text-center">"{item.comment}"</div>                                
                </Col>
                <Col className="d-flex align-items-center" xs={3}>
                    <Button
                        onClick={(e) => deleteComment(e, item._id)}
                        className="btn btn-danger m-auto w-100 my-3 p-0"
                    >
                        Delete
                    </Button>
                </Col>
                <hr />
            </Row>
        </div>
    );
}


