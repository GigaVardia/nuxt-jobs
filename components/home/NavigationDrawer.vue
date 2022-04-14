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
          {{ nestedItem.title }}
        </v-list-item>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      listModel: [true, true],
      items: [
        {
          title: 'Front-End Development',
          id: 'frontend',
          items: [
            {
              title: 'All',
              routeParam: 'all-frontend',
            },
            {
              title: 'Vue.js',
              routeParam: 'vuejs',
            },
            {
              title: 'React/Next.js',
              routeParam: 'react-nuxtjs',
            },
            {
              title: 'Angular',
              routeParam: 'angular',
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
      ],
    }
  },
}
</script>
