import axios from 'axios'; 

const baseUrl = "http://localhost:9000/api/dieren";

export const getAll = async () => {
  console.log("getAll");
  const {data} = await axios.get(baseUrl);
  console.log(data);
  return data.dieren;
};

export const getDierById = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}`);
  return response.data;
};

export const createForm= async (userdata) => {
  try {
    const response = await axios.post(`${baseUrl}`, userdata);
    return response;
  } catch (error) {
    throw error;
  }
};


