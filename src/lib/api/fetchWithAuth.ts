import axios from 'axios'

const getAuthToken = () => {
  return sessionStorage.getItem('jwt-access')
}

export const fetchWithAuth = async (endpoint: string, options: any = {}) => {
  const token = getAuthToken()
  
  if (!token) {
    // TODO: Logout
    throw new Error("No authentication token found")
  }

  return axios({
    url: endpoint,
    ...options,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
      ...options.headers,
    },
  })
} 