import { createRouter, createWebHistory } from 'vue-router'
import TasksView from '../views/TasksView.vue'
import TaskDetailView from '../views/TaskDetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'tareas',
      component: TasksView
    },
    {
      path: '/tarea/:id',
      name: 'detalle',
      component: TaskDetailView
    }
  ]
})

export default router