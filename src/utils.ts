import { jwtDecode } from "jwt-decode";
import { components } from "./__generated__/schema";
import { Constants } from "./constants";

export const getLocalAuthData = ():
  | components["schemas"]["AuthenticationResponseDTO"]
  | null => {
  try {
    const authDataString = localStorage.getItem(
      Constants.AUTH_DATA_STORAGE_KEY
    );
    if (!authDataString) {
      return null;
    }

    const authData: components["schemas"]["AuthenticationResponseDTO"] =
      JSON.parse(authDataString);
    const payload = jwtDecode(authData.token);

    if (!payload.exp || Date.now() >= payload.exp * 1000) {
      throw new Error();
    }

    return authData;
  } catch {
    localStorage.removeItem(Constants.AUTH_DATA_STORAGE_KEY);
    return null;
  }
};
