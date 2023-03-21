import { Auth0Client, createAuth0Client } from "@auth0/auth0-spa-js";
import { user, isAuthenticated, popupOpen } from "./stores/authStore";
import config from "./auth_config";

const createClient = async (): Promise<Auth0Client> => {
  let auth0Client = await createAuth0Client({
    domain: config.domain,
    clientId: config.clientId,
    authorizationParams: {
      display: "popup",
      prompt: "login",
      redirect_uri: window.location.href,
    },
  });

  return auth0Client;
};

const loginWithPopup = async (client: Auth0Client): Promise<void> => {
  popupOpen.set(true);
  try {
    await client.loginWithPopup();
    const userFromAuth0 = await client.getUser();
    if (!!userFromAuth0) {
      user.set(userFromAuth0);
    }
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
