<template>
  <v-snackbar
    :value="snackbarStateGetter"
    :color="snackbarDataGetter.color"
    :timeout="snackbarDataGetter.timeout"
    @input="onCloseHandler"
  >
    {{ snackbarDataGetter.message }}

    <template #action="{ attrs }">
      <v-btn text v-bind="attrs" @click="onCloseHandler(false)"> Close </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'

const VuexSnackbar = createNamespacedHelpers('snackbar')

export default {
  computed: {
    ...VuexSnackbar.mapGetters(['snackbarStateGetter', 'snackbarDataGetter']),
  },
  methods: {
    onCloseHandler(val) {
      if (!val)
        this.$store.dispatch('snackbar/snackbarAction', { isActive: false })
    },
  },
}
</script>
