import React, { useState } from 'react';
import "./App.css";
const App = () => {
    const [rating, setRating] = useState(0);
    const [hoveredRating, setHoveredRating] = useState(0);

    const handleMouseEnter = (value) => {
        setHoveredRating(value);
    };

    const handleMouseLeave = () => {
        setHoveredRating(0);
    };

    const handleClick = (value) => {
        setRating(value);
    };

    const renderStar = (value) => {
        const filled = value <= (hoveredRating || rating);
        return (
            <span
                key={value}
                className={`star ${filled ? 'filled' : ''}`}
                onMouseEnter={() => handleMouseEnter(value)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick(value)}
            >
                ★
            </span>
        );
    };

    return (
        <div>
            {[1, 2, 3, 4, 5].map((value) => renderStar(value))}
            <p>Rating: {rating}</p>
        </div>
    );
};

export default App;
