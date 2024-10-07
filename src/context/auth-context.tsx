import { createContext, PropsWithChildren, useState } from "react";
import { components } from "../__generated__/schema";
import { getLocalAuthData } from "../utils";

interface AuthContext {
  authData: components["schemas"]["AuthenticationResponseDTO"] | null;
  setAuthData: (
    userData: components["schemas"]["AuthenticationResponseDTO"] | null
  ) => void;
}

const initialValue: AuthContext = {
  authData: null,
  setAuthData() {},
};

export const AuthContext = createContext(initialValue);

export default function AuthProvider({ children }: PropsWithChildren) {
  const localAuthData = getLocalAuthData();
  const [authData, setAuthData] = useState<
    components["schemas"]["AuthenticationResponseDTO"] | null
  >(localAuthData ? localAuthData : initialValue.authData);

  return (
    <AuthContext.Provider value={{ authData, setAuthData }}>
      {children}
    </AuthContext.Provider>
  );
}
