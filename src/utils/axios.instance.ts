import axios from "axios";
import { token } from "./localstorage.token";

const PROD_API_URL = "";
const DEV_API_URL = "";

export const baseUrl: string =
  process.env.NODE_ENV === "production" ? PROD_API_URL : DEV_API_URL;

export const instance = axios.create({
  baseURL: `${baseUrl}`,
  headers: {
    "Content-Type": "application/json",
  },
});

const configurator = async (config: any) => {
  config.headers.Authorization = `Bearer ${token.get()}`;
  return config;
};

instance.interceptors.request.use(configurator, console.info);

export type AxiosReturnType = { data: null | any; error: null | any };
