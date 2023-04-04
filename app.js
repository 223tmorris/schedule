const app = Vue.createApp({
    // Imports JSON file
    created () {
          fetch('schedule.json').then(response => response.json()).then(json => {
                this.schedule = json
          })
    },
    data() {
      return {
          // This holds the schedule.json data.
          schedule: [],
          daySchedule: []
    }
  },
    methods: {
      filter(letter){
            this.daySchedule.length = 0
            for(let i = 0; i < this.schedule.length; i++){
                  if(this.schedule[i].days.includes(letter)){
                        this.daySchedule.push(this.schedule[i])
                  }
            }
          }
    }
})

app.mount("#app")