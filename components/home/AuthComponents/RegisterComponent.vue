<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template #activator="{ on, attrs }">
        <v-btn outlined plain text v-bind="attrs" v-on="on"> Sign Up </v-btn>
      </template>
      <v-card>
        <v-card-text>
          <v-tabs centered>
            <v-tab> For job finders </v-tab>
            <v-tab> For employers </v-tab>

            <v-tab-item>
              <RegisterForJobFinderComponent />
            </v-tab-item>

            <v-tab-item></v-tab-item>
          </v-tabs>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red darken-1" text @click="dialog = false">
            Cancel
          </v-btn>
          <v-btn color="blue darken-1" text type="submit"> Sign Up </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import RegisterForJobFinderComponent from './RegisterForJobFinderComponent.vue'

export default {
  components: { RegisterForJobFinderComponent },
  data: () => ({
    dialog: false,
  }),
}
</script>
