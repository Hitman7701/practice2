<script setup>
import { inject, ref } from 'vue'
import { useRouter } from 'vue-router'

const GlobalStore = inject('GlobalStore')

const firstname = ref(GlobalStore.user.value.firstname)
const lastname = ref(GlobalStore.user.value.lastname)
const age = ref(GlobalStore.user.value.age)
const job = ref(GlobalStore.user.value.job)

const handleSubmit = () => {
  console.log({
    firstname: firstname.value,
    lastname: lastname.value,
    age: age.value,
    job: job.value,
  })

  GlobalStore.editUser({
    firstname: firstname.value,
    lastname: lastname.value,
    age: age.value,
    job: job.value,
  })
  router.push({ name: 'profile' })
}

const router = useRouter()
</script>

<template>
  <h1>Edit your profile</h1>
  <form @submit.prevent="handleSubmit">
    <label
      >Firstname<input
        type="text"
        name="firstname"
        id="firstname"
        placeholder="Toto"
        v-model="firstname"
    /></label>
    <label
      >Lastname<input
        type="text"
        name="lastname"
        id="lastname"
        placeholder="Toto"
        v-model="lastname"
    /></label>
    <label>Age<input type="number" name="age" id="age" placeholder="13" v-model="age" /></label>
    <label>Job<input type="text" name="job" id="job" placeholder="job" v-model="job" /></label>
    <button>Valid changes</button>
  </form>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}
</style>
