import axios from 'axios'

const BASE_URL = 'http://localhost:55731/api'

const baseFetcher = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export default baseFetcher
