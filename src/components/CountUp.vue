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

<script>
import moment from 'moment'

export default {
  name: 'CountUp',
  props: {
    date: Date
  },
  data: () => ({
    interval: null,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  }),
  computed: {
    counter() {
      return {
        days: this.days,
        hours: this.hours,
        minutes: this.minutes,
        seconds: this.seconds
      }
    }
  },
  mounted() {
    this.interval = setInterval(this.updateTime, 1000)

    this.updateTime()
  },
  beforeDestroy() {
    clearInterval(this.interval)
  },
  methods: {
    updateTime() {
      const diff = moment.duration(moment() - moment(this.date))

      this.days = Math.floor(diff.asDays())
      this.hours = diff.hours()
      this.minutes = diff.minutes()
      this.seconds = diff.seconds()
    }
  }
}
</script>