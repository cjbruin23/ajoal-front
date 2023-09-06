import LoginButton from "../LoginButton/LoginButton";
import LogoutButton from "../LogoutButton";
import "./AppBar.css";

const MainAppBar = () => {
  return (
    <div>
      <LoginButton></LoginButton>
      <LogoutButton></LogoutButton>
    </div>

  );
};

export default MainAppBar;
