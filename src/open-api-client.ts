import createClient from "openapi-react-query";
import createFetchClient, { Middleware } from "openapi-fetch";
import { paths } from "./__generated__/schema";
import { getLocalAuthData } from "./utils";

export const fetchClient = createFetchClient<paths>({
  baseUrl: import.meta.env.VITE_API_URL,
});

const authMiddelware: Middleware = {
  async onRequest({ request }) {
    const authData = getLocalAuthData();

    if (!authData) {
      return;
    }

    request.headers.set("Authorization", `${authData.token}`);
  },
};

fetchClient.use(authMiddelware);

export const $api = createClient(fetchClient);
