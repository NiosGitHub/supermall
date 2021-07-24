// import Vue from 'vue'
// import VueRouter from 'vue-router'
// import { createApp } from "vue";
// const app = createApp();
// app.use(Vueouter)
import { createRouter,createWebHistory } from 'vue-router'

// Vue.use(VueRouter)

const Home = () => import('../views/home/Home')
const Cart = () => import('../views/cart/Cart')
const Category = () => import('../views/category/Category')
const Profile = () => import('../views/profile/Profile')

const routes = [
    {
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/cart',
        component: Cart
    },
    {
        path: '/category',
        component: Category
    },
    {
        path: '/profile',
        component: Profile
    }
]
const router = new createRouter({
    routes,
    mode: 'history',
    history:createWebHistory(process.env.BASE_URL)
})

export default router