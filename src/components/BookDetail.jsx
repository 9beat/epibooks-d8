import React from "react";
import { Button, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

// import components
import CommentList from "./CommentList";
import NewCommentArea from "./NewCommentArea";
import StarsRating from "./StarsRating";

//import data
import allBooks from "../json/allbooks.json";
import scifi from "../json/scifi.json";
import horror from "../json/horror.json";
import romance from "../json/romance.json";
import history from "../json/history.json";
import fantasy from "../json/fantasy.json";

// css
import './BookDetail.css'


// BOOK DETAIL
export default function BookDetail() {

    const navigate = useNavigate();

    //back home
    const backHome = () => {
        navigate("/");
    };

    // route book id 
    const { id } = useParams();
    const { category } = useParams();

    // get book 
    let book = null;

    // filter category & find book
    if (category === "fantasy") {
        book = fantasy.find((book) => book.asin === id);
    } else if (category === "scifi") {
        book = scifi.find((book) => book.asin === id);
    } else if (category === "romance") {
        book = romance.find((book) => book.asin === id);
    } else if (category === "history") {
        book = history.find((book) => book.asin === id);
    } else if (category === "horror") {
        book = horror.find((book) => book.asin === id);
    } else {
        book = allBooks.find((book) => book.asin === id);
    }


    // return book detail
    return (
        <>
        <Row  className="d-flex p-5 bg-image justify-content-between">
            <BookData 
                book={book} 
            />
        </Row>
        <hr />
        <Row className="d-flex p-5 bg-image justify-content-between">
            <Col xs={12}>
                <UsersComments id={id} />
            </Col>
        </Row>
        <hr />
        <Row className="d-flex p-5 bg-image justify-content-between">
            <Button 
                className="px-5 py-0 w-100 my-4 btn-danger" 
                onClick={backHome}
            >
                BACK HOME
            </Button>
        </Row>
        </>
    );
}



// handle book'sdata
function BookData({ book }) {
    
    // set user rating
    const [userRating, setUserRating] = useState(null);

    // props deconstruction
    const { title, img, category, asin, price, } = book;

    // // search sinopsis on wikipedia (to review later)
    // const [bookTitle, setBookTitle] = useState(book.title);
    // const [synopsis, setSynopsis] = useState('');
    // useEffect(() => {
    //     async function fetchSynopsis() {
    //         try {
    //             const response = await axios.get(`https://en.wikipedia.org/api/rest_v1/page/summary/${bookTitle}`);
    //             const { extract } = response.data;
    //             setSynopsis(extract);
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     }
    //     fetchSynopsis();
    // }, [bookTitle]);

    return (
        <>
        <h1 className="mb-5 text-center text-light bg-dark rounded-5 p-3 fw-bold">{title}</h1>
        <Col sm={4} className="justify-content-around">
            <img
                className="img-detail mx-5"
                src={img}
                alt={title}
            />
        </Col>
        <Col
            sm={4}
            className="mx-auto"
        >
            <div className="d-flex justify-content-center">
                <StarsRating 
                    book={book}
                    userRating={userRating}
                    setUserRating={setUserRating}
                />
            </div>
                

            <p className="text-secondary text-center m-auto">
                <i className="text-light">
                    A {category} world where a group of rebels must band together to take down the tyrannical overlord that threatens to slave 
                    humanity. With the help of a villain, they embark on a dangerous mission to infiltrate the overlord stronghold destroy it 
                    for good. But when their plan goes awry, they must use all their wit and resourcefulness to save the humanity from certain
                    slavery. <br />
                    Will they succeed, or will the overlord reign supreme? <br />
                    Find out reading "{title}".
                </i>
            </p>
            <p className="d-flex justify-content-between mt-5">
                <h4 className="text-primary fw-bolder">#{category}</h4> <h4 className="text-primary fw-bolder">ISBN: {asin}</h4>
            </p>
            <h2 className="mt-5 text-center rounded-5 text-success bg-warning ">
                <h5>$<i>{price}</i></h5>
            </h2>
        </Col>
        </>
    );
}



// users comments
function UsersComments({ id }) {
    const [data, setData] = useState([]);
    const [commentsCount, setCommentsCount] = useState(0);

    useEffect(() => {
        async function fetchData() {
            try {
            
            const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${id}`,
            {
                headers: {
                    Authorization:
                    `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDliNzZjZWM5NGZiODAwMTQ4MjZhZmIiLCJpYXQiOjE2ODc5MTAwOTQsImV4cCI6MTY4OTExOTY5NH0._Pm1wByVW9N8iA0zxYmLw69YUQNGIZuIX9O2m8Nq4vs`,
                },
            });
            const json = await response.json();
                setData(json);
            } catch (error) {
                console.error("FETCH ERROR", error);
            }
        }
        fetchData();
    }, [commentsCount, id]);

    return (
        <>
        <p className="text-dark text-center fs-5 fw-bolder my-0 w-100"> - USERS REVIEWS - <hr /></p>

            <NewCommentArea 
                id={id} 
                setCommentsCount={setCommentsCount} 
            />

            <CommentList 
                data={data} 
                setCommentsCount={setCommentsCount} 
            />

        </>
    );
}
