<script>
  import { onMount } from "svelte";
  import axios from "axios";
  import config from "../auth_config";

  onMount(async () => {
    console.log("config", config);
    axios
      .get("http://localhost:3000/")
      .then((res) => {
        console.log("res", res);
      })
      .catch((err) => {
        console.log("err", err);
      });
  });
</script>

<h1>Welcome to SvelteKit</h1>
<p>
  Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>
