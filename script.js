var vue = new Vue ({
  el: '#app',
  data: {
    count: 0,

    url: '',
    cleanUrl: '',
    
    title: 'Style',
    sizeToggle: false,
    isRounded: false,
    disabled: false,
    fontColor: 'grey',
    backgroundColor: "light-blue"
  },
  methods: {
    countUp: function () {
      this.count += 1;
    },
    countDown: function () {
      this.count -= 1;
    },
    cleanerUrl: function () {
      this.cleanUrl = this.url.replace(/^https?:\/\//, '').replace(/\/$/, '');
    }
  },
  computed: {
    styles: function () {
      return {
        color: this.fontColor,
        background: this.backgroundColor
      };
    }
  }
}); 