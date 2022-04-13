<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template #activator="{ on, attrs }">
        <v-btn v-bind="attrs" plain text v-on="on"> Sign In </v-btn>
      </template>
      <v-card>
        <v-card-title class="pb-0"> Hi </v-card-title>
        <v-card-text>
          <v-form ref="signInForm" @submit.prevent="login">
            <v-text-field
              v-model="formData.email"
              :rules="rules.email"
              placeholder="Email..."
            />
            <v-text-field
              v-model="formData.password"
              :rules="rules.password"
              placeholder="Password..."
            />
            <div class="d-flex justify-end">
              <v-btn color="red darken-1" text @click="dialog = false">
                Cancel
              </v-btn>
              <v-btn
                :loading="loading"
                color="blue darken-1"
                text
                type="submit"
              >
                Sign In
              </v-btn>
            </div>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import rules from '~/utils/input-rules'
import localStorageService from '~/services/local_storage_service'

export default {
  data: () => ({
    loading: false,
    dialog: false,
    formData: {
      email: '',
      password: '',
    },
    rules,
  }),
  methods: {
    async login() {
      if (!this.$refs.signInForm.validate()) return
      try {
        this.loading = true
        await new Promise((resolve) => {
          setTimeout(resolve, 1000)
        })

        const data = {
          access_token: 'access_token',
          refresh_token: 'refresh_token',
        }

        localStorageService.setAuth(data)

        await this.$store.dispatch('auth/fetchAuthUserAction')
      } catch (err) {
        //
      } finally {
        this.loading = false
        this.dialog = false
      }
    },
  },
}
</script>
