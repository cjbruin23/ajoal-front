import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import MainAppBar from "./components/AppBar/AppBar";
import axios from "axios";
import "./App.css";
import WelcomeBody from "./components/WelcomeBody/WelcomeBody";

interface User {
  authId: string;
  nickname: string;
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#0012c4",
    },
  },
  typography: {
    fontFamily: '"Helvetica Neue"',
  },
});

function App() {
  const { isAuthenticated, user } = useAuth0();

  useEffect(() => {
    if (isAuthenticated) {
      const userData = { authId: user?.sub, nickname: user?.nickname } as User;
      axios({
        url: "http://localhost:8000/users",
        method: "POST",
        data: userData,
      });
    }
  }, [isAuthenticated]);

  return (
    <ThemeProvider theme={theme}>
      <div>
        <MainAppBar></MainAppBar>
        {!isAuthenticated ? <WelcomeBody></WelcomeBody> : <div></div>}
      </div>
    </ThemeProvider>
  );
}

export default App;
