import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import MainAppBar from "./components/AppBar/AppBar";
import QuestionHome from "./components/QuestionHome/QuestionHome";
import axios from "axios";
import WelcomeBody from "./components/WelcomeBody/WelcomeBody";
import "./App.css";

interface User {
  authId: string;
  nickname: string;
}
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
      <div>
        <MainAppBar></MainAppBar>
        {!isAuthenticated ? (
          <WelcomeBody></WelcomeBody>
        ) : (
          <QuestionHome></QuestionHome>
        )}
      </div>
  );
}

export default App;
