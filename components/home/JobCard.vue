<template>
  <v-card
    outlined
    max-width="400px"
    class="pb-2 card"
    rounded
    @click="onCardClickHandler"
  >
    <v-row no-gutters>
      <v-col class="d-flex justify-center align-center ml-2" cols="2">
        <v-img width="50" height="50" contain :src="job.companyLogo" />
      </v-col>
      <v-col>
        <v-card-title>
          <span>
            {{ job.title }}
          </span>

          <span class="ml-auto">
            <v-btn icon color="indigo">
              <v-icon>mdi-pin</v-icon>
            </v-btn>
          </span>
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
            @click="onTagClickHandler"
          >
            #{{ tag }}
          </v-chip>
        </div>

        <v-divider />

        <v-card-actions class="d-flex justify-end mr-4">
          <v-btn depressed> Salary </v-btn>
          <v-btn depressed color="indigo" dark> Details </v-btn>
        </v-card-actions>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import moment from "moment";

export default {
  data: () => ({
    job: {
      title: "Full Stack Developer",
      group: "Web Development",
      subGroup: "Full Stack",
      id: "job-id-0",
      date: Date.now(),
      companyLogo:
        "https://s3.eu-central-1.amazonaws.com/public.temicloud.io/images/uploads/d9f9c089-d258-4ae2-9ea7-0a5708404198.png",
      tags: ["React", "Nodejs", "Git"],
    },
  }),
  computed: {
    formatDate() {
      return moment(new Date(this.job.date)).fromNow();
    },
    tags() {
      return this.job.tags;
    },
  },
  methods: {
    onTagClickHandler() {
      //
    },
    onCardClickHandler() {
      //
    },
  },
};
</script>

<style>
.card:hover {
  transition: 0.1s;
  transform: scale(1.03);
}
</style>
