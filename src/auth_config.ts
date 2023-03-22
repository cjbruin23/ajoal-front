import {
  PUBLIC_AUTH0_CLIENT_ID,
  PUBLIC_AUTH0_DOMAIN,
  PUBLIC_AUDIENCE,
} from "$env/static/public";

interface Auth0Config {
  domain: string;
  clientId: string;
  audience: string;
}

const config: Auth0Config = {
  domain: PUBLIC_AUTH0_DOMAIN,
  clientId: PUBLIC_AUTH0_CLIENT_ID,
  audience: PUBLIC_AUDIENCE,
};

export default config;
