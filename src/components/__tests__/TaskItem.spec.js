import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import TaskItem from '../TaskItem.vue'
import { createPinia, setActivePinia } from 'pinia'

describe('TaskItem.vue', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  const globalConfig = { stubs: ['RouterLink'] }

  it('Prueba 1: renderiza el título de la tarea correctamente', () => {
    const wrapper = mount(TaskItem, {
      props: { tarea: { id: 1, titulo: 'Aprender Vitest', completada: false } },
      global: globalConfig
    })
    expect(wrapper.text()).toContain('Aprender Vitest')
  })

  it('Prueba 2: aplica la clase "completada" si la tarea está hecha', () => {
    const wrapper = mount(TaskItem, {
      props: { tarea: { id: 2, titulo: 'Tarea hecha', completada: true } },
      global: globalConfig
    })
    expect(wrapper.find('span.completada').exists()).toBe(true)
  })

  it('Prueba 3: muestra el botón de Eliminar', () => {
    const wrapper = mount(TaskItem, {
      props: { tarea: { id: 3, titulo: 'Prueba', completada: false } },
      global: globalConfig
    })
    expect(wrapper.find('.btn-eliminar').text()).toBe('Eliminar')
  })
})