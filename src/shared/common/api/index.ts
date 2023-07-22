import axios from 'axios'

const todoApi = axios.create({
  baseURL: 'http://localhost:8080/api',
})

// todoApi.interceptors.request.use(async confing => {
//   //   const token = window.localStorage.getItem('token')
//   //   if (token) {
//   //     confing.headers.Authorization = `Bearer ${token}`
//   //   }
//   return confing
// })

export default todoApi
