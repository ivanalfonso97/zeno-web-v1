import { fetchWithAuth } from '../fetchWithAuth'

const BASE_URL = import.meta.env.VITE_ZENO_SERVER_BASE_URL

export const getLinkGoogleCalendarUrl = async (): Promise<{ auth_url: string }> => {
  const response = await fetchWithAuth(`${BASE_URL}/calendar/auth-url`)
  
  if (!response.ok) {
    throw new Error(`Failed to get Google Calendar auth URL: ${response.statusText || response.status}`)
  }

  const data = response.json()

  return data
}
