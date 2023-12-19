import { createAuth0Client } from "@auth0/auth0-spa-js";
import "./App.css";

const login = () => {
  console.log("login");
  console.log('clientId', import.meta.env.VITE_CLIENT_ID);
  const configureClient = async () => {
    const auth0Client = await createAuth0Client({
      domain: import.meta.env.VITE_AUTH0_DOMAIN,
      clientId: import.meta.env.VITE_CLIENT_ID
    });
    const userAuthenticated = await auth0Client.isAuthenticated();
    console.log('userAuthenticated', userAuthenticated)
  }

  configureClient();
};

const logout = () => {
  console.log("logout");
};

function App() {
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
