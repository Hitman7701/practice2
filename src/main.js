import './assets/main.css'

import { createApp, ref } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

const user = ref({
  gender: 'female',
  firstname: 'Sophia',
  lastname: 'Rodriguez',
  age: 31,
  job: 'environmental scientist',
})

const editUser = (newInfos) => {
  if (newInfos.firstname) {
    user.value.firstname = newInfos.firstname
  }
  if (newInfos.lastname) {
    user.value.lastname = newInfos.lastname
  }
  if (newInfos.age) {
    user.value.age = newInfos.age
  }
  if (newInfos.job) {
    user.value.job = newInfos.job
  }
}

app.provide('GlobalStore', { user: user, editUser: editUser })

app.use(router)

app.mount('#app')
