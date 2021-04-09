import Vue from 'vue'
import VueRouter from 'vue-router'
import PrivateLayout from '@/layouts/private.vue';
import PublicLayout from '@/layouts/public.vue';
import Authorization from "@/views/public/Authorise";
import Loading from "@/views/public/Loading";

import Home from "@/views/private/home";

Vue.use(VueRouter)

const routes = [
  {
      path: '/public',
      component: PublicLayout,
      children: [
        {
          path: '',
          component: Authorization,
        },
        {
          path: 'loading',
          component: Loading,
        },
      ],
  },
  {
    path: '/private',
    component: PrivateLayout,
    children: [
      {
        path: '',
        component: Home,
      },
    ],
}
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
