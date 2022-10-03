import axios, { AxiosResponse } from "axios";

axios.defaults.withCredentials = true;

export const axiosWithCredentials = axios;
export default axios;

// 定義 api baseUrl
// TODO: 使用 env 定義不同環境 baseUrl
const backendRequest = axios.create({
  baseURL: "http://localhost:8000/api/v1/",
});

// signIn Api
interface SignInFormParams {
  user: {
    email: string;
    password: string;
  };
}

interface SignInResponse {
  status: string;
  message: string;
}

type ApiUserSignIn = (
  data: SignInFormParams
) => Promise<AxiosResponse<SignInResponse>>;

export const apiUserSignIn: ApiUserSignIn = async (data) =>
  await backendRequest.post<SignInResponse>("/users/sign_in", data);

// signOut Api
interface SignOutResponse {
  status: string;
  message: string;
}

type ApiUserSignOut = () => Promise<AxiosResponse<SignOutResponse>>;

export const apiUserSignOut: ApiUserSignOut = async () =>
  await backendRequest.delete<SignOutResponse>("/users/sign_out");

// currentUser Api
interface CurrentUserResponse {
  status: string;
  message?: string;
  user?: { name: string };
}

type ApiCurrentUser = () => Promise<AxiosResponse<CurrentUserResponse>>;

export const apiCurrentUser: ApiCurrentUser = async () =>
  await backendRequest.get<CurrentUserResponse>("/current_user");
