<script lang="ts">
  import { onMount } from "svelte";
  import axios from "axios";
  import auth from "../authService";
  import { user } from "../stores/authStore";
  import type { Auth0Client } from "@auth0/auth0-spa-js";
  import Button from "@smui/button";

  let auth0Client: Auth0Client;

  onMount(async () => {
    let accessToken: string;
    auth0Client = await auth.createClient();
    const auth0User = await auth0Client.getUser();

    if (!!auth0User) {
      user.set(auth0User);
      accessToken = await auth0Client.getTokenSilently();
    } else {
      user.set(null);
      accessToken = "";
    }

    axios
      .get("http://localhost:3000/", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => {
        console.log("res", res);
      })
      .catch((err) => {
        console.log("err", err);
      });
  });

  const login = () => {
    auth.loginWithPopup(auth0Client);
  };

  const logout = () => {
    auth.logout(auth0Client);
  };
</script>

<Button on:click={login}>Login</Button>
<Button on:click={logout}>Logout</Button>
