function titleCase(str) {
  return str.toLowerCase().split(' ').map(function(word) {
    return word.replace(word[0], word[0].toUpperCase());
  }).join(' ');
}

new Vue({
  el: '#app',
  data: {
    contents: {},
    firstName: 'Mian',
    selected: 'Hello Vue.js!'
  },
  created: function () {
    this.selected = decodeURI(window.location.hash).replace('#', '');
    fetch('./contents.yaml')
      .then(response => response.text())
      .then(data => this.contents = jsyaml.safeLoad(data));
  },
  updated: function () {
    document.title = `${this.contents[this.selected] ? `${titleCase(this.selected)} | ` : ''} ${this.firstName}'s Scrapbook`;
    VanillaTilt.init(document.querySelectorAll("[data-tilt]"));
  }
})
