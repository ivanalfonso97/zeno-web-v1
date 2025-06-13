import { type NavigateFunction } from 'react-router-dom'

export function logout(navigate: NavigateFunction) {
  sessionStorage.removeItem('jwt-access')
  sessionStorage.removeItem('user')
  navigate('/login')
} 