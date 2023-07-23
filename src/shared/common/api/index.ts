import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'

const todoApi = axios.create({
  baseURL: 'http://192.168.88.8:8080/api',
})

todoApi.interceptors.request.use(async confing => {
  const value = await AsyncStorage.getItem('bound-persisted-store')
  const data = value != null ? JSON.parse(value) : null
  const { token } = data.state
  if (token) {
    // eslint-disable-next-line no-param-reassign
    confing.headers.Authorization = `Bearer ${token}`
  }
  return confing
})

export default todoApi
