// api.js
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';

export const getTasks = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/tasks/`);
        return response.data;
    } catch (error) {
        console.error("Error fetching tasks:", error);
        throw error;
    }
};

export const deleteTask = async (id) => {
    try {
        const response = await axios.delete(`${API_BASE_URL}/tasks/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error deleting task:", error);
        throw error;
    }
};

export const updateTask = async (id, taskData) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/tasks/${id}`, taskData);
        return response.data;
    } catch (error) {
        console.error("Error updating task:", error);
        throw error;
    }
};