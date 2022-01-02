import { Navigate } from "react-router";
import { AuthApi } from "../services/auth/auth.api";
import { GuardType } from "../utils/guard";

const AuthGuard: GuardType = {
  guard: async (): Promise<boolean> => {
    try {
      const data = await AuthApi.auth();
      if (data.error) {
        return Promise.resolve(false);
      } else {
        // additional checks
        return Promise.resolve(true);
      }
    } catch (error) {
      return Promise.resolve(false);
    }
  },
  onLose: () => {
    return <Navigate to={"/"} />;
  },
};

export default AuthGuard;
