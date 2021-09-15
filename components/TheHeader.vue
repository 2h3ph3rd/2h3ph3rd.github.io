<template>
  <div id="header-section">
    <div v-if="isDesktop" class="main-container">
      <div class="floating-text">
        <p class="header-title">Hi there!</p>
        <p class="header-subtitle">I'm Francesco 👋</p>
      </div>
      <img class="image" src="~/assets/header.svg" />
    </div>
    <div v-else>
      <div class="mobile-header-container text-center pt-6">
        <p class="header-title">Hi there!</p>
        <p class="header-subtitle">I'm Francesco 👋</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    isDesktop() {
      return this.$vuetify.breakpoint.xl
    },
  },
}
</script>

<style lang="scss" scoped>
.base-header-container {
  background: linear-gradient(-45deg, #00d2ff 0%, #3a47d5 100%);
  background-color: white;
  width: 100vw;
  color: white;
  overflow: hidden;
}

.main-container {
  @extend .base-header-container;
  height: 60vh;
}

.mobile-header-container {
  @extend .base-header-container;
  height: 30vh;
  line-height: 10vh;
}

.floating-text {
  position: absolute;
  top: 20vh;
  left: 20vw;
  width: 30vw;
  height: 40vh;
  border-radius: 20px;
  color: white;
}

.image {
  position: absolute;
  top: 10vh;
  left: 55vw;
  height: 40vh;
}

.header-title {
  font-size: 4em !important;
  font-weight: 500;
}

.header-subtitle {
  font-size: 3em !important;
}
</style>
