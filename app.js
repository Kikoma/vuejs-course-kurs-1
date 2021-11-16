const app = {
  data: () => ({
    curStep: 0,
    steps: [
      {id: 1, text: 'Это описание шага 1', title: 'Шаг 1'},
      {id: 2, text: 'Это описание шага 2', title: 'Шаг 2'},
      {id: 3, text: 'Это описание шага 3', title: 'Шаг 3'},
      {id: 4, text: 'Это описание шага 4', title: 'Шаг 4'},
      {id: 5, text: 'Это описание шага 5', title: 'Шаг 5'},
    ]
  }),
  methods: {
    stepUp() {
      if (this.curStep < this.steps.length - 1)
        this.curStep++
    },
    stepDown() {
      if (this.curStep > 0)
        this.curStep--
    },
    setActive(idx) {
      this.curStep = idx
    },
    done() {
      alert('Готово, так готово!')
    }
  },
  computed: {
    curStep4text() {
      return this.curStep === this.steps.length ? this.curStep - 1 : this.curStep
    }
  }
}

Vue.createApp(app).mount('#app')