import React from 'react';
import { useNavigate } from 'react-router-dom';

function CarRental() {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate('/');
    };

    return (
        <div>
            <h1>Select a Car</h1>
            {/* Add your car selection logic and UI here */}
            <button onClick={handleGoBack}>Go Back to Home</button>
        </div>
    );
}

export default CarRental;
