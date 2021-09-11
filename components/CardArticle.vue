<template>
  <v-card class="mx-auto">
    <v-img :src="article.thumbnail" rounded @load="$redrawVueMasonry()"></v-img>
    <v-card-title>{{ article.title }}</v-card-title>

    <v-list-item>
      <v-list-item-icon>
        <v-icon>mdi-clock-outline</v-icon>
      </v-list-item-icon>
      <v-list-item-subtitle>{{ article.pubDate }}</v-list-item-subtitle>
    </v-list-item>

    <v-list-item class="mb-3">
      <v-list-item-icon>
        <v-icon>mdi-tag-outline</v-icon>
      </v-list-item-icon>
      <v-list-item-group>
        <v-chip
          v-for="tag in tags"
          :key="tag"
          color="primary"
          class="mr-1 mt-1"
        >
          {{ tag }}
        </v-chip>
      </v-list-item-group>
    </v-list-item>

    <v-divider></v-divider>

    <v-card-actions>
      <v-btn color="primary" large text @click="openLink(article.link)">
        <v-icon left>mdi-open-in-new</v-icon>
        View
        <v-icon right>mdi-chevron-right</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      tags: this.data,
    }
  },
  mounted() {
    this.tags = [
      this.article.categories[0],
      this.article.categories[1],
      this.article.categories[2],
    ]
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
