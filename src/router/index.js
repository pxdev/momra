import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home'
import Analytics from '../views/Analytics'
import Explore from '../views/Explore'
import Contact from '../views/Contact'
import News from '../views/News'
import NewsDetails from '../views/NewsDetails'
import UrbanStudies from '../views/UrbanStudies'
import Brief from '../views/Brief'
import OurVision from '../views/OurVision'
import Regulation from '../views/Regulation'
import InteractiveMap from '../views/InteractiveMap'
import DataImportanceCalculator from '../views/DataImportanceCalculator'

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

    {
        path: '/urban-studies',
        name: 'UrbanStudies',
        component: UrbanStudies
    },
    {
        path: '/brief',
        name: 'Brief',
        component: Brief
    },
    {
        path: '/our-vision',
        name: 'OurVision',
        component: OurVision
    },
    {
        path: '/regulation',
        name: 'Regulation',
        component: Regulation
    },

    {
        path: '/interactive-map',
        name: 'InteractiveMap',
        component: InteractiveMap
    },
    {
        path: '/data-importance-calculator',
        name: 'DataImportanceCalculator',
        component: DataImportanceCalculator
    },


]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
