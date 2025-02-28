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
                        I'm Yuxuan (Wayne) Wang, a computer science researcher and engineer.
                    </p>
                    <p>
                        With experience in search algorithms, large-scale data processing, and software performance tuning, I enjoy bridging the gap between theoretical insights and real-world applications. My projects range from improving search ranking algorithms to optimizing build systems and developing scalable data pipelines.
                    </p>
                    <p>
                        I'm driven by curiosity and a desire to push the limits of efficiency and intelligence in computing. If you're interested in my work, feel free to explore my projects and research!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Bio;