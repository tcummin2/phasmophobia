<template>
  <v-bottom-navigation absolute height="30px">
    <p>Last played on {{ momentDate.toString() }}</p>
  </v-bottom-navigation>
</template>

<script>
import moment from 'moment'

export default {
  name: 'BottomBar',
  props: {
    date: Date
  },
  computed: {
    momentDate() {
      return moment(this.date).toString()
    }
  }
}
</script>

<style lang="scss" scoped>
p {
  margin: auto;
}
</style>