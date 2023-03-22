import { Auth0Client, createAuth0Client } from "@auth0/auth0-spa-js";
import { user, isAuthenticated, popupOpen, error } from "./stores/authStore";
import config from "./auth_config";

// The auth0 client utilizes the Authorization Code Grant Flow with PKCE
const createClient = async (): Promise<Auth0Client> => {
  // This will call getTokenSilently, specifying an audience here
  // means we do not need to do so again later
  let auth0Client = await createAuth0Client({
    domain: config.domain,
    clientId: config.clientId,
    authorizationParams: {
      display: "popup",
      prompt: "login",
      redirect_uri: window.location.href,
      audience: config.audience,
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
      isAuthenticated.set(true);
    }
  } catch (e) {
    console.error(e);
    error.set(e);
    isAuthenticated.set(false);
  } finally {
    popupOpen.set(false);
  }
};

const logout = (client: Auth0Client): void => {
  client.logout();
  isAuthenticated.set(false);
};

const auth = {
  createClient,
  loginWithPopup,
  logout,
};

export default auth;
