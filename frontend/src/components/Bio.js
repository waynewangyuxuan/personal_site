import React from "react";
import "./Bio.css";
import headshot from "../assets/headshot.jpg"; // Add your headshot image inside the `assets` folder

function Bio() {
    return (
        <div className="bio-container">
            <div className="bio-content">
                <img src={headshot} alt="Wayne Wang" className="bio-image" />
                <div className="bio-text">
                    <h2>Wayne Wang</h2>
                    <p>
                        I am a computer scientist passionate about search engines, information retrieval, and system design.
                        Currently studying at NYU, I specialize in optimizing retrieval algorithms, database indexing, and
                        scalable system architecture. My goal is to bridge **efficiency and innovation** in information access.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Bio;