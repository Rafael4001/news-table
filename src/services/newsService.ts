import { AxiosResponse } from 'axios';
import axios from "axios";

const API_KEY = "e29d003027604b69b4ffa6472ec5b488";
const API = `http://newsapi.org/v2`;


const getData = (response: AxiosResponse) => {
  return response.data?.articles;
};

export const getNews = async (country: string) => {

  const API_URL = `${API}/top-headlines?country=${country}&category=technology&apiKey=${API_KEY}`;


  console.log('country', country)

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


