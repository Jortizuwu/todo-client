import todoApi from '../common/api'
import { Todo, Todos, createOrUpdateTodoBody } from '../common/interface'

const todoService = {
  createTodo: async (values: createOrUpdateTodoBody) => {
    const response = await todoApi.post<Todo>('/todo', values)
    return response.data
  },

  listAllTodo: async () => {
    const response = await todoApi.get<Todos>('/todo?limit=10&offset=0')
    return response.data
  },

  getTodo: async (id: string | null) => {
    const response = await todoApi.get<Todo>(`/todo/${id}`)
    return response.data
  },

  updateTodo: async (id: string, values: createOrUpdateTodoBody) => {
    const response = await todoApi.patch<Todo>(`/todo/${id}`, values)
    return response.data
  },
}

export default todoService
