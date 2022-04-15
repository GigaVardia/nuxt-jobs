<template>
  <v-card
    max-width="400px"
    class="pb-2 card"
    outlined
    rounded
    hover
    @click="onCardClickHandler"
  >
    <v-row no-gutters>
      <v-col class="d-flex justify-center align-center ml-2" cols="2">
        <v-img
          width="50"
          height="50"
          contain
          aspect-ratio="1"
          :src="job.companyLogo"
        />
      </v-col>
      <v-col>
        <v-card-title>
          <span>
            {{ job.title }}
          </span>

          <v-btn class="ml-auto" icon color="indigo" @click.stop="onPinHandler">
            <v-icon>mdi-pin</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-subtitle>
          {{ job.group }}
          - Added: {{ formatDate }}
        </v-card-subtitle>
      </v-col>
    </v-row>

    <v-row no-gutters>
      <v-col cols="2"> </v-col>
      <v-col>
        <div class="ml-2 mb-1">
          <v-chip
            v-for="tag in tags"
            :key="`${job.id}-${tag}`"
            outlined
            class="mr-1 mb-1"
            @click.stop="onTagClickHandler"
          >
            #{{ tag }}
          </v-chip>
        </div>

        <v-divider />

        <v-card-actions class="d-flex justify-end mr-4">
          <v-btn v-if="!showSalary" depressed @click.stop="onSalaryClick">
            Salary
          </v-btn>
          <v-sheet v-else class="mr-2 d-flex align center">
            <v-icon> mdi-currency-usd </v-icon>
            {{ job.salary }}
          </v-sheet>
          <v-btn
            :to="{ name: 'jobs-id', params: { id: job.id } }"
            depressed
            color="indigo"
            dark
            nuxt
          >
            Details
          </v-btn>
        </v-card-actions>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import moment from 'moment'

export default {
  props: {
    jobProp: {
      type: Object,
      default: () => ({}),
    },
  },
  data: () => ({
    showSalary: false,
    job: {
      title: 'Full Stack Developer',
      group: 'Web Development',
      subGroup: 'Full Stack',
      id: '112233',
      date: Date.now(),
      salary: '3000-4000',
      companyLogo:
        'https://s3.eu-central-1.amazonaws.com/public.temicloud.io/images/uploads/d9f9c089-d258-4ae2-9ea7-0a5708404198.png',
      tags: ['React', 'Nodejs', 'Git'],
    },
  }),
  computed: {
    formatDate() {
      return moment(new Date(this.job.date)).fromNow()
    },
    tags() {
      return this.job.tags
    },
  },
  methods: {
    onTagClickHandler() {
      //
    },
    onCardClickHandler() {
      this.$router.push({ name: 'jobs-id', params: { id: this.job.id } })
    },
    onPinHandler() {
      if (!this.$store.getters['auth/isLoggedInGetter']) {
        this.$store.dispatch('snackbar/snackbarAction', {
          isActive: true,
          message: 'Sign in to pin job!',
          error: true,
        })
        return
      }
      this.$store.dispatch('auth/pinJobAction', this.job.id)
    },
    onSalaryClick() {
      if (this.$store.getters['auth/isLoggedInGetter']) {
        this.$store.dispatch('snackbar/snackbarAction', {
          isActive: true,
          message: 'Sign in to pin job!',
          error: true,
        })
        return null
      }

      this.showSalary = true
    },
  },
}
</script>

<style scoped>
.card:hover {
  transition: 0.1s;
  transform: scale(1.02);
}
</style>
