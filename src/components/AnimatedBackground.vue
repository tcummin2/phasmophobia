<template>
  <div></div>
</template>

<script>
export default {
  name: 'AnimatedBackground'
}
</script>

<style lang="scss" scoped>
$bg-url: '../assets/me-and-the-boys.png';
$bg-height: 349px;

* {
  position: absolute;
  width: 100%;
  height: 100%;

  -webkit-animation: animate_background 10s linear 0s infinite;
  -moz-animation: animate_background 10s linear 0s infinite;
  animation: animate_background 10s linear 0s infinite;

  background: url($bg-url) repeat 0 0;

  -webkit-keyframes animate_background {
    from { background-position: 0 0; }
    to { background-position: 0 -1 * $bg-height; }
  }
  @-moz-keyframes animate_background {
    from { background-position: 0 0; }
    to { background-position: 0 -1 * $bg-height; }
  }
  @keyframes animate_background {
    from { background-position: 0 0; }
    to { background-position: 0 -1 * $bg-height; }
  }
}
</style>