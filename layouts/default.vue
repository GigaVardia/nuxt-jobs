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

    <FooterComponent />
  </v-app>
</template>

<script>
import AppBarComponent from '../components/home/AppBarComponent.vue'
import NavigationDrawer from '../components/home/NavigationDrawer.vue'
import FooterComponent from '../components/home/FooterComponent.vue'
import MainSnackbarComponent from '../components/common/MainSnackBarComponent'

export default {
  name: 'DefaultLayout',
  components: {
    AppBarComponent,
    NavigationDrawer,
    FooterComponent,
    MainSnackbarComponent,
  },
  mounted() {},
}
</script>

<style></style>
