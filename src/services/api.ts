import axios from "axios";
import { Posts } from "../Types/product";

const BASE_URL = "https://jsonplaceholder.typicode.com";
const axiosinstance = axios.create({ baseURL: BASE_URL });

export const getPosts = async () => {
  return (await axiosinstance.get<Posts[]>("/posts")).data.map(
    (posts) => posts
  );
};

console.log("hello world");
