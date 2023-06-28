import React, { useState, useEffect } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';
import './StickyButton.css';

const StickyButton = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleScroll = () => {
        if (window.scrollY > 300) {
        setShowButton(true);
        } else {
        setShowButton(false);
        }
    };

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className={`sticky-button${showButton ? ' show' : ''}`}>
        <FaArrowCircleUp onClick={handleClick} />
        </div>
    );
};

export default StickyButton;
