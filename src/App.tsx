import { Auth0Client, createAuth0Client } from "@auth0/auth0-spa-js";
import "./App.css";
import { UserState, useUserState } from "./state/user";

let auth0Client: Auth0Client;

const configureClient = async () => {
  auth0Client = await createAuth0Client({
    domain: import.meta.env.VITE_AUTH0_DOMAIN,
    clientId: import.meta.env.VITE_CLIENT_ID,
  });
};

const login = async () => {
  useUserState
  await auth0Client.loginWithPopup();
  const userAuthenticated = await auth0Client.isAuthenticated();
  console.log("userAuthenticated", userAuthenticated);
  console.log("user", await auth0Client.getUser());
};

const logout = async () => {
  console.log("logout");
  await auth0Client.logout({
    logoutParams: {
      returnTo: window.location.origin
    }
  });
  console.log("userAuthenticated", await auth0Client.isAuthenticated());
  console.log("user", await auth0Client.getUser());

};

function App() {
  configureClient();
  const [userStore, setUserStore] = useUserState();
  console.log((userStore as UserState).isAuthenticated)

  return (
    <>
      <h2>SPA Authentication Sample</h2>
      <p>Welcome to our page!</p>
      <button id="btn-login" onClick={login}>
        Log in
      </button>
      <button id="btn-logout" onClick={logout}>
        Log out
      </button>
    </>
  );
}

export default App;
