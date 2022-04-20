<template>
  <div>
    <v-container class="pa-0">
      <v-row justify="center" class="bg-gradient py-2">
        <h1 class="text-h2">Find Your Dream Job</h1>
      </v-row>
      <v-row>
        <filter-jobs-component />
      </v-row>
      <v-row>
        <v-col
          v-for="job in jobs"
          :key="job.jobId"
          class="d-flex justify-center"
          cols="4"
        >
          <job-card-component />
        </v-col>
      </v-row>
      <Nuxt />
    </v-container>
  </div>
</template>

<script>
import JobCardComponent from '~/components/home/JobCardComponent.vue'
import FilterJobsComponent from '~/components/home/FilterJobsComponent.vue'

export default {
  name: 'IndexPage',
  components: { JobCardComponent, FilterJobsComponent },
  async asyncData({ $axios }) {
    try {
      // const { data } = await $axios.get('/jobs')
      const data = await new Promise((resolve) => {
        // eslint-disable-next-line nuxt/no-timing-in-fetch-data
        setTimeout(() => {
          resolve({
            jobs: [
              {
                jobId: 'job1',
              },
              {
                jobId: 'job2',
              },
              {
                jobId: 'job3',
              },
              {
                jobId: 'job4',
              },
            ],
          })
        }, 500)
      })
      return { jobs: data }
    } catch (err) {
      return { err }
    }
  },
  data: () => ({}),
  computed: {},
}
</script>

<style>
.v-list {
  padding: 0;
}
</style>

<style scoped>
.bg-gradient {
  color: white;
  background: rgb(171, 164, 250);
  background: radial-gradient(
    circle,
    rgba(171, 164, 250, 1) 0%,
    rgba(124, 124, 221, 1) 43%,
    rgba(120, 215, 236, 1) 100%
  );
}
</style>
