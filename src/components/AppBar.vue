<script setup lang="ts">
import { useAuth0 } from '@auth0/auth0-vue'
import LoginButton from './LoginButton.vue'
import LogoutButton from './LogoutButton.vue'


const {isAuthenticated} = useAuth0();
</script>

<template>
  <v-app-bar :elevation="3">
  <template v-if="!isAuthenticated">
    <LoginButton />
  </template>
  <template v-if="isAuthenticated">
    <LogoutButton />
  </template>
  </v-app-bar>
</template>