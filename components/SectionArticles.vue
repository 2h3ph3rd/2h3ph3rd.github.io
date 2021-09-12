<template>
  <section>
    <v-container fluid>
      <v-col cols="12" md="8" offset-md="2">
        <h1 class="text-center primary--text my-6" style="font-size: 2.5em">
          Articles
        </h1>
        <v-row>
          <v-col
            v-for="article in articles.items"
            :key="article.title"
            cols="12"
            md="4"
          >
            <card-article :article="article"></card-article>
          </v-col>
        </v-row>
      </v-col>
    </v-container>
  </section>
</template>

<script>
import Articles from '~/assets/articles.json'

export default {
  data() {
    return {
      articles: Articles,
    }
  },
}
</script>

<style>
</style>
