<script setup>
import { ref } from 'vue'
import { useTaskStore } from '../stores/taskStore'

const store = useTaskStore()
const nuevaTarea = ref('')

const submitTarea = () => {
  if (nuevaTarea.value.trim() !== '') {
    store.agregarTarea(nuevaTarea.value)
    nuevaTarea.value = ''
  }
}
</script>

<template>
  <form @submit.prevent="submitTarea" class="task-form">
    <input v-model="nuevaTarea" type="text" placeholder="Escribe una nueva tarea..." required />
    <button type="submit">Agregar</button>
  </form>
</template>

<style scoped>
.task-form { margin-bottom: 20px; display: flex; gap: 10px; }
input { flex: 1; padding: 8px; }
</style>