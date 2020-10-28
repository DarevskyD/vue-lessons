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

    showClick: false,
    show: false,

    title1: 'Task List',
    items: [
      {text: 'First'},
      {text: 'Second'},
      {text: 'First'},
      {text: 'Second'}
    ],

    items1: [
      'HOME',
      'ABOUT',
      'BLOG',
      'MAP',
      'CONTACTS'
    ],

    message: '',

    showPass: false,
    password: '1aD234b1'
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
    },
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('');
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