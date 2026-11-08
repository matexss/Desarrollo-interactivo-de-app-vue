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
      <button @click="store.eliminarTarea(tarea.id)">Eliminar</button>
    </div>
  </div>
</template>

<style scoped>
.task-item { 
  border: 1px solid #ccc; 
  padding: 10px; 
  margin-bottom: 5px; 
  display: flex; 
  gap: 10px; 
  align-items: center;
}
.completada { 
  text-decoration: line-through; 
  color: gray; 
}
.acciones {
  margin-left: auto; /* Empuja los botones a la derecha */
  display: flex;
  gap: 5px;
}

.btn-detalle { 
  background: #e0e0e0; 
  padding: 2px 6px; 
  text-decoration: none; 
  color: black; 
  border-radius: 4px;
  font-size: 13px;
  border: 1px solid #ccc;
}
</style>