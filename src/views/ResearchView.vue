<script setup>
import { personsList } from '../assets/data.js'
import { ref } from 'vue'

const personSearched = ref('')

const result = ref(null)

const handleSubmit = () => {
  const personFound = personsList.find((person) => {
    return personSearched.value.toLowerCase() === person.firstname.toLowerCase()
  })
  result.value = personFound
}

console.log(result.value)
</script>

<template>
  <main>
    <div>
      <h2>Research by name</h2>
      <form @submit.prevent="handleSubmit">
        <input
          type="text"
          placeholder="Toto"
          name="research"
          id="research"
          v-model="personSearched"
        />
        <input type="submit" value="Search" />
      </form>
    </div>
    <div>
      <p v-if="result === null">Enter a firstname</p>
      <p v-else-if="result === undefined">This name doesn't exist in the list, sorry</p>
      <div v-else>
        <h1>Found it !!!</h1>
        <p>{{ result.firstname }} {{ result.lastname }}</p>
        <p>{{ result.age }} ans</p>
        <p>{{ result.job }}</p>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  display: flex;
}
</style>
