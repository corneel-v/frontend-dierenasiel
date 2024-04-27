import axios from 'axios'; 

const baseUrl = "http://localhost:9000/api/dieren";

export const getAll = async () => {
  
  const response = await axios.get(baseUrl);
  console.log(response);
  return response;
};

export const getDierById = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}`);
  return response.data;
};

