new Vue({
  el: '#app',
  data: {
    contents: {},
    firstName: 'Mian',
    selected: 'Hello Vue.js!'
  },
  created: function () {
    const urlParams = new URLSearchParams(window.location.search);
    this.selected = urlParams.get('item');

    document.title = `${this.firstName}'s Scrapbook`;

    fetch('./contents.yaml')
      .then(response => response.text())
      .then(data => this.contents = jsyaml.safeLoad(data));
  },
  updated: function () {
    VanillaTilt.init(document.querySelectorAll("[data-tilt]"));
  }
})
