import { Toolbar, Typography } from "@mui/material";
import LoginButton from "../LoginButton/LoginButton";
import LogoutButton from "../LogoutButton";
import "./AppBar.css";

const MainAppBar = () => {
  return (
    <Toolbar>
      <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
        <a href="/">Periate</a>
      </Typography>
      <LoginButton></LoginButton>
      <LogoutButton></LogoutButton>
    </Toolbar>
  );
};

export default MainAppBar;
