<template>
  <v-menu
    bottom
    offset-y
    transition="slide-y-transition"
    nudge-bottom="5"
    :close-on-content-click="false"
  >
    <template #activator="{ attrs, on }">
      <v-btn icon v-bind="attrs" v-on="on">
        <v-icon large> mdi-account </v-icon>
      </v-btn>
    </template>

    <v-sheet>
      <v-list flat max-width="400px" min-width="250px">
        <v-list-item-group selectable>
          <template v-for="item in items">
            <v-divider :key="`account-menu-divider-${item.content}`" />
            <v-list-item :key="item.content" :to="item.to">
              <v-list-item-title> {{ item.content }}</v-list-item-title>
            </v-list-item>
          </template>
        </v-list-item-group>
      </v-list>
    </v-sheet>
  </v-menu>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        content: 'Profile page',
        to: { path: '/profile' },
      },
      {
        content: 'Sign out',
      },
    ],
  }),
}
</script>

<style>
.v-list {
  padding: 0;
}
</style>
