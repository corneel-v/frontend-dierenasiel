import axios from 'axios'; 

const baseUrl = "http://localhost:9000/api";

const createForm = async (userdata) => {
    console.log(userdata);
    try {
      const response = await axios.post(`${baseUrl}/adoptie`, userdata);
      return response;
    } catch (error) {
      throw error;
    }
};

export default createForm;
