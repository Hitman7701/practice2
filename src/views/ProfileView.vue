<script setup>
import { inject } from 'vue'
import { RouterLink } from 'vue-router'

const GlobalStore = inject('GlobalStore')
</script>

<template>
  <h1>your profile</h1>

  <p>Firstname : {{ GlobalStore.user.value.firstname }}</p>
  <p>Lastname : {{ GlobalStore.user.value.lastname }}</p>
  <p>age : {{ GlobalStore.user.value.age }}</p>
  <p>job : {{ GlobalStore.user.value.job }}</p>

  <RouterLink :to="{ name: 'edit' }"><button>Edit profile</button></RouterLink>
</template>
