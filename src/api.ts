import axios from "axios";

import {ApiCurrentUser, ApiUserSignIn, ApiUserSignOut, CurrentUserResponse, SignInResponse, SignOutResponse} from "./api.type";

axios.defaults.withCredentials = true;

export const axiosWithCredentials = axios;
export default axios;

// 定義 api baseUrl
const backendRequest = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_BASEURL}api/v1/`
});

// signIn Api
export const apiUserSignIn: ApiUserSignIn = async (data) =>
  await backendRequest.post<SignInResponse>("/users/sign_in", data);

// signOut Api
export const apiUserSignOut: ApiUserSignOut = async () =>
  await backendRequest.delete<SignOutResponse>("/users/sign_out");

// currentUser Api
export const apiCurrentUser: ApiCurrentUser = async () =>
  await backendRequest.get<CurrentUserResponse>("/current_user");

// ingredients Api
// interface IngredientsResponse {
//   status: string;
//   ingredients: Array<{ name: string; }>;
// }

// type GetIngredients = () => Promise<AxiosResponse<IngredientsResponse>>;

// export const GetIngredients: GetIngredients = async (data) =>
//   await backendRequest.get<SignInResponse>("/admin/ingredients", data);
