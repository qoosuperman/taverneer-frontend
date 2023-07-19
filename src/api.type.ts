import { AxiosResponse } from "axios";

// signIn
interface SignInFormParams {
  user: {
    email: string;
    password: string;
  };
}

export interface SignInResponse {
  status: string;
  message: string;
}

export type ApiUserSignIn = (
  data: SignInFormParams
) => Promise<AxiosResponse<SignInResponse>>;

// signOut
export interface SignOutResponse {
  status: string;
  message: string;
}

export type ApiUserSignOut = () => Promise<AxiosResponse<SignOutResponse>>;

// currentUser
export interface CurrentUserResponse {
  status: string;
  message?: string;
  user?: { name: string, is_admin: boolean };
}

export type ApiCurrentUser = () => Promise<AxiosResponse<CurrentUserResponse>>;
