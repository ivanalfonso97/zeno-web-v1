import { useEffect, useState } from 'react'
import { getIntegrationStatus } from '../../lib/api/integrations/integrationsApi'
import { getLinkGoogleCalendarUrl } from '../../lib/api/integrations/googleCalendar'

function IntegrationsPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [isGoogleCalendarConnected, setIsGoogleCalendarConnected] = useState(false)
  const [googleCalendarEmail, setGoogleCalendarEmail] = useState('')

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const status = await getIntegrationStatus()
        
        // Safely access nested properties with optional chaining and nullish coalescing
        const googleCalendarStatus = status?.integrations?.google_calendar ?? {}
        setIsGoogleCalendarConnected(googleCalendarStatus.is_connected ?? false)
        setGoogleCalendarEmail(googleCalendarStatus.email ?? '')
      } catch (error) {
        console.error('Failed to fetch integration status:', error)
        // Set default values on error
        setIsGoogleCalendarConnected(false)
        setGoogleCalendarEmail('')
      } finally {
        setIsLoading(false)
      }
    }

    fetchStatus()
  }, [])

  const handleGoogleCalendarConnect = async () => {
    try {
      const data = await getLinkGoogleCalendarUrl()
      
      if (!data?.auth_url) {
        throw new Error('No auth URL received from server')
      }

      window.location.href = data.auth_url
    } catch (error) {
      console.error('Failed to connect to Google Calendar:', error)
      // TODO: Show error toast
    }
  }

  if (isLoading) {
    return (
      <div className="p-8">
        <h1 className="heading font-bold text-dark dark:text-white mb-6">Integrations</h1>
        <div className="animate-pulse">
          <div className="h-24 bg-white dark:bg-opacity-5 rounded-2xl mb-4"/>
        </div>
      </div>
    )
  }

  return (
    <div className="p-8">
      <h1 className="heading font-bold text-dark dark:text-white mb-6">Integrations</h1>
      
      <div className="grid gap-4">
        <button
          onClick={handleGoogleCalendarConnect}
          className="flex items-center gap-4 p-6 rounded-2xl bg-white dark:bg-opacity-5 border border-transparent hover:border-primary transition-colors"
        >
          <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-white dark:bg-dark-surface">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
              <path d="M21.8055 10.0415H21V10H12V14H17.6515C16.827 16.3285 14.6115 18 12 18C8.6865 18 6 15.3135 6 12C6 8.6865 8.6865 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C6.4775 2 2 6.4775 2 12C2 17.5225 6.4775 22 12 22C17.5225 22 22 17.5225 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z" fill="#FFC107"/>
              <path d="M3.15295 7.3455L6.43845 9.755C7.32745 7.554 9.48045 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C8.15895 2 4.82795 4.1685 3.15295 7.3455Z" fill="#FF3D00"/>
              <path d="M12 22C14.583 22 16.93 21.0115 18.7045 19.404L15.6095 16.785C14.5718 17.5742 13.3038 18.0011 12 18C9.39903 18 7.19053 16.3415 6.35853 14.027L3.09753 16.5395C4.75253 19.778 8.11353 22 12 22Z" fill="#4CAF50"/>
              <path d="M21.8055 10.0415H21V10H12V14H17.6515C17.2571 15.1082 16.5467 16.0766 15.608 16.7855L15.6095 16.7845L18.7045 19.4035C18.4855 19.6025 22 17 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z" fill="#1976D2"/>
            </svg>
          </div>
          <div className="flex-1 text-left">
            <h3 className="large-bold text-dark dark:text-white">Google Calendar</h3>
            <p className="medium-light text-gray">
              {isGoogleCalendarConnected && googleCalendarEmail
                ? `Connected as ${googleCalendarEmail}`
                : 'Connect your Google Calendar to schedule meetings'}
            </p>
          </div>
          <div className="text-dark dark:text-white">
            {isGoogleCalendarConnected ? (
              <i className="bi bi-check-circle-fill text-support-green icon-large"/>
            ) : (
              <i className="bi bi-chevron-right icon-regular"/>
            )}
          </div>
        </button>
      </div>
    </div>
  )
}

export default IntegrationsPage 