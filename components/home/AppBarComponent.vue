<template>
  <v-app-bar clipped-left fixed app flat>
    <v-toolbar-title>
      <NuxtLink to="/new-job" class="title">IT &mdash; Jobs </NuxtLink>
    </v-toolbar-title>

    <div class="ml-auto mr-4 d-flex">
      <div class="mr-4">
        <v-text-field hide-details placeholder="Search job..." />
      </div>
      <div v-if="!isLoggedIn" class="d-flex align-center justify-center">
        <div>
          <LoginComponent v-if="true" class="mr-4" />
        </div>
        <div>
          <RegisterComponent />
        </div>
      </div>
      <div v-else>
        <v-icon large> mdi-account </v-icon>
      </div>
    </div>
  </v-app-bar>
</template>

<script>
import RegisterComponent from './AuthComponents/RegisterComponent.vue'
import LoginComponent from './AuthComponents/LoginComponent.vue'

export default {
  components: { RegisterComponent, LoginComponent },
  computed: {
    isLoggedIn() {
      return this.$store.getters['auth/isLoggedInGetter']
    },
  },
}
</script>

<style scoped>
.title {
  color: black;
  text-decoration: none;
}
</style>
