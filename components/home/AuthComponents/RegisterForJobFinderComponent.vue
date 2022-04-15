<template>
  <v-form @submit.prevent="$emit('onSubmit')">
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
    <v-text-field
      v-model="formData.confirmPassword"
      :rules="[(v) => v === formData.password || 'Passwords are not same']"
      placeholder="Confirm password..."
    />
    <v-select
      v-model="formData.position"
      :items="selectItems"
      item-value="id"
      item-text="position"
      dense
      single-line
      hide-details
      label="I am a..."
    />
    <v-file-input
      :error="fileError"
      :error-messages="fileErrorMessage"
      placeholder="Upload resume..."
      @change="fileInputHandler"
    />

    <v-checkbox :rules="[(v) => !!v]" dense label="I agree ..." />
  </v-form>
</template>

<script>
import rules from '~/utils/input-rules'
import { validateResume } from '~/utils/validators'

export default {
  data: () => ({
    formData: {
      email: '',
      password: '',
      confirmPassword: '',
      position: null,
      resume: null,
    },
    selectItems: [
      {
        position: 'Web Developer',
        id: '0',
      },
      {
        position: 'Game Developer',
        id: '1',
      },
      {
        position: 'QA Engineer',
        id: '2',
      },
      {
        position: 'Security Engineer',
        id: '3',
      },
      {
        position: 'DevOps Engineer',
        id: '4',
      },
      {
          position: 'ML/AI Engineer',
          id: '6',
      },
      {
        position: 'UI/UX Designer',
        id: '5',
      },
    ],
    fileError: false,
    fileErrorMessage: '',
    rules,
  }),
  methods: {
    fileInputHandler(file) {
      if (!file) return null
      try {
        validateResume(file)
        this.formData.resume = file
        this.fileError = false
      } catch (err) {
        this.fileError = true
        this.fileErrorMessage = err.message
      }
    },
  },
}
</script>

<style></style>
