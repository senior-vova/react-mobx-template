export interface ISignIn {
  email: string;
  password: string;
}

export interface ISignUp {
  name: string;
  email: string;
  password: string;
  repeatPassword: string;
}

export type StateType = {
  isLogined: boolean;
  error: string | null;
};
