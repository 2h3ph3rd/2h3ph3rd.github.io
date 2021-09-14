<template>
  <v-card class="mx-auto">
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title>{{ project.title }}</v-list-item-title>
        <v-list-item-subtitle>{{ project.description }}</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar tile size="80">
        <v-img :src="project.image" height="100px" contain rounded></v-img>
      </v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-icon v-for="icon in project.icons" :key="icon" class="ma-2">{{
        icon
      }}</v-icon>
    </v-card-actions>

    <v-divider></v-divider>

    <v-card-actions>
      <v-btn color="primary" text>
        <v-icon left>mdi-open-in-new</v-icon>
        View
      </v-btn>

      <v-btn color="primary" text @click="openLink(project.url)">
        <v-icon left>mdi-github</v-icon>
        Source
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
  methods: {
    openLink(link) {
      window.open(link)
    },
  },
}
</script>

<style>
</style>
