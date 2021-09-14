<template>
  <div>
    <v-app-bar app>
      <v-app-bar-nav-icon
        v-if="isMobile"
        @click="drawer = true"
      ></v-app-bar-nav-icon>

      <div v-if="!isMobile">
        <v-btn
          v-for="link in links"
          :key="link.title"
          text
          @click="scrollTo(link.id)"
        >
          <v-icon left>{{ link.icon }}</v-icon>
          {{ link.title }}
        </v-btn>
      </div>
      <v-spacer></v-spacer>
      <switch-theme />
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" fixed temporary bottom>
      <v-list nav>
        <v-list-item
          v-for="link in links"
          :key="link.title"
          text
          @click="
            scrollTo(link.id)
            drawer = false
          "
        >
          <v-list-item-icon>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>
            {{ link.title }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
const Links = [
  {
    title: 'Home',
    id: 'header-section',
    icon: 'mdi-home-variant',
  },
  {
    title: 'Projects',
    id: 'projects-section',
    icon: 'mdi-code-tags',
  },
  {
    title: 'Articles',
    id: 'articles-section',
    icon: 'mdi-newspaper-variant',
  },
]

export default {
  data() {
    return {
      links: Links,
      drawer: false,
    }
  },
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.xs
    },
  },
  methods: {
    scrollTo(id) {
      window.scrollTo({
        top: document.getElementById(id).offsetTop,
        left: 0,
        behavior: 'smooth',
      })
    },
  },
}
</script>

<style>
</style>
