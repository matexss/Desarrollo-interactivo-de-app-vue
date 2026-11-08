import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useTaskStore = defineStore('tasks', () => {
  const tareas = ref([])
  const cargando = ref(false)

  const cargarTareasAPI = async () => {
    cargando.value = true
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      const data = await res.json()
      tareas.value = data.map(t => ({ id: t.id, titulo: t.title, completada: t.completed }))
    } catch (error) {
      console.error(error)
    } finally {
      cargando.value = false
    }
  }

  const agregarTarea = (nuevoTitulo) => {
    tareas.value.push({ id: Date.now(), titulo: nuevoTitulo, completada: false })
  }

  const toggleTarea = (id) => {
    const tarea = tareas.value.find(t => t.id === id)
    if (tarea) tarea.completada = !tarea.completada
  }

  const eliminarTarea = (id) => {
    tareas.value = tareas.value.filter(t => t.id !== id)
  }

  const editarTarea = (id, nuevoTitulo) => {
    const tarea = tareas.value.find(t => t.id === id)
    if (tarea) tarea.titulo = nuevoTitulo
  }

  return { tareas, cargando, cargarTareasAPI, agregarTarea, toggleTarea, eliminarTarea, editarTarea }
})