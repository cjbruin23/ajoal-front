import { useAuth0 } from "@auth0/auth0-react";
import MainAppBar from "./components/AppBar";
import "./App.css";
import { useEffect } from "react";
import axios from "axios";

interface User {
  userId: string;
  nickname: string;
}

function App() {
  const { isAuthenticated, user } = useAuth0();
  console.log("isAuthenticated", isAuthenticated);
  useEffect(() => {
    if (isAuthenticated) {
      console.log("make api call here");
      console.log("use", user);
      const userData = { userId: user?.sub, nickname: user?.nickname } as User;
      axios({
        url: "http://localhost:8000/user",
        method: "POST",
        data: userData,
      });
    }
  }, [isAuthenticated]);
  return (
    <div>
      <MainAppBar></MainAppBar>
    </div>
  );
}

export default App;
