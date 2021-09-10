<template>
  <div>
    <the-header></the-header>
    <v-container>
      <h1 class="text-center">Projects</h1>
      <br />
      <br />
      <v-row justify="center" align="center">
        <v-col cols="12" md="3">
          <app-card></app-card>
        </v-col>
        <v-col cols="12" md="3">
          <app-card></app-card>
        </v-col>
        <v-col cols="12" md="3">
          <app-card></app-card>
        </v-col>
      </v-row>
      <v-row justify="center" align="center">
        <v-col cols="12" md="3">
          <app-card></app-card>
        </v-col>
        <v-col cols="12" md="3">
          <app-card></app-card>
        </v-col>
        <v-col cols="12" md="3">
          <app-card></app-card>
        </v-col>
      </v-row>
    </v-container>

    <v-container>
      <h1 class="text-center">Articles</h1>
      <br />
      <br />
      <v-row justify="center" align="center">
        <v-col cols="12" md="3">
          <app-card></app-card>
        </v-col>
        <v-col cols="12" md="3">
          <app-card></app-card>
        </v-col>
        <v-col cols="12" md="3">
          <app-card></app-card>
        </v-col>
      </v-row>
      <v-row justify="center" align="center">
        <v-col cols="12" md="3">
          <app-card></app-card>
        </v-col>
        <v-col cols="12" md="3">
          <app-card></app-card>
        </v-col>
        <v-col cols="12" md="3">
          <app-card></app-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import TheHeader from '~/components/TheHeader.vue'
export default {
  components: { TheHeader },
  mounted() {
    const RSS_URL = `https://francesco-pastore.medium.com/feed`

    const xmlHttp = new XMLHttpRequest()
    xmlHttp.open('GET', RSS_URL, false) // false for synchronous request
    xmlHttp.send(null)
    console.log(xmlHttp.responseText)
  },
}
</script>

<style>
</style>
