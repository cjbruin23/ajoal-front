import { useAuth0 } from "@auth0/auth0-react";
import "./App.css";

function App() {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  if (isAuthenticated) {
    return (
      <button
        onClick={() =>
          logout({ logoutParams: { returnTo: window.location.origin } })
        }
      >
        Logout
      </button>
    );
  }
  return (
    <>
      <button onClick={() => loginWithRedirect()}>Log In</button>
    </>
  );
}

export default App;
