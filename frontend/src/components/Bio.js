import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./Bio.css";
import headshot from "../assets/headshot.jpg"; // Add your headshot image inside the `assets` folder

// Test comment for GitHub Actions deployment verification
function Bio() {
    return (
        <div className="bio-container" role="main">
            <motion.div 
                className="bio-content"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <motion.img 
                    src={headshot} 
                    alt="Wayne Wang 王宇轩" 
                    className="bio-image"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                />
                <div className="bio-text">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        Wayne Wang
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                    >
                        <p>
                            I'm Yuxuan (Wayne) Wang, a computer science researcher and engineer.
                        </p>
                        <p>
                            With experience in search algorithms, large-scale data processing, and software performance tuning, I enjoy bridging the gap between theoretical insights and real-world applications. My projects range from improving search ranking algorithms to optimizing build systems and developing scalable data pipelines.
                        </p>
                        <p>
                            I'm driven by curiosity and a desire to push the limits of efficiency and intelligence in computing. If you're interested in my work, feel free to explore my projects and research!
                        </p>
                    </motion.div>
                    
                    <motion.div 
                        className="social-links"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.5 }}
                    >
                        <a href="https://github.com/waynewangyuxuan" 
                           target="_blank" 
                           rel="noopener noreferrer"
                           aria-label="GitHub Profile">
                            <FaGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/yuxuan-wayne-wang" 
                           target="_blank" 
                           rel="noopener noreferrer"
                           aria-label="LinkedIn Profile">
                            <FaLinkedin />
                        </a>
                        <a href="mailto:yw5629@nyu.edu"
                           aria-label="Email Contact">
                            <FaEnvelope />
                        </a>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
}

export default Bio;