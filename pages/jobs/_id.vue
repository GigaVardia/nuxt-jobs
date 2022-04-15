<template>
  <v-container>
    <v-row>
      {{ job.title }}
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'JobDetailsPage',
  beforeRouteEnter(to, from, next) {
    if (to.params.id) next()
    else next('/')
  },
  async asyncData() {
    const job = await new Promise((resolve) => {
      // eslint-disable-next-line nuxt/no-timing-in-fetch-data
      setTimeout(
        () =>
          resolve({
            title: 'Full Stack Developer',
            group: 'Web Development',
            subGroup: 'Full Stack',
            id: '112233',
            date: Date.now(),
            description: '',
            salary: '3000-4000',
            companyLogo:
              'https://s3.eu-central-1.amazonaws.com/public.temicloud.io/images/uploads/d9f9c089-d258-4ae2-9ea7-0a5708404198.png',
            tags: ['React', 'Nodejs', 'Git'],
          }),
        500
      )
    })
    return { job }
  },
}
</script>
