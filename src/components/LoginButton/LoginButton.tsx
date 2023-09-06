import { useAuth0 } from "@auth0/auth0-react";
import "./LoginButton.css";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated, user } = useAuth0();

  if (isAuthenticated) {
    return (
      <div className="login">
        Hello, {user?.nickname ? user?.nickname : user?.name}
      </div>
    );
  }
  return (
    <button
      type="button"
      onClick={() => loginWithRedirect()}
    >
      Login
    </button>
  );
};

export default LoginButton;
