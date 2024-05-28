import {createRouter, createWebHistory} from "vue-router"
import Home from "../views/HomeView.vue"
import Cards from "../views/CardsView.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/cards',
            name: 'cards',
            component: Cards
        }
        
    ]
})
export default router