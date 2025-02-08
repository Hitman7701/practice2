<script setup>
import { ref } from 'vue'

const firstname = ref('')
const lastname = ref('')
const email = ref('')
const isAdult = ref('adult')

const userWaiting = ref([])

const handleSubmit = () => {
  const newPerson = {
    firstname: firstname.value,
    lastname: lastname.value,
    email: email.value,
    isAdult: isAdult.value,
  }
  userWaiting.value.push(newPerson)
}
</script>

<template>
  <main>
    <section class="form">
      <form @submit.prevent="handleSubmit">
        <label for="firstname">Firstname :</label>
        <input
          type="text"
          name="firstname"
          id="firstname"
          placeholder="Alfred"
          v-model="firstname"
        />

        <label for="lastname">Lastname :</label>
        <input type="text" name="lastname" id="lastname" placeholder="Smith" v-model="lastname" />

        <label for="email">Email :</label>
        <input type="email" name="email" id="email" placeholder="alfred@mail.com" v-model="email" />

        <label
          >Adult <input type="radio" value="adult" id="adult" name="isAdult" v-model="isAdult"
        /></label>
        <label
          >Minor <input type="radio" value="minor" id="minor" name="isAdult" v-model="isAdult"
        /></label>

        <input type="submit" value="Add to waiting list" />
      </form>
    </section>
    <section>
      <h1>Waiting list</h1>
      <p v-if="userWaiting.length === 0">Nobody on the list, yet !!!</p>
      <div v-else>
        <div v-for="person in userWaiting" :key="person.firstname + person.lastname">
          <p>Name : {{ firstname }} {{ lastname }}</p>
          <p>Email : {{ email }}</p>
          <p>is {{ isAdult }}</p>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
main {
  height: calc(100vh - 60);
  width: 100vh;
  display: flex;
}

.form {
  border: 1px green solid;
  height: 100%;
  width: 100%;
}

form {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
