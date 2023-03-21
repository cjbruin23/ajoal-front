<script lang="ts">
  import { onMount } from "svelte";
  import axios from "axios";
  import auth from "../authService";
  import { user } from "../stores/authStore";
  import type { Auth0Client } from "@auth0/auth0-spa-js";

  let auth0Client: Auth0Client;

  onMount(async () => {
    auth0Client = await auth.createClient();
    const auth0User = await auth0Client.getUser();

    if (!!auth0User) {
      user.set(auth0User);
    } else {
      user.set(null);
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

<button on:click={login}> Login </button>
<button on:click={logout}> Logout </button>
