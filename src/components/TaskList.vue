<script setup>
import TaskItem from './TaskItem.vue'
defineProps({
  tareas: { type: Array, required: true }
})
</script>

<template>
  <div class="task-list">
    <TaskItem v-for="tarea in tareas" :key="tarea.id" :tarea="tarea" />
  </div>
</template>