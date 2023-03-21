<script lang="ts">
  import { onMount } from "svelte";
  import axios from "axios";
  import auth from "../authService";
  import { isAuthenticated, user } from "../stores/authStore";
  import type { Auth0Client } from "@auth0/auth0-spa-js";

  let auth0Client: Auth0Client;

  onMount(async () => {
    auth0Client = await auth.createClient();
    isAuthenticated.set(await auth0Client.isAuthenticated());
    const auth0User = await auth0Client.getUser();
    if (!!auth0User) {
      console.log("auth0user", auth0User);
      user.set(auth0User);
    } else {
      console.log("no user", auth0User);
      user.set({});
    }
    axios
      .get("http://localhost:3000/")
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

<h1>Welcome to SvelteKit</h1>
<p>
  Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>
<button on:click={login}> Login </button>
<button on:click={logout}> Logout </button>
