import axios from 'axios'
import { type SignupPayload } from '../../types/auth'
import { type LoginResponseType, type LoginSchemaType } from '../../types/auth'

const BASE_URL = import.meta.env.VITE_ZENO_SERVER_BASE_URL

export const authSignup = async (data: SignupPayload): Promise<void> => {
  try {
    const response = await axios.post<any>(`${BASE_URL}/auth/signup`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    console.log('Signup API Response:', response.data) // Log the response data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Signup failed:', error.response?.data || error.message)
      throw new Error(error.response?.data?.message || 'An unknown error occurred during signup.')
    } else {
      console.error('An unexpected error occurred:', error)
      throw new Error('An unexpected error occurred during signup.')
    }
  }
}

export const authLogin = async (data: LoginSchemaType): Promise<LoginResponseType> => {
  try {
    const response = await axios.post<LoginResponseType>(`${BASE_URL}/auth/login`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    console.log('Login API Response:', response.data) // Log the response data

    return response.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Login failed:', error.response?.data || error.message)
      throw new Error(error.response?.data?.message || 'An unknown error occurred during login.')
    } else {
      console.error('An unexpected error occurred:', error)
      throw new Error('An unexpected error occurred during login.')
    }
  }
}
