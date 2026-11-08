# Gestor de Tareas - Grupo 3 (Vue)

## Bloque 1: Panorama
* **Origen y creador:** Fue creado en 2014 por Evan You, quien buscaba tomar las mejores ideas de Angular pero haciendo una herramienta mucho más ligera y fácil de aprender.
* **Versión actual:** La versión más moderna es Vue 3, la cual trajo una nueva forma de escribir código (Composition API) para hacerlo más ordenado y rápido.
* **Licencia:** Utiliza la licencia MIT, lo que significa que es totalmente gratis, de código abierto y lo puedes usar para cualquier proyecto, ya sea de la universidad o para vender.
* **Filosofía:** Es un "framework progresivo", es decir, se adapta a ti: puedes usarlo solo para darle interactividad a un botón de tu página, o sumarle más herramientas oficiales para armar aplicaciones gigantes.
## Bloque 2: Instalación
Creamos el proyecto usando Vite (`npm create vue@latest`). La estructura generada separa el código fuente en `src/`, donde tenemos `components/` para la UI, `views/` para las páginas, y `stores/` para el estado global.
 
**Error encontrado:** Al borrar los componentes de ejemplo, la consola dio error porque `router/index.js` seguía buscando las vistas viejas.
**Solución:** Limpiamos las importaciones en el router y dejamos el `App.vue` solo con un `<RouterView />`.