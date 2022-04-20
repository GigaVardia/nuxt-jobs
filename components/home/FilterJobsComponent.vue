<template>
  <div class="pa-4 d-flex">
    <div class="mr-4">
      <v-checkbox v-model="filters.remote" label="Remote" hide-details />
    </div>
    <div>
      <v-select
        hide-details
        placeholder="Seniority level"
        :items="seniorityLevels"
      />
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    filters: {
      remote: true,
    },
    seniorityLevels: [
      'All',
      'Intern',
      'Junior',
      'Middle',
      'Senior',
      'Team lead',
    ],
  }),
}
</script>

<style></style>
