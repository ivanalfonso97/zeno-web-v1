import { useForm } from 'react-hook-form'
import { useNavigate, Link } from 'react-router-dom'
import { zodResolver } from '@hookform/resolvers/zod'

import TextInput from '../../components/elements/input/TextInput'
import PasswordInput from '../../components/elements/input/PasswordInput'
import { loginSchema, type LoginSchemaType } from '../../types/auth'
import { authLogin } from '../../lib/api/authApi'

export default function LoginPage() {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = async (data: LoginSchemaType) => {
    try {
      console.log('Login data:', data)
      const payload = {
        email: data.email,
        password: data.password
      }

      const { access_token, user } = await authLogin(payload)
      sessionStorage.setItem('jwt-access', access_token)
      sessionStorage.setItem('user', user.id)

      // TODO: We could have a get user function to get details about the user we need to render
      // const user = await getUser()
      // sessionStorage.setItem('user-details', JSON.stringify(user))

      // TODO: Link a company
      // if (user.companies && user.companies.length > 0) {
      //   navigateToHome()
      // } else {
      //   navigateToLinkCompany()
      // }
      navigate('/')
    } catch (error) {
      console.error('Login failed:', error)
    }
  }

  return (
    <div className="flex flex-col gap-6 h-full justify-center items-center">
      <h3 className="logo-large">Zeno AI</h3>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 w-full sm:w-[400px]">
        <div className="flex flex-col gap-4 w-full">
          <TextInput
            id="email"
            hasLabel={false}
            placeholder="Email"
            type="text"
            register={register("email")}
            error={errors.email?.message?.toString()}
          />
          <div className="flex flex-col gap-2">
            <PasswordInput
              id="password"
              hasLabel={false}
              placeholder="Password"
              register={register("password")}
              error={errors.password?.message?.toString()}
            />
            {/* <p
              className="small-regular link text-right cursor-pointer"
              onClick={navigateToResetPassword}
            >
              Forgot password?
            </p> */}
          </div>
        </div>
        <div className="flex flex-col">
          <button type="submit" className="btn-primary w-full" disabled={isSubmitting}>
            {isSubmitting ? "Logging In..." : "Login"}
          </button>
          <div className="relative w-full mt-6">
            <p className="medium-regular text-center">
              Don&#39;t have an account? <Link to="/signup" className="link cursor-pointer">Sign Up</Link>
            </p>
            {/* {notification && (
              <div className="absolute top-12 w-full">
                <Notification
                  message={notification.message}
                  type={notification.type}
                  onClose={() => setNotification(null)}
                />
              </div>
            )} */}
          </div>
        </div>
      </form>
    </div>
  )
} 