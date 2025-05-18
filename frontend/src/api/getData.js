import axiosInstance from '../api/axiosInstance';

const getData = async (endpoint, reqBody = null) => {
  try {
    const res = reqBody
      ? await axiosInstance.post(endpoint, reqBody)
      : await axiosInstance.get(endpoint);
    return res.data;
  } catch (err) {
    console.error('Error in getData:', err);
    throw err;  // Propagate the error for handling elsewhere
  }
};

export default getData;