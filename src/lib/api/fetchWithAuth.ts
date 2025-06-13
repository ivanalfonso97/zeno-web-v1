const getAuthToken = () => {
  return sessionStorage.getItem('jwt-access')
}

// Global callback for authentication errors
let onAuthErrorCallback: (() => void) | null = null

export const setOnAuthErrorCallback = (callback: () => void) => {
  onAuthErrorCallback = callback
}

export class AuthError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'AuthError'
  }
}

export const fetchWithAuth = async (endpoint: string, options: RequestInit = {}) => {
  const token = getAuthToken()
  
  if (!token) {
    // If no token, trigger callback and throw AuthError
    if (onAuthErrorCallback) {
      onAuthErrorCallback()
    }
    throw new AuthError("No authentication token found")
  }

  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
    ...options.headers,
  }

  const response = await fetch(endpoint, {
    ...options,
    headers,
  })

  if (response.status === 401) {
    // On 401, trigger callback and throw AuthError
    if (onAuthErrorCallback) {
      onAuthErrorCallback()
    }
    throw new AuthError('Unauthorized: Token expired or invalid')
  }

  return response
} 