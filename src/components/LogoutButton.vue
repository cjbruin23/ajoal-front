<script setup lang="ts">
import { useAuth0 } from '@auth0/auth0-vue'

const { loginWithRedirect, logout } = useAuth0()

const handleLogout = (): void => {
  logout({ logoutParams: { returnTo: window.location.origin } })
}
</script>

<template>
  <v-btn variant="tonal" color="deep-purple-darken-1" @click="handleLogout">Log Out</v-btn>
</template>
