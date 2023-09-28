import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { OhVueIcon, addIcons } from 'oh-vue-icons'
import {FaHome, FaCreditCard, FaRegularCreditCard, MdFlagRound} from 'oh-vue-icons/icons'

addIcons(FaHome, FaCreditCard, FaRegularCreditCard, MdFlagRound)

createApp(App).use(router).component('v-icon', OhVueIcon).mount('#app')