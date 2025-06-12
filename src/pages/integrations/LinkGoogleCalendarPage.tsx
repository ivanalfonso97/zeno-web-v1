import { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { fetchWithAuth } from '../../lib/api/fetchWithAuth'

const BASE_URL = import.meta.env.VITE_ZENO_SERVER_BASE_URL

function LinkGoogleCalendarPage() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const [error, setError] = useState<string | null>(null)
  const [isSuccess, setIsSuccess] = useState(false)

  useEffect(() => {
    const saveTokens = async () => {
      try {
        const status = searchParams.get('status')
        if (status !== 'success') {
          throw new Error('Google Calendar authorization failed')
        }

        const accessToken = searchParams.get('access_token')
        const refreshToken = searchParams.get('refresh_token')
        const expiry = searchParams.get('expiry')

        if (!accessToken || !refreshToken || !expiry) {
          throw new Error('Missing required tokens')
        }

        await fetchWithAuth(`${BASE_URL}/calendar/save-google-tokens`, {
          method: 'POST',
          data: {
            access_token: accessToken,
            refresh_token: refreshToken,
            expiry
          }
        })

        setIsSuccess(true)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to save Google Calendar tokens')
        console.error('Error saving tokens:', err)
      }
    }

    saveTokens()
  }, [searchParams])

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex flex-col items-center">
          <h1 className="extra-large-bold text-support-red mb-4">Error</h1>
          <p className="text-gray mb-6">{error}</p>
          <button
            onClick={() => navigate('/integrations')}
            className="btn btn-primary px-6"
          >
            Back to Integrations
          </button>
        </div>
      </div>
    )
  }

  if (isSuccess) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-support-green rounded-full flex items-center justify-center mx-auto mb-6">
            <i className="bi bi-check-lg text-[2.5rem] text-white"/>
          </div>
          <h1 className="extra-large-bold font-bold text-dark dark:text-white mb-4">Successfully Connected!</h1>
          <p className="text-gray mb-6">Your Google Calendar has been connected successfully.</p>
          <button
            onClick={() => navigate('/integrations')}
            className="btn btn-primary px-6"
          >
            Back to Integrations
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="heading font-bold text-dark dark:text-white mb-4">Connecting Google Calendar</h1>
        <p className="text-gray">Please wait while we save your calendar access...</p>
      </div>
    </div>
  )
}

export default LinkGoogleCalendarPage 