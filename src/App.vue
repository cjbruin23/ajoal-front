<script setup lang="ts">
import AppBar from './components/AppBar.vue'
</script>

<template>
  <v-app>
    <header>
      <div>
        <AppBar />
      </div>
    </header>
  </v-app>
  <RouterView />
</template>

<style scoped></style>
