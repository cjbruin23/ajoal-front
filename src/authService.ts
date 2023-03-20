import {
  Auth0Client,
  createAuth0Client,
  type PopupLoginOptions,
} from "@auth0/auth0-spa-js";
import { user, isAuthenticated, popupOpen } from "./stores/auth";
import config from "./auth_config";

const createClient = async (): Promise<Auth0Client> => {
  let auth0Client = await createAuth0Client({
    domain: config.domain,
    clientId: config.clientId,
  });

  return auth0Client;
};

const loginWithPopup = async (
  client: Auth0Client,
  options: PopupLoginOptions
): Promise<void> => {
  popupOpen.set(true);
  try {
    await client.loginWithPopup(options);

    user.set((await client.getUser)<{}>());
    isAuthenticated.set(true);
  } catch (e) {
    console.error(e);
  } finally {
    popupOpen.set(false);
  }
};

const logout = (client: Auth0Client): Promise<void> => {
  return client.logout();
};

const auth = {
  createClient,
  loginWithPopup,
  logout,
};

export default auth;