import { useForm } from 'react-hook-form'
import { useNavigate, Link } from 'react-router-dom'
import { zodResolver } from '@hookform/resolvers/zod'

import { authSignup } from '../../lib/api/authApi'
import TextInput from '../../components/elements/input/TextInput'
import { signupSchema, type SignupSchemaType } from "../../lib/types/auth"
import PasswordInput from '../../components/elements/input/PasswordInput'

export default function SignupPage() {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupSchemaType>({
    resolver: zodResolver(signupSchema)
  })

  const onSubmit = async (data: SignupSchemaType) => {
    try {
      const payload = {
        email: data.email,
        password: data.password,
        first_name: data.firstName,
        last_name: data.lastName,
      }
      await authSignup(payload);
      console.log('Signup successful!')
      navigate('/login')
    } catch (error) {
      console.error('Signup failed:', error);
    }
  }

  return (
    <div className="flex flex-col gap-6 h-full justify-center items-center">
      <h3 className="logo-large">Zeno AI</h3>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 w-full sm:w-[400px]">
        <div className="flex flex-col gap-4 w-full">
          <TextInput
            id="firstName"
            label="First Name"
            placeholder="John"
            register={register("firstName")}
            error={errors.firstName?.message?.toString()}
          />
          <TextInput
            id="lastName"
            label="Last Name"
            placeholder="Doe"
            register={register("lastName")}
            error={errors.lastName?.message?.toString()}
          />
          <TextInput
            id="email"
            label="Email"
            placeholder="john@gmail.com"
            type="text"
            register={register("email")}
            error={errors.email?.message?.toString()}
          />
          <PasswordInput
            id="password"
            label="Password"
            placeholder="Password"
            register={register("password")}
            error={errors.password?.message?.toString()}
          />
          <PasswordInput
            id="confirmPassword"
            label="Confirm Password"
            placeholder="Confirm Password"
            register={register("confirmPassword")}
            error={errors.confirmPassword?.message?.toString()}
          />
        </div>
        <div className="flex flex-col gap-2">
          <button type="submit" className="btn-primary w-full" disabled={isSubmitting}>
            {isSubmitting ? "Creating account..." : "Sign Up"}
          </button>
          <p className="medium-regular text-center mt-6">
            Already have an account? <Link to="/login" className="link cursor-pointer">Log In</Link>
          </p>
        </div>
      </form>
    </div>
  )
} 