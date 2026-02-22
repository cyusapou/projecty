import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import EcoFleetHome from './components/EcoFleetHome.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    { path: '/', redirect: '/ecofleet' },
    { path: '/ecofleet', component: EcoFleetHome },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

createApp(App).use(router).mount('#app')
