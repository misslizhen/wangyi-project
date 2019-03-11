import Vue from 'vue'
import APP from './APP.vue'
import 'lib-flexible/flexible'
import './mock/mockServer'

import router from './router/index.vue'
import Split from './compoents/Split.vue'
import store from './store/index'

Vue.component('Split', Split)

new Vue({
  el:'#app',

  components:{
    APP
  },
  template:'<APP/>',
  router,
  store

})
