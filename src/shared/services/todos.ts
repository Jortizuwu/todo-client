import todoApi from '../common/api'
import { Todos } from '../common/interface'

const todoService = {
  // normal
  createTodo: async values => {
    const response = await todoApi.post('/todo', values)
    return response.data.data
  },

  listAllTodo: async () => {
    const response = await todoApi.get<Todos>('/todo?limit=10&offset=0')
    return response.data
  },

  getTodo: async (id: string) => {
    const response = await todoApi.get(`/todo/${id}`)
    return response.data.data
  },
}

export default todoService
