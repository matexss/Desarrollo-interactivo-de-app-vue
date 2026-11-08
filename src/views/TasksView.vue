<script setup>
import { onMounted, ref, computed } from 'vue'
import { useTaskStore } from '../stores/taskStore'
import TaskList from '../components/TaskList.vue'
import TaskForm from '../components/TaskForm.vue'

const store = useTaskStore()
const filtro = ref('todas')

onMounted(() => {
  store.cargarTareasAPI()
})

const tareasFiltradas = computed(() => {
  if (filtro.value === 'pendientes') return store.tareas.filter(t => !t.completada)
  if (filtro.value === 'completadas') return store.tareas.filter(t => t.completada)
  return store.tareas
})
</script>

<template>
  <main class="container">
    <h2>Gestor de Tareas</h2>
    <TaskForm />

    <div class="filtros">
      <button @click="filtro = 'todas'">Todas</button>
      <button @click="filtro = 'pendientes'">Pendientes</button>
      <button @click="filtro = 'completadas'">Hechas</button>
    </div>

    <div v-if="store.cargando">Cargando tareas desde la API...</div>
    <TaskList v-else :tareas="tareasFiltradas" />
  </main>
</template>