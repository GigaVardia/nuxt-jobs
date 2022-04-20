<template>
  <v-app-bar clipped-left fixed app flat>
    <v-toolbar-title>
      <NuxtLink to="/" class="title">IT &mdash; Jobs </NuxtLink>
    </v-toolbar-title>

    <div class="ml-auto mr-4 d-flex">
      <div class="mr-4 d-flex align-center">
        <v-text-field hide-details placeholder="Search job..." />
      </div>
      <div>
        <v-tooltip bottom>
          <template #activator="{ on, attrs }">
            <v-btn icon nuxt to="new-job" v-bind="attrs" v-on="on">
              <v-icon> mdi-briefcase-upload </v-icon>
            </v-btn>
          </template>
          <span>Upload job</span>
        </v-tooltip>
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
        <account-menu-component />
      </div>
    </div>
  </v-app-bar>
</template>

<script>
import RegisterComponent from './AuthComponents/RegisterComponent.vue'
import LoginComponent from './AuthComponents/LoginComponent.vue'
import AccountMenuComponent from './AccountMenuComponent.vue'

export default {
  components: { RegisterComponent, LoginComponent, AccountMenuComponent },
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
