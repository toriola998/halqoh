import {createRouter, createWebHistory} from 'vue-router'

import Home from '../views/Home.vue'
import Playing from '../views/Playing.vue'


const router = createRouter({
    history:  createWebHistory(),
    scrollBehavior() {
      // always scroll to top
      return { 
          top: 0,
          behavior: 'smooth', 
     }
   },
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        }, 
        {
            path: '/playing',
            name: 'Playing',
            component: Playing
        }, 
    ]
})
export default router;