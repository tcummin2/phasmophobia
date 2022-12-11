<template>
  <v-container fill-height fluid>
    <v-row align="center" justify="center">
      <v-col lg="9" md="7">
        <v-card raised>
          <v-card-text class="text-center text-h3">It has been</v-card-text>
          <v-container>
            <v-row no-gutters>
              <v-col v-for="(value, key) in counter" :key="key">
                <span class="text-lg-h1 text-md-h2 text-h3 mx-3">{{ value }}</span>
                <span class="text-lg-h2 text-md-h3 text-h4">{{ key }}</span>
              </v-col>
            </v-row>
          </v-container>
          <v-card-text class="text-center text-h3">
            Since the boys last played Phasmophobia.
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import moment from 'moment'

const props = defineProps({
  date: Date
})

const interval = ref(null)
const days = ref(0)
const hours = ref(0)
const minutes = ref(0)
const seconds = ref(0)

const counter = computed(() => ({
  days: days.value,
  hours: hours.value,
  minutes: minutes.value,
  seconds: seconds.value
}))

onMounted(() => {
  interval.value = setInterval(updateTime, 1000)

  updateTime()
})
onBeforeUnmount(() => {
  clearInterval(interval)
})

function updateTime() {
  const diff = moment.duration(moment() - moment(props.date))

  days.value = Math.floor(diff.asDays())
  hours.value = diff.hours()
  minutes.value = diff.minutes()
  seconds.value = diff.seconds()
}
</script>