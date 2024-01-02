import { createRouter, createWebHistory } from 'vue-router';
import home from "@/views/Home/home.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path:"/login",
      name:"login",
      component: () => import("@/views/Login/login.vue")
    },{
      path:"/register",
      name:"register",
      component:()=> import("@/views/Register/register.vue")
        }
  ]
})
router.beforeEach((to,from,next)=>{
  console.log(to,from);
  
})

export default router
