import { fetchWithAuth } from '../fetchWithAuth'

const BASE_URL = import.meta.env.VITE_ZENO_SERVER_BASE_URL

export async function getIntegrationStatus() {
  const response = await fetchWithAuth(`${BASE_URL}/integrations/status`, {
    method: 'GET'
  })

  if (response.status !== 200) {
    throw new Error('Failed to fetch integration status')
  }

  return response.data
}