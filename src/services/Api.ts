/* eslint-disable no-throw-literal */
import axios, { AxiosError } from "axios";

const API_ENDPOINT = "https://jsonplaceholder.typicode.com/posts";

interface DataResposeProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const postFormData = async (data: any): Promise<DataResposeProps> => {
  try {
    const response = await axios.post<DataResposeProps>(API_ENDPOINT, data);
    return response.data;
  } catch (error) {
    throw error as AxiosError;
  }
};

export const getFormData = async (): Promise<DataResposeProps[]> => {
  try {
    const response = await axios.get<DataResposeProps[]>(API_ENDPOINT);
    return response.data;
  } catch (error) {
    throw error as AxiosError;
  }
};
