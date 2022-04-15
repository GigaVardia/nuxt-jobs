<template>
  <v-app>
    <NavigationDrawer />

    <AppBarComponent />

    <v-main>
      <v-container fluid>
        <Nuxt />
      </v-container>
    </v-main>

    <MainSnackbarComponent />
  </v-app>
</template>

<script>
import AppBarComponent from '../components/home/AppBarComponent.vue'
import NavigationDrawer from '../components/home/NavigationDrawer.vue'
import MainSnackbarComponent from '../components/common/MainSnackBarComponent'
import localStorageService from '~/services/local_storage_service'

export default {
  name: 'DefaultLayout',
  components: {
    AppBarComponent,
    NavigationDrawer,
    MainSnackbarComponent,
  },
  mounted() {
    if (localStorageService.getAuth()) {
      this.$store.dispatch('auth/fetchAuthUserAction')
    }
  },
}
</script>

<style></style>
