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
    backgroundColor: "light-blue",

    show: false,

    title1: 'Task List',
    items: [
      {text: 'First'},
      {text: 'Second'},
      {text: 'First'},
      {text: 'Second'}
    ]
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
    },
    addItem: function () {
      var input = document.getElementById('itemForm');

      if (input.value !== '') {
        this.items.push({
          text:input.value
        });
        input.value = "";
      }
    },
    deleteItem: function (index) {
      this.items.splice(index, 1);
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