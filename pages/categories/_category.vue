<template>
  <div>{{ $route.params.category }}</div>
</template>

<script>
export default {
  beforeRouteEnter(to, from, next) {
    if (to.params.category) next()
    else next('/')
  },
}
</script>
