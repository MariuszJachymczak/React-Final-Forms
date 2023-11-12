/* eslint-disable no-throw-literal */
import axios, { AxiosError } from "axios";
import { DataResponseProps } from "./../types/types";
const API_ENDPOINT = "https://jsonplaceholder.typicode.com/posts";

export const postFormData = async (data: any): Promise<DataResponseProps> => {
  try {
    const response = await axios.post<DataResponseProps>(API_ENDPOINT, data);
    return response.data;
  } catch (error) {
    throw error as AxiosError;
  }
};

export const getFormData = async (): Promise<DataResponseProps[]> => {
  try {
    const response = await axios.get<DataResponseProps[]>(API_ENDPOINT);
    return response.data;
  } catch (error) {
    throw error as AxiosError;
  }
};
