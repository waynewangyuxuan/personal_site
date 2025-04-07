import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";
import "./Education.css";

function Education() {
    return (
        <motion.div 
            className="education-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <h2 className="education-header">Education</h2>
            <div className="education-content">
                <div className="education-icon">
                    <FaGraduationCap />
                </div>
                <div className="education-details">
                    <h3>Bachelor of Science/Master of Science in Computer Science, Math</h3>
                    <h4>New York University, Tandon School of Engineering</h4>
                    <p className="education-date">Expected May 2026</p>
                    <div className="education-info">
                        <p><strong>GPA:</strong> 3.944</p>
                        <p><strong>Focus:</strong>Search Engine Optimization, Data Pipeline Development</p>
                        <p><strong>Coursework:</strong> Computer Architecture, Database Systems, and Operating Systems,  Network Security, Computer Networking, Data Structures, Cloud Computing</p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default Education; 