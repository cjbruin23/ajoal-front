import { IconButton, Toolbar, Typography, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LoginButton from "./LoginButton/LoginButton";
import LogoutButton from "./LogoutButton";

const MainAppBar = () => {
  return (
    <Toolbar>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
      >
        <MenuIcon />
      </IconButton>

      <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
        <a href="/">Periate</a>
      </Typography>
      <LoginButton></LoginButton>
      <LogoutButton></LogoutButton>
    </Toolbar>
  );
};

export default MainAppBar;
