import { fetchWithAuth } from '../fetchWithAuth'

const BASE_URL = import.meta.env.VITE_ZENO_SERVER_BASE_URL

export async function getIntegrationStatus() {
  const response = await fetchWithAuth(`${BASE_URL}/integrations/status`, {
    method: 'GET'
  })

  if (!response.ok) {
    throw new Error(`Failed to fetch integration status: ${response.statusText || response.status}`)
  }

  const data = response.json()

  return data
}