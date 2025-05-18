import axios from 'axios';

const API_BASE_URL = '/api'; // adjust if needed

export const fetchSkills = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/skills`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch skills:', error);
    throw error;
  }
};
