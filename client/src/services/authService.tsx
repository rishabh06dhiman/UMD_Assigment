// authService.ts
import axios, { AxiosResponse, AxiosError } from "axios";

const API_URL = "https://reqres.in/api";

interface LoginCredentials {
  email: string;
  password: string;
}

export const login = async (credentials: LoginCredentials) => {
  try {
    const response: AxiosResponse<{ token: string }> = await axios.post(
      `${API_URL}/login`,
      credentials
    );
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError<{ error: string }>;
    throw new Error(
      axiosError.response?.data.error || "An error occurred during login."
    );
  }
};

interface SignUpData {
  email: string;
  password: string;
}

export const signUp = async (data: SignUpData) => {
  try {
    const response: AxiosResponse<{ token: string }> = await axios.post(
      `${API_URL}/register`,
      data
    );
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError<{ error: string }>;
    throw new Error(
      axiosError.response?.data.error || "An error occurred during sign-up."
    );
  }
};
