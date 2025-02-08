<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink :to="{ name: 'home' }">Home</RouterLink>
      <RouterLink :to="{ name: 'research' }">Research</RouterLink>
      <RouterLink :to="{ name: 'profile' }">Profile</RouterLink>
      <RouterLink :to="{ name: 'edit' }">Edit</RouterLink>
    </nav>
  </header>
</template>

<style scoped>
header {
  height: 60px;
  border-bottom: 2px coral solid;
}

nav {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 20px;
}
</style>
