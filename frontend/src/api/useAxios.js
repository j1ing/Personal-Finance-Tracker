import axiosInstance from './axiosInstance';

export const postData = async (endpoint, body) => {
  const res = await axiosInstance.post(endpoint, body);
  return res.data;
};

export const putData = async (endpoint, body) => {
  const res = await axiosInstance.put(endpoint, body);
  return res.data;
};

export const deleteData = async (endpoint, body) => {
  const res = await axiosInstance.delete(endpoint, { data: body });
  return res.data;
};