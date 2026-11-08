<script setup>
import { useTaskStore } from '../stores/taskStore'
const store = useTaskStore()

defineProps({
  tarea: { type: Object, required: true }
})
</script>

<template>
  <div class="task-item">
    <input type="checkbox" :checked="tarea.completada" @change="store.toggleTarea(tarea.id)" />
    <span :class="{ completada: tarea.completada }">{{ tarea.titulo }}</span>
    
    <div class="acciones">
      <RouterLink :to="`/tarea/${tarea.id}`" class="btn-detalle">Ver</RouterLink>
      <button class="btn-eliminar" @click="store.eliminarTarea(tarea.id)">Eliminar</button>
    </div>
  </div>
</template>