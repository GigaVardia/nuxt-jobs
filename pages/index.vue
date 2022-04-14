<template>
  <div>
    <v-container>
      <v-row>
        <h1 class="text-h1">Latest Jobs</h1>
      </v-row>
      <v-row>
        <v-col
          v-for="job in jobs"
          :key="job.jobId"
          class="d-flex justify-center"
          cols="4"
        >
          <JobCard />
        </v-col>
      </v-row>
      <Nuxt />
    </v-container>
  </div>
</template>

<script>
import JobCard from '~/components/home/JobCard.vue'
export default {
  name: 'IndexPage',
  components: { JobCard },
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
