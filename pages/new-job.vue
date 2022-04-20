<template>
  <v-container>
    <v-form ref="form" @submit.prevent="onSubmit">
      <v-row no-gutters>
        <v-col cols="4">
          <v-text-field
            placeholder="Job title..."
            outlined
            :rules="jobTitleRule"
          />
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-checkbox v-model="salary" label="Salary range" class="mt-0" />
      </v-row>
      <v-row v-if="salary" no-gutters>
        <div class="d-flex">
          <v-text-field
            class="mr-4"
            outlined
            :rules="salaryRule"
            placeholder="From..."
          />
          <v-text-field outlined :rules="salaryRule" placeholder="To..." />
        </div>
      </v-row>
      <editor-component :model-value.sync="jobDescription" />
      <v-row no-gutters justify="end" class="mt-2">
        <v-btn width="100px" text color="primary" outlined type="submit">
          Save
        </v-btn>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
import EditorComponent from '~/components/common/EditorComponent.vue'

export default {
  components: { EditorComponent },
  data: () => ({
    salary: false,
    jobDescription: '',
    jobTitleRule: [
      (v) =>
        (!!v && v.length > 5 && v.length < 30) ||
        'Job title must contain minimum 4 characters',
    ],
    salaryRule: [(v) => !v || /^\d+$/.test(v) || 'Enter number!'],
  }),
  mounted() {},
  methods: {
    onSubmit() {
      if (this.$refs.form.validate()) {
        console.log('here')
      }
    },
  },
}
</script>
