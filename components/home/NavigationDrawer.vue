<template>
  <v-navigation-drawer
    :permanent="!$vuetify.breakpoint.mobile"
    clipped
    app
    width="280"
  >
    <v-list expand>
      <v-list-group
        v-for="(item, index) in items"
        :key="item.id"
        v-model="listModel[index]"
      >
        <template #activator>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </template>

        <v-list-item
          v-for="nestedItem in item.items"
          :key="nestedItem.title"
          :to="{
            name: 'categories-category',
            params: { category: nestedItem.routeParam },
          }"
          nuxt
          exact
          sub-group
        >
          <v-list-item-icon class="mr-2">
            <v-icon>mdi-circle-small </v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>
              {{ nestedItem.title }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      listModel: [true, true, true, true],
      items: [
        {
          title: 'Front-End Development',
          id: 'frontend',
          items: [
            {
              title: 'All',
              jobs: 63,
              routeParam: 'all-frontend',
            },
            {
              title: 'Vue.js',
              routeParam: 'vuejs',
              jobs: 22,
            },
            {
              title: 'React/Next.js',
              routeParam: 'react-nuxtjs',
              jobs: '28',
            },
            {
              title: 'Angular',
              routeParam: 'angular',
              jobs: 13,
            },
          ],
        },
        {
          title: 'Back-End Development',
          id: 'backend',
          items: [
            {
              title: 'All',
              routeParam: 'all-backend',
            },
            {
              title: 'NodeJs',
              routeParam: 'nodejs',
            },
            {
              title: 'C#/.NET',
              routeParam: 'c#-.net',
            },
            {
              title: 'Java',
              routeParam: 'java',
            },
            {
              title: 'Ruby',
              routeParam: 'ruby',
            },
          ],
        },
        {
          title: 'QA',
          id: 'qa',
          items: [
            {
              title: 'All',
              params: 'qa-all',
              jobs: 8,
            },
            {
              title: 'Manual testing',
              param: 'manual-testing',
              jobs: 3,
            },
            {
              title: 'Test automation',
              param: 'test-automation',
              jobs: 5,
            },
          ],
        },
        {
          title: 'Operations',
          id: 'operations',
          items: [
            {
              title: 'All',
              params: 'operations-all',
              jobs: 15,
            },
            {
              title: 'DevOps',
              param: 'devops',
              jobs: 7,
            },
            {
              title: 'System administrator',
              param: 'system-administrator',
              jobs: 5,
            },
            {
              title: 'Database administrator',
              param: 'database-administrator',
              jobs: 3,
            },
          ],
        },
      ],
    }
  },
}
</script>
