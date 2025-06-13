import { type SignupPayload } from '../types/auth'
import { type LoginResponseType, type LoginSchemaType } from '../types/auth'

const BASE_URL = import.meta.env.VITE_ZENO_SERVER_BASE_URL

export const authSignup = async (data: SignupPayload): Promise<void> => {
  try {
    const response = await fetch(`${BASE_URL}/auth/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData.message || `Signup failed with status ${response.status}`)
    }
  } catch (error) {
    console.error('Signup failed:', error)
    throw error
  }
}

export const authLogin = async (data: LoginSchemaType): Promise<LoginResponseType> => {
  try {
    const response = await fetch(`${BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData.message || `Login failed with status ${response.status}`)
    }

    const responseData: LoginResponseType = await response.json()
    console.log('Login API Response:', responseData)

    return responseData
  } catch (error) {
    console.error('Login failed:', error)
    throw error
  }
}
