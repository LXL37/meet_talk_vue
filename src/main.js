import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from './store'

import marked from 'marked';
Vue.use(ElementUI)
Vue.prototype.$axios = axios
Vue.config.productionTip = false
require('./axios')
import hljs from 'highlight.js/lib/highlight';
import 'highlight.js/styles/monokai-sublime.css';

import showdown from 'showdown'

const showdownHighlight = require("showdown-highlight");
Vue.prototype.md2html = (md)=> {
  let converter = new showdown.Converter({
    extensions:[showdownHighlight]
  })
  let text = md.toString()
  let html = converter.makeHtml(text)
  return html
}
window.vm = new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App),
}).$mount('#app')
