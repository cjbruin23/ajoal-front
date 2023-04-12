<script setup lang="ts">
import { useAuth0 } from '@auth0/auth0-vue'

const { loginWithRedirect } = useAuth0()

const handleLogin = (): void => {
  loginWithRedirect({
    appState: {
      target: '/profile'
    }
  })
}
</script>

<template>
  <v-btn variant="tonal" color="deep-purple-darken-1" @click="handleLogin">Log In</v-btn>
</template>
