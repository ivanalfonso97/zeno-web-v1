import { type SignupPayload, type SignupResponseType } from '../types/auth'
import { type LoginResponseType, type LoginSchemaType } from '../types/auth'

const BASE_URL = import.meta.env.VITE_ZENO_SERVER_V1_BASE_URL

export const authSignup = async (payload: SignupPayload): Promise<SignupResponseType> => {
  try {
    const response = await fetch(`${BASE_URL}/auth/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData.message || `Signup failed with status ${response.status}`)
    }

    const responseData: SignupResponseType = await response.json()

    return responseData
  } catch (error) {
    console.error('Signup failed:', error)
    throw error
  }
}

export const authLogin = async (payload: LoginSchemaType): Promise<LoginResponseType> => {
  try {
    const response = await fetch(`${BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData.message || `Login failed with status ${response.status}`)
    }

    const responseData: LoginResponseType = await response.json()

    return responseData
  } catch (error) {
    console.error('Login failed:', error)
    throw error
  }
}
