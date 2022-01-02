import { AxiosReturnType, instance } from "../../utils/axios.instance";
import { ISignIn, ISignUp } from "./auth.interface";

export const AuthApi = {
  auth: async (): Promise<AxiosReturnType> => {
    try {
      const resp = await instance.get(`/auth`);
      return { data: resp, error: null };
    } catch (error: any) {
      return { data: null, error };
    }
  },
  signIn: async (data: ISignIn): Promise<AxiosReturnType> => {
    try {
      const resp = await instance.post(`/login`, data);
      return { data: resp, error: null };
    } catch (error: any) {
      return { data: null, error };
    }
  },
  signUp: async (data: ISignUp): Promise<AxiosReturnType> => {
    try {
      const resp = await instance.post(`/register`, data);
      return { data: resp, error: null };
    } catch (error: any) {
      return { data: null, error };
    }
  },
};
