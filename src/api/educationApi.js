import axios from 'axios';

const API_URL = 'http://localhost:5000/api/education'; // Adjust port if needed

export const getEducation = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};
