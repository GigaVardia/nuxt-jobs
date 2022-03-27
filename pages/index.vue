<template>
  <div>
    <v-container>
      <v-row>
        <v-col
          v-for="job in manyJobs"
          :key="job.jobId"
          class="d-flex justify-center"
          cols="4"
        >
          <JobCard />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import JobCard from '~/components/home/JobCard.vue'
export default {
  name: 'IndexPage',
  components: { JobCard },
  data: () => ({
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
  }),
  computed: {
    manyJobs() {
      return [...this.jobs, ...this.jobs, ...this.jobs, ...this.jobs]
    },
  },
}
</script>
