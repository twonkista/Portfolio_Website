import { createMemoryHistory, createRouter } from 'vue-router'

import AboutView from './components/AboutView.vue'
import ExperienceView from './components/ExperienceView.vue'

const routes = [
    {
        path: '/about', 
        name: 'about',
        component: AboutView 
    },
    {
        path: '/experience', 
        name: 'experience',
        component: ExperienceView 
    },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router