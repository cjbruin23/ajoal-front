<script setup lang="ts">
import LoginButton from './components/LoginButton.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <Home msg="You did it!" />
      <LoginButton />
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
</style>
