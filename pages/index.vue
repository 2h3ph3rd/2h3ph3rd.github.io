<template>
  <div>
    <the-header></the-header>
    <v-container fluid>
      <v-col cols="12" md="8" offset-md="2">
        <h1 class="text-center primary--text my-6" style="font-size: 2.5em">
          Projects
        </h1>
        <v-row justify="center" align="center">
          <v-col
            v-for="project in projects"
            :key="project.title"
            cols="12"
            md="4"
          >
            <card-project :project="project"></card-project>
          </v-col>
        </v-row>
      </v-col>
    </v-container>
  </div>
</template>

<script>
import TheHeader from '~/components/TheHeader.vue'
import Projects from '~/assets/projects.json'

export default {
  components: { TheHeader },
  data() {
    return {
      projects: Projects,
    }
  },
}
</script>

<style>
.title {
  font-size: 20em;
}
</style>
