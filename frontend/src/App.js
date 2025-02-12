import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar'; // Navigation Bar
import Timeline from './components/Timeline'; // Timeline Component
import Bio from './components/Bio'; // Bio Component
import Contact from './components/Contact'; // Contact Page
import './App.css'; // Global Styles

// App Component: Main application structure
function App() {
    return (
        <Router>
            <div className="app-container">
                {/* Persistent NavBar */}
                <NavBar />
                {/* Define Routes */}
                <Routes>
                    <Route path="/" element={<Timeline />} /> {/* Set Timeline as Home */}
                    <Route path="/bio" element={<Bio />} />
                    <Route path="/contact" element={<Contact />} /> {/* Contact Route */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;