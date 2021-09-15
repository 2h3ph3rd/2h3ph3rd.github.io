<template>
  <v-card class="mx-auto">
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title>{{ project.title }}</v-list-item-title>
        <v-list-item-subtitle>{{ project.description }}</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar size="80" rounded>
        <v-img :src="project.image" height="100px" contain></v-img>
      </v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-icon v-for="icon in project.icons" :key="icon" class="ma-2">{{
        icon
      }}</v-icon>
    </v-card-actions>

    <v-divider></v-divider>

    <v-card-actions>
      <button-link
        v-if="project.view"
        :link="project.view"
        icon="mdi-open-in-new"
        text="View"
      ></button-link>

      <button-link
        v-if="project.url"
        :link="project.url"
        icon="mdi-github"
        text="Source"
      ></button-link>
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
}
</script>

<style>
</style>
