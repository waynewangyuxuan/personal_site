import React, { useEffect, useState } from "react";
import { fetchTimeline } from "../api";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";
import "./Timeline.css";

const iconMapping = {
  "graduation-cap": <FaGraduationCap />,
  briefcase: <FaBriefcase />,
};

function Timeline() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const loadTimeline = async () => {
      try {
        const response = await fetchTimeline();
        setEvents(response.data);
      } catch (error) {
        console.error("Error fetching timeline:", error);
      }
    };
    loadTimeline();
  }, []);

  return (
    <div className="timeline-wrapper">
      <h1 className="timeline-header">My Journey</h1>
      <div className="timeline">
        <div className="timeline-line"></div>
        {events.map((event, index) => (
          <div
            key={event.id}
            className={`timeline-item ${
              index % 2 === 0 ? "left-item" : "right-item"
            }`}
          >
            {index % 2 !== 0 && (
              <div className="timeline-icon">
                {iconMapping[event.icon] || <FaGraduationCap />}
              </div>
            )}
            <div className="timeline-card">
              <div className="timeline-card-inner">
                {/* Front Side */}
                <div className="timeline-card-front">
                  <span className="timeline-date">{event.date}</span>
                  <h3 className="timeline-title">{event.title}</h3>
                  <p className="timeline-description">{event.description}</p>
                </div>
                {/* Back Side */}
                <div className="timeline-card-back">
                  <h3 className="timeline-back-header">Details</h3>
                  <p className="timeline-details">
                    {event.details || "No additional details available."}
                  </p>
                </div>
              </div>
            </div>
            {index % 2 === 0 && (
              <div className="timeline-icon">
                {iconMapping[event.icon] || <FaGraduationCap />}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Timeline;