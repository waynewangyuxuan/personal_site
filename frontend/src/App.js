import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Timeline from './components/Timeline'; // Import the Timeline component
import './App.css'; // Import CSS for fade effects

function Home() {
    const [fadeClass, setFadeClass] = useState('fade-in'); // Manage fade-in/out class
    const navigate = useNavigate();

    useEffect(() => {
        // Trigger fade-out after 1 second
        const fadeOutTimer = setTimeout(() => {
            setFadeClass('fade-out');
        }, 1000);

        // Navigate to timeline after 1.5 seconds
        const navigateTimer = setTimeout(() => {
            navigate('/timeline');
        }, 1500);

        // Cleanup timers
        return () => {
            clearTimeout(fadeOutTimer);
            clearTimeout(navigateTimer);
        };
    }, [navigate]);

    return (
        <div className="home-container">
            <h1 className={`welcome-message ${fadeClass}`}>
                Welcome to my personal website!
            </h1>
        </div>
    );
}

function App() {
    return (
        <Router>
            <div className="app-container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/timeline" element={<Timeline />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;