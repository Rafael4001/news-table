import { AxiosResponse } from 'axios';
import axios from "axios";

import { API, API_KEY } from '../config'

const getData = (response: AxiosResponse) => {
  return response.data?.articles;
};

export const getNews = async (country: string, pageSize: number = 20) => {
  const API_URL = `${API}/top-headlines?country=${country}&category=technology&pageSize=${pageSize}&apiKey=${API_KEY}`;

  try {
    const response =
      await axios.get(API_URL)
        .then(getData)
        .then((res) => (res))
    return response
  } catch (error) {
    console.log(error)
  }
}


