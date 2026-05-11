import { createApp } from 'vue'
import './style.sass'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'

const routes = [
        {path: "/", name: "Home", component: Home},
        {path: "/about", name: "About", component: () => import("./pages/About.vue")},
        {path: "/contact", name: "Contact", component: () => import("./pages/Contact.vue")},
        {path: "/product/:id", component: () => import("./pages/Product.vue")}
    ]

const router = createRouter({
    history: createWebHistory(),
    routes
})

createApp(App).use(router).mount('#app')
