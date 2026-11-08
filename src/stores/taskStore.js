import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useTaskStore = defineStore('tasks', () => {
  const tareas = ref([
    { id: 1, titulo: 'Aprender Vue', completada: true },
    { id: 2, titulo: 'Configurar Pinia', completada: false },
    { id: 3, titulo: 'Terminar el proyecto', completada: false }
  ])

  const agregarTarea = (nuevoTitulo) => {
    tareas.value.push({
      id: Date.now(),
      titulo: nuevoTitulo,
      completada: false
    })
  }

  const toggleTarea = (id) => {
    const tarea = tareas.value.find(t => t.id === id)
    if (tarea) tarea.completada = !tarea.completada
  }

  const eliminarTarea = (id) => {
    tareas.value = tareas.value.filter(t => t.id !== id)
  }

  return { tareas, agregarTarea, toggleTarea, eliminarTarea }
})