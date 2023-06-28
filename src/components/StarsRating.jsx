import React, { useState } from "react";
import { FaStar } from 'react-icons/fa';
import './StarsRating.css';

const StarsRating = ( { userRating, setUserRating, book }) => {

    // const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

    return (
        <div className="rating mb-3">
            {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1

                return (
                    <label>
                        <input 
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            onClick={() => {
                                setUserRating(ratingValue)
                            }}
                        />
                        <FaStar 
                            className="star"
                            size={25}
                            color={ratingValue <= ( hover || userRating) ? "#ffc107" : "#e4e5e9"}
                            onMouseEnter={() => setHover(ratingValue)}
                            onMouseLeave={() => setHover(null)}
                        />
                    </label>
                    )
            })}
            <p className="fw-bolder">You rated <i className="text-light">"{book.title}"</i> <span className="title-rating"> {userRating} {!userRating && "0 ☆" }{userRating && "★"}</span></p>
        </div>
    );
};

export default StarsRating;