<template>
  <v-app>
    <animated-background />
    <count-up :date="date"/>
    <bottom-bar :date="date" />
  </v-app>
</template>

<script>
import CountUp from './components/CountUp'
import BottomBar from './components/BottomBar'
import AnimatedBackground from './components/AnimatedBackground'
const LAST_PLAYED_TIME = 1607833438

export default {
  name: 'App',
  components: {
    CountUp,
    BottomBar,
    AnimatedBackground
  },
  data: () => ({
    date: new Date(LAST_PLAYED_TIME * 1000)
  })
}
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
