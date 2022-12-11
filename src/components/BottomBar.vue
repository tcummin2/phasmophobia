<template>
  <v-bottom-navigation absolute height="30px">
    <p>Last played on {{ momentDate.toString() }}</p>
  </v-bottom-navigation>
</template>

<script setup>
import { computed } from 'vue'
import moment from 'moment'

const props = defineProps({
  date: Date
})

const momentDate = computed(() => moment(props.date).toString())
</script>

<style lang="scss" scoped>
p {
  margin: auto;
}
</style>