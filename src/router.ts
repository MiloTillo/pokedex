import { createRouter, createWebHistory } from "vue-router";
import Home from './pages/Home.vue'
import Detail from './pages/Detail.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
            { path: '/', component: Home, name: 'home' },
            { path: '/:pokemon', component: Detail, name: 'detail'}
    ]
})
export default router
