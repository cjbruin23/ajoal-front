import {
  PUBLIC_AUTH0_CLIENT_ID,
  PUBLIC_AUTH0_DOMAIN,
} from "$env/static/public";

interface Auth0Config {
  domain: string;
  clientId: string;
}

const config: Auth0Config = {
  domain: PUBLIC_AUTH0_DOMAIN,
  clientId: PUBLIC_AUTH0_CLIENT_ID,
};

export default config;
