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

## Bloque 6: Pruebas Unitarias
Usamos **Vitest** y **Vue Test Utils** para asegurar la calidad de nuestros componentes, ya que vienen integrados de forma nativa al crear el proyecto con Vite.
* **Configuración:** Tuvimos que configurar un entorno simulado para Pinia usando `setActivePinia(createPinia())` en el `beforeEach` y evitamos errores de enrutamiento inyectando `global: { stubs: ['RouterLink'] }`.
* **Prueba 1:** Verifica que el título de la tarea se renderice correctamente pasándolo a través de las `props`.
* **Prueba 2:** Comprueba que se aplique la clase CSS `.completada` de forma condicional si el estado de la tarea es true.
* **Prueba 3:** Valida que el botón de eliminar exista y tenga el texto correcto en la interfaz.

## Bloque 7: Ecosistema y Despliegue
* **Ecosistema:** Utilizamos Vite como herramienta de construcción (muy superior en velocidad a Vue CLI) y Vue Router para el manejo de vistas. 
* **Despliegue:** Elegimos **Netlify** para el alojamiento. En lugar de subir los archivos manualmente, conectamos nuestro repositorio de GitHub directamente a Netlify. Esto configuró un flujo de despliegue continuo (CI/CD) donde Netlify ejecuta el comando `npm run build` en sus servidores automáticamente con cada nuevo commit.
* **Enlace público:** [https://rainbow-biscuit-75c936.netlify.app/]

## Tabla de Mediciones

| Métrica | Resultado | Cómo lo medimos |
| :--- | :--- | :--- |
| Tiempo de configuración inicial | **10** minutos | Medido con cronómetro desde el `npm create vite` hasta ver el "Hola Mundo". |
| Líneas de código (LOC) | **355** líneas | Usamos el comando `npx cloc src` en la terminal. |
| Tamaño del build de producción | **102.96** KB | Revisamos el peso de la carpeta `dist` tras ejecutar `npm run build` localmente. |
| Rendimiento Lighthouse (Móvil) | **91** / 100 | Usamos Chrome DevTools en la URL pública de Netlify. |
| Horas totales del grupo | **15** horas | Sumatoria de horas de los 3 integrantes. |
| Dificultad percibida | 5 / 5 | Promedio dialogado en el grupo. |

## Uso de IA y NotebookLM
Durante el desarrollo del proyecto utilizamos inteligencia artificial (Gemini) como apoyo de estudio bajo los parámetros permitidos:
* **Resolución de errores:** La usamos para entender el error `"vitest" no se reconoce como comando` provocado por la falta de la carpeta `node_modules` y problemas de versión en Node.js.
* **Explicación de conceptos:** Le pedimos que nos explicara cómo evitar el desbordamiento de elementos en CSS responsive (uso de `box-sizing: border-box` y `flex-wrap`).
* **NotebookLM:** [https://notebook.google.com/notebook/57d3b8ba-a38a-4e24-9d5f-68f28e205ab2?utm_source=gemini_notebook&utm_medium=referral]