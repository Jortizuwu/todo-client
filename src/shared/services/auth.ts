import todoApi from '../common/api'
import { login, loginResponse } from '../common/interface'

const todoService = {
  login: async (values: login) => {
    const response = await todoApi.post<loginResponse>('/auth/signin', values)
    return response.data
  },
}

export default todoService
