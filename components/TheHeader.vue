<template>
  <div id="header-section" class="main-container">
    <div class="floating-text">
      <h1 class="title">Hi there!</h1>
      <!--<p class="subtitle">I'm Francesco 👋</p>-->
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
  /* background-color: rgb(238, 238, 238); */
  position: absolute;
  top: 25vh;
  left: 15vw;
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

  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: 0.06em solid white; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  animation: typing 1.5s steps(18, end) 1s, blink-caret 0.75s step-end infinite;
}

.subtitle {
  font-size: 3.5em !important;
}

/* The typing effect */
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 17.5vw;
  }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: white;
  }
}
</style>
