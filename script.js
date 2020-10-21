var vue = new Vue ({
  el: '#app',
  data: {
    count: 0,
    url: '',
    cleanUrl: ''
  },
  methods: {
    countUp: function () {
      this.count += 1
    },
    countDown: function () {
      this.count -= 1
    },
    cleanerUrl: function () {
      this.cleanUrl = this.url.replace(/^https?:\/\//, '').replace(/\/$/, '')
    }
  } 
})