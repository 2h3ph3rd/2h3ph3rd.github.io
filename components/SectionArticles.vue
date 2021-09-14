<template>
  <section id="articles-section">
    <v-container fluid>
      <v-col cols="12" md="10" offset-md="1" xl="8" offset-xl="2">
        <h1 class="text-center primary--text my-6" style="font-size: 2.5em">
          Articles
        </h1>
        <v-row>
          <v-col
            v-for="article in cols[0]"
            :key="article.title"
            cols="12"
            md="4"
          >
            <card-article :article="article"></card-article>
          </v-col>
          <v-col
            v-for="article in cols[1]"
            :key="article.title"
            cols="12"
            md="4"
          >
            <card-article :article="article"></card-article>
          </v-col>
          <v-col
            v-for="article in cols[2]"
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
      articles: Articles.items,
      cols: [[], [], []],
    }
  },
  created() {
    const numCols = 3
    for (let i = 0; i < this.articles.length; i++) {
      this.cols[i % numCols].push(this.articles[i])
    }
  },
}
</script>

<style>
</style>
