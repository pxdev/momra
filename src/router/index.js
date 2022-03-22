import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home'
import Analytics from '../views/Analytics'
import Explore from '../views/Explore'
import Contact from '../views/Contact'
import News from '../views/News'
import NewsDetails from '../views/NewsDetails'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/explore',
        name: 'Explore',
        component: Explore
    },
    {
        path: '/analytics',
        name: 'Analytics',
        component: Analytics
    },

    {
        path: '/contact',
        name: 'Contact',
        component: Contact
    },

    {
        path: '/news',
        name: 'News',
        component: News
    },

    {
        path: '/news-details',
        name: 'NewsDetails',
        component: NewsDetails
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
