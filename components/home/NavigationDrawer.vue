<template>
  <v-navigation-drawer
    :permanent="!$vuetify.breakpoint.mobile"
    clipped
    app
    width="300"
  >
    <v-list expand height="">
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

        <template v-for="nestedItem in item.items">
          <v-divider :key="`divider-${nestedItem.title}`" />
          <v-list-item
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
                <v-icon> mdi-circle-small </v-icon>
                <span class="text-subtitle-2">
                  {{ nestedItem.jobs }}
                </span>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
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
              routeParam: 'csharp-.net',
            },
            {
              title: 'Java',
              routeParam: 'java',
            },
            {
              title: 'PHP',
              routeParam: 'php',
            },
            {
              title: 'Python',
              routeParam: 'python',
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
              routeParam: 'qa-all',
              jobs: 8,
            },
            {
              title: 'Manual testing',
              routeParam: 'manual-testing',
              jobs: 3,
            },
            {
              title: 'Test automation',
              routeParam: 'test-automation',
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
              routeParam: 'operations-all',
              jobs: 15,
            },
            {
              title: 'DevOps',
              routeParam: 'devops',
              jobs: 7,
            },
            {
              title: 'System administrator',
              routeParam: 'system-administrator',
              jobs: 5,
            },
            {
              title: 'Database administrator',
              routeParam: 'database-administrator',
              jobs: 3,
            },
          ],
        },
      ],
    }
  },
}
</script>
