import axios, { AxiosInstance } from 'axios'
import Environment from '../constants/environment/Environment'

const api: AxiosInstance = axios.create({
  baseURL: Environment.api,
  timeout: 40000,
  timeoutErrorMessage: 'Serviço indisponível no momento',
  headers: {},
})

export default api
