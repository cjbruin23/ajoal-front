import { useAuth0 } from "@auth0/auth0-react";
import MainAppBar from "./components/AppBar";
import "./App.css";

function App() {
  const { isAuthenticated, user } = useAuth0();
  console.log("isAuthenticated", isAuthenticated);
  console.log("use", user);
  return (
    <div>
      <MainAppBar></MainAppBar>
    </div>
  );
}

export default App;
