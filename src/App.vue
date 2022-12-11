<template>
  <v-app>
    <animated-background />
    <count-up :date="date"/>
    <bottom-bar :date="date" />
  </v-app>
</template>

<script setup>
import CountUp from './components/CountUp.vue'
import BottomBar from './components/BottomBar.vue'
import AnimatedBackground from './components/AnimatedBackground.vue'

const LAST_PLAYED_TIME = 1639281518

const date = new Date(LAST_PLAYED_TIME * 1000)
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;
  color: #2c3e50;
  background: linear-gradient(-45deg, #272524, #bfb0b6, #272524, #bfb0b6);
	background-size: 400% 400%;
	animation: gradient 15s ease infinite;
}

html {
  overflow: hidden !important;
}

@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}
</style>
