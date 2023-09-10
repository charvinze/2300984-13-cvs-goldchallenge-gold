import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/carrental');
    };

    return (
        <div>
            <h1>Home Page</h1>
            <button onClick={handleButtonClick}>Choose Cars</button>
        </div>
    );
}

export default Home;
