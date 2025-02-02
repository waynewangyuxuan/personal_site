import axios from 'axios';

// Create a reusable axios instance
const API = axios.create({
    baseURL: 'http://127.0.0.1:5001', // Flask backend URL
});

// Define all API calls
const fetchRootMessage = () => API.get('/'); // For fetching the root message
const fetchTimeline = () => API.get('/api/timeline'); // For fetching timeline data
const createTimelineEvent = (event) => API.post('/api/timeline', event); // Add a timeline event
const updateTimelineEvent = (id, event) => API.put(`/api/timeline/${id}`, event); // Edit an event
const deleteTimelineEvent = (id) => API.delete(`/api/timeline/${id}`); // Delete an event

// Export as named functions
export {
    fetchRootMessage,
    fetchTimeline,
    createTimelineEvent,
    updateTimelineEvent,
    deleteTimelineEvent,
};