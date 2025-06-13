const getAuthToken = () => {
  return sessionStorage.getItem('jwt-access')
}

export const fetchWithAuth = async (endpoint: string, options: RequestInit = {}) => {
  const token = getAuthToken()
  
  if (!token) {
    // TODO: Logout
    throw new Error("No authentication token found")
  }

  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
    ...options.headers,
  }

  return fetch(endpoint, {
    ...options,
    headers,
  })
} 