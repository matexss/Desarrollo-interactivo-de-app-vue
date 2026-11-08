<script setup>
import { ref } from 'vue'
import { useTaskStore } from '../stores/taskStore'

const store = useTaskStore()
const props = defineProps({
  tarea: { type: Object, required: true }
})

const editando = ref(false)
const tituloEditado = ref(props.tarea.titulo)

const guardarEdicion = () => {
  if (tituloEditado.value.trim() !== '') {
    store.editarTarea(props.tarea.id, tituloEditado.value)
    editando.value = false
  }
}
</script>

<template>
  <div class="task-item">
    <input type="checkbox" :checked="tarea.completada" @change="store.toggleTarea(tarea.id)" />
    
    <template v-if="editando">
      <input type="text" v-model="tituloEditado" @keyup.enter="guardarEdicion" class="input-editar" />
      <div class="acciones">
        <button class="btn-guardar" @click="guardarEdicion">Guardar</button>
        <button class="btn-cancelar" @click="editando = false">X</button>
      </div>
    </template>
    
    <template v-else>
      <span :class="{ completada: tarea.completada }">{{ tarea.titulo }}</span>
      <div class="acciones">
        <button class="btn-editar" @click="editando = true">Editar</button>
        <RouterLink :to="`/tarea/${tarea.id}`" class="btn-detalle">Ver</RouterLink>
        <button class="btn-eliminar" @click="store.eliminarTarea(tarea.id)">Eliminar</button>
      </div>
    </template>
  </div>
</template>