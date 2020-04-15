import Vue from 'vue'
import App from './App.vue'
import { MdButton, MdContent, MdCard, MdIcon, MdAvatar,MdList,MdDivider} from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.config.productionTip = false
Vue.use(MdButton)
Vue.use(MdContent)
Vue.use(MdCard)
Vue.use(MdIcon)
Vue.use(MdAvatar)
Vue.use(MdList)
Vue.use(MdDivider)

new Vue({
  render: h => h(App),
}).$mount('#app')
