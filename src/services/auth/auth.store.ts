import { makeAutoObservable } from "mobx";
import { AuthApi } from "./auth.api";
import { StateType, ISignIn, ISignUp } from "./auth.interface";

class AuthStore implements StateType {
  isLogined: boolean = false;
  error: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  async auth() {
    const data = await AuthApi.auth();
    if (data.error) {
      this.error = data.error;
    } else {
      this.isLogined = true;
    }
  }

  async signIn(body: ISignIn) {
    const data = await AuthApi.signIn(body);
    if (data.error) {
      this.error = data.error;
    } else {
      this.isLogined = true;
    }
  }

  async signUp(body: ISignUp) {
    const data = await AuthApi.signUp(body);
    if (data.error) {
      this.error = data.error;
    } else {
      this.isLogined = true;
    }
  }

  logout() {
    this.error = null;
    this.isLogined = false;
  }

  get errorMsg(): string {
    if (this.error) {
      return `Error: ${this.error}`;
    } else {
      return ``;
    }
  }
}

export default new AuthStore();
