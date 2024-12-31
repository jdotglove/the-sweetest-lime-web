import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import HairServicesView from '../views/HairServicesView.vue'
import BodyWorkView from '../views/BodyWorkView.vue'
import NailsView from '../views/NailsView.vue'
import AboutUsView from '../views/AboutUsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/hair-services',
      name: 'hair services',
      component: HairServicesView,
    },
    {
      path: '/body-work',
      name: 'body work',
      component: BodyWorkView,
    },
    {
      path: '/nails',
      name: 'nails',
      component: NailsView,
    },
    {
      path: '/about-us',
      name: 'about us',
      component: AboutUsView
    }
  ],
})

export default router
