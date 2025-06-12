import { fetchWithAuth } from '../fetchWithAuth'

const BASE_URL = import.meta.env.VITE_ZENO_SERVER_BASE_URL

export const getLinkGoogleCalendarUrl = async () => {
  const { data } = await fetchWithAuth(`${BASE_URL}/calendar/auth-url`)
  return data
}
