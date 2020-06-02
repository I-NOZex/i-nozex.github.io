import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Profile from '@/views/Profile'
import Work from '@/views/Work'
import Competences from '@/views/Competences'
import Projects from '@/views/Projects'
import WebBrowser from '@/views/WebBrowser'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile
    },
    {
        path: '/work',
        name: 'Work',
        component: Work
    },
    {
        path: '/competences',
        name: 'Competences',
        component: Competences
    },
    {
        path: '/projects',
        name: 'Projects',
        component: Projects
    },    
    {
        path: '/web-browser',
        name: 'Web Browser',
        component: WebBrowser,
        props: (route) => ({ url: route.query.url || "https://facebook.com/tiagofmdotcom/" })
    },       
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router