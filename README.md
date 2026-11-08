# Gestor de Tareas - Grupo 3 (Vue)

## Bloque 1: Panorama
- **Origen y creador:** Fue creado en 2014 por Evan You, quien buscaba tomar las mejores ideas de Angular pero haciendo una herramienta mucho más ligera y fácil de aprender.
- **Versión actual:** La versión más moderna es Vue 3, la cual trajo una nueva forma de escribir código (Composition API) para hacerlo más ordenado y rápido.
- **Licencia:** Utiliza la licencia MIT, lo que significa que es totalmente gratis, de código abierto y lo puedes usar para cualquier proyecto, ya sea de la universidad o para vender.
- **Filosofía:** Es un "framework progresivo", es decir, se adapta a ti: puedes usarlo solo para darle interactividad a un botón de tu página, o sumarle más herramientas oficiales para armar aplicaciones gigantes.

## Bloque 2: Instalación
Creamos el proyecto usando Vite (`npm create vue@latest`). La estructura generada separa el código fuente en `src/`, donde tenemos `components/` para la UI, `views/` para las páginas, y `stores/` para el estado global.
 
- **Error encontrado:** Al borrar los componentes de ejemplo, la consola dio error porque `router/index.js` seguía buscando las vistas viejas.
- **Solución:** Limpiamos las importaciones en el router y dejamos el `App.vue` solo con un `<RouterView />`.

## Bloque 3: Componentes
En Vue, usamos Single-File Components (SFC) con la sintaxis `<script setup>`.

- **Props y Listas:** `TaskItem.vue` recibe una tarea mediante una prop, y `TaskList.vue` usa `v-for` para mostrar un componente por cada tarea.
- **Clases dinámicas:** Usamos `:class="{ completada: tarea.completada }"` para eliminar el texto si la tarea está lista.
- **Error encontrado:** Al hacer el `v-for`, la consola de Vue mostraba una advertencia indicando que faltaba una clave (`key`).
- **Solución:** Tuvimos que agregar `:key="tarea.id"` en la etiqueta del componente para que Vue pueda identificar cada elemento de la lista de forma única.

## Bloque 4: Estado y reactividad
Para el estado global utilizamos Pinia, el estándar recomendado para Vue 3.

- **Configuración:** Creamos `taskStore.js` donde usamos `ref()` de la Composition API para guardar un arreglo reactivo de tareas. Esto permite que cualquier vista acceda a la lista directamente sin tener que pasar datos de hijo a padre y viceversa.
- **Error encontrado:** Al intentar leer las tareas en `TaskList.vue`, el componente no reconocía la base de datos local y salía `undefined`.
- **Solución:** Nos faltaba importar y ejecutar el hook de Pinia correctamente. Lo solucionamos agregando `import { useTaskStore } from '../stores/taskStore'` y declarando `const store = useTaskStore()`.