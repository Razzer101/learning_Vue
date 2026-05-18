import { createApp } from 'vue'
import './style.sass'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'

const routes = [
        {path: "/", component: Home},
        {path: "/about", component: () => import("./pages/About.vue")},
        {path: "/contact", component: () => import("./pages/Contact.vue")},
        {path: "/product/:id", component: () => import("./pages/Product.vue")}
    ]

const router = createRouter({
    history: createWebHistory(),
    routes
})

createApp(App).use(router).mount('#app')
