import React, { useEffect, useState } from "react";
import { FaGraduationCap, FaBriefcase, FaProjectDiagram } from "react-icons/fa";
import Bio from "./Bio"; // Import the Bio component
import Education from "./Education"; // Import the Education component
import "./Timeline.css";

const iconMapping = {
    "graduation-cap": <FaGraduationCap />,
    "briefcase": <FaBriefcase />,
    "project": <FaProjectDiagram />,
};

function Timeline() {
    const [experiences, setExperiences] = useState([]);
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const loadTimeline = async () => {
            try {
                const basePath = process.env.PUBLIC_URL || "";
                const response = await fetch(`${basePath}/seeder.json`);
                const data = await response.json();
                
                // Filter out education entries from experiences
                const filteredExperiences = data.experiences.filter(
                    exp => exp.icon !== "graduation-cap"
                );
                
                setExperiences(filteredExperiences);
                setProjects(data.projects);
            } catch (error) {
                console.error("Error fetching timeline:", error);
            }
        };
        loadTimeline();
    }, []);

    return (
        <div className="timeline-wrapper">
            {/* Bio Section Above Timeline */}
            <Bio />
            
            {/* Education Section */}
            <Education />

            {/* Experience Section */}
            <h1 className="timeline-header">Experience</h1>
            <div className="timeline">
                {experiences.map((event, index) => (
                    <div
                        key={index}
                        className={`timeline-item ${index % 2 === 0 ? "left-item" : "right-item"}`}
                    >
                        {index % 2 === 0 ? (
                            <div className="timeline-icon">{iconMapping[event.icon] || <FaBriefcase />}</div>
                        ) : null}

                        {/* Flip card container */}
                        <div className="timeline-card">
                            <div className="timeline-card-inner">
                                {/* Front side */}
                                <div className="timeline-card-front">
                                    <span className="timeline-date">{event.duration}</span>
                                    <h3 className="timeline-title">{event.title}</h3>
                                    <p className="timeline-description">{event.organization}</p>
                                </div>

                                {/* Back side */}
                                <div className="timeline-card-back">
                                    <h3>Details</h3>
                                    {event.responsibilities.map((task, i) => (
                                        <p key={i}>{task}</p>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {index % 2 !== 0 ? (
                            <div className="timeline-icon">{iconMapping[event.icon] || <FaBriefcase />}</div>
                        ) : null}
                    </div>
                ))}
            </div>

            {/* Projects Section */}
            <h1 className="timeline-header">Projects</h1>
            <div className="timeline">
                {projects.map((event, index) => (
                    <div
                        key={index}
                        className={`timeline-item ${index % 2 === 0 ? "left-item" : "right-item"}`}
                    >
                        {index % 2 === 0 ? (
                            <div className="timeline-icon">{iconMapping["project"]}</div>
                        ) : null}

                        {/* Flip card container */}
                        <div className="timeline-card">
                            <div className="timeline-card-inner">
                                {/* Front side */}
                                <div className="timeline-card-front">
                                    <span className="timeline-date">{event.duration}</span>
                                    <h3 className="timeline-title">{event.title}</h3>
                                </div>

                                {/* Back side */}
                                <div className="timeline-card-back">
                                    <h3>Details</h3>
                                    {event.responsibilities.map((task, i) => (
                                        <p key={i}>{task}</p>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {index % 2 !== 0 ? (
                            <div className="timeline-icon">{iconMapping["project"]}</div>
                        ) : null}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Timeline;