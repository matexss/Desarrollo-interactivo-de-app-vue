<script setup>
defineProps({
  tarea: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="task-item">
    <input type="checkbox" :checked="tarea.completada" />
    <span :class="{ completada: tarea.completada }">{{ tarea.titulo }}</span>
    <button>Eliminar</button>
  </div>
</template>

<style scoped>
.task-item { border: 1px solid #ccc; padding: 10px; margin-bottom: 5px; display: flex; gap: 10px; }
.completada { text-decoration: line-through; color: gray; }
</style>