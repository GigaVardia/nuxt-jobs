<template>
  <div>job detail</div>
</template>

<script>
export default {
  name: 'JobDetailsPage',
  beforeRouteEnter(to, from, next) {
    if (to.params.id) next()
    else next('/')
  },
  mounted() {
    console.log(this.$route)
  },
}
</script>
