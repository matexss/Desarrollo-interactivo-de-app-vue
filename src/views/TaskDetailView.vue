<script setup>
import { useRoute, useRouter } from 'vue-router'
import { useTaskStore } from '../stores/taskStore'
import { computed } from 'vue'

const route = useRoute()
const router = useRouter()
const store = useTaskStore()

const tarea = computed(() => {
  return store.tareas.find(t => t.id === Number(route.params.id))
})
</script>

<template>
  <main class="container">
    <button @click="router.push('/')">⬅ Volver al listado</button>
    
    <div v-if="tarea" class="detalle">
      <h2>Detalle de la Tarea #{{ tarea.id }}</h2>
      <p><strong>Título:</strong> {{ tarea.titulo }}</p>
      <p><strong>Estado:</strong> {{ tarea.completada ? ' Completada' : ' Pendiente' }}</p>
    </div>
    <div v-else>
      <p>Tarea no encontrada.</p>
    </div>
  </main>
</template>