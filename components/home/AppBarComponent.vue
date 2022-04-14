<template>
  <v-app-bar clipped-left fixed app>
    <v-toolbar-title>
      <NuxtLink to="/" class="title">IT &mdash; Jobs </NuxtLink>
    </v-toolbar-title>

    <div class="ml-auto mr-4 d-flex">
      <div class="mr-4">
        <v-text-field hide-details placeholder="Search job..." />
      </div>
      <div class="d-flex align-center justify-center">
        <div>
          <LoginComponent v-if="true" class="mr-4" />
        </div>
        <div>
          <RegisterComponent />
        </div>
      </div>
    </div>
  </v-app-bar>
</template>

<script>
import RegisterComponent from './AuthComponents/RegisterComponent.vue'
import LoginComponent from './AuthComponents/LoginComponent.vue'

export default {
  components: { RegisterComponent, LoginComponent },
}
</script>

<style scoped>
.title {
  color: black;
  text-decoration: none;
}
</style>
