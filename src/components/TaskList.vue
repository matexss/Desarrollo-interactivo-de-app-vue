<script setup>
import { useTaskStore } from '../stores/taskStore'
import TaskItem from './TaskItem.vue'

const store = useTaskStore()
</script>

<template>
  <div class="task-list">
    <h2>Mis Tareas</h2>
    <TaskItem
      v-for="tarea in store.tareas"
      :key="tarea.id"
      :tarea="tarea"
    />
  </div>
</template>

<style scoped>
.task-list { margin-top: 20px; }
</style>