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

## Bloque 5: Navegación y Conexión de Datos (API)
- **Navegación entre pantallas:** Usamos Vue Router para movernos por la aplicación de forma rápida y fluida, sin que la página tenga que volver a cargarse por completo. Configuramos estas "direcciones" en el archivo `src/router/index.js` para que nos lleven a las pantallas que guardamos en la carpeta `views/`.
- **Traer datos de internet (API):** Utilizamos la herramienta `fetch` para pedir información externa y guardarla en nuestro sistema (Pinia). Para que esto ocurra automáticamente, usamos `onMounted`, que es una instrucción que le dice a la aplicación: "descarga los datos en el mismo instante en que el usuario abra la pantalla principal".
- **Problema que tuvimos (Obligatorio):** Al intentar descargar los datos desde el servicio externo `jsonplaceholder`, las tareas no aparecían en nuestra pantalla, a pesar de que el sistema sí las estaba recibiendo internamente.
- **Cómo lo arreglamos:** Nos dimos cuenta de que la información de internet venía con etiquetas en inglés como `title` (título) y `completed` (completado), pero nuestra aplicación estaba esperando recibir las palabras en español como `titulo` y `completada`. Tuvimos que transformar y adaptar esa lista de datos antes de guardarla para que nuestra aplicación pudiera leerla correctamente.