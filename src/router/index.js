import { createRouter, createWebHistory } from 'vue-router'
import EarningsView from '../views/EarningsView.vue'
import HomeView from '../views/HomeView.vue'
import GoalView from '../views/GoalView.vue'
import ExpensesView from '../views/ExpensesView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/earnings',
      name: 'earnings',
      component: EarningsView
    },{
      path: '/expenses',
      name: 'expenses',
      component: ExpensesView
    },{
      path: '/goal',
      name: 'goal',
      component: GoalView
    }
  ]
})

export default router
