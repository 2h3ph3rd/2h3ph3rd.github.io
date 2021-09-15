<template>
  <div id="header-section" class="main-container">
    <div class="floating-text">
      <p class="title">Hi there!</p>
      <p class="subtitle">I'm Francesco 👋</p>
    </div>
    <img class="image" src="/header.svg" />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.main-container {
  width: 100vw;
  height: 60vh;
  background-color: white;
  background: linear-gradient(-45deg, #00d2ff 0%, #3a47d5 100%);
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

.title {
  font-size: 5em !important;
  line-height: 10vh;
  width: 17.5vw;
}

.subtitle {
  font-size: 3.5em !important;
}
</style>
