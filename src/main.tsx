import { Auth0Provider } from "@auth0/auth0-react";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Auth0Provider
      domain="pareate.us.auth0.com"
      clientId="3ghXrcAvTiUSdFHO2DYuSI8NUKIAQuVl"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
