import { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

const ERROR_MESSAGES: Record<string, string> = {
  'no_user_id_in_state': 'User session expired. Please try again.',
  'no_code': 'Authorization code is missing. Please try again.'
}

function LinkGoogleCalendarPage() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const [error, setError] = useState<string | null>(null)
  const [isSuccess, setIsSuccess] = useState(false)

  useEffect(() => {
    const status = searchParams.get('status')
    const errorMessage = searchParams.get('message')
    const errorType = searchParams.get('error')

    if (status === 'success') {
      setIsSuccess(true)
      return
    }

    if (errorMessage) {
      setError(errorMessage)
      return
    }

    if (errorType) {
      setError(ERROR_MESSAGES[errorType] || 'An error occurred while connecting Google Calendar')
      return
    }
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
        <p className="text-gray">Please wait while we connect your calendar...</p>
      </div>
    </div>
  )
}

export default LinkGoogleCalendarPage 