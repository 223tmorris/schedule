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
          test: "hello"
       
    }
  },
    methods: {
          
    }
})

app.mount("#app")