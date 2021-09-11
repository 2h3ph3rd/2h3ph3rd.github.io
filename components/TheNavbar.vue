<template>
  <v-app-bar app>
    <v-btn v-for="link in links" :key="link.title" text>
      <v-icon left>{{ link.icon }}</v-icon>
      {{ link.title }}
    </v-btn>

    <v-spacer></v-spacer>
    <switch-theme />
  </v-app-bar>
</template>

<script>
const Links = [
  {
    title: 'Home',
    link: '/',
    icon: 'mdi-home-variant',
  },
  {
    title: 'Projects',
    link: '#projects',
    icon: 'mdi-code-tags',
  },
  {
    title: 'Articles',
    link: '#articles',
    icon: 'mdi-newspaper-variant',
  },
]

export default {
  data() {
    return {
      links: Links,
    }
  },
}
</script>

<style>
</style>
