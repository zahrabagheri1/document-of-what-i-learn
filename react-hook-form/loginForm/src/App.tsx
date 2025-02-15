import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import './App.css'

type FormFields = {
  email: string
  password: string
}

function App() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting }
  } = useForm<FormFields>({
    defaultValues: {
      email: 'test@test.com',
      password: 'test12345678'
    },
    resolver: zodResolver(schema)
  })

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      console.log(data)
      throw new Error()
    } catch (error) {
      setError('root', {
        message: `This ${error.message} is already in taken`
      })
    }
  }


  return (
    <>
      <h1>Login Form</h1>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>

        {/* Email */}
        <div className="form-control">
          <label htmlFor="email" className="form-label">Email</label>
          <input className="form-input"
            type="text"
            placeholder="Email"
            {...register("email",
              {
                required: 'Email is required',
                // pattern: {
                //   value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                //   message: "Invalid email address"
                // }
                validate: (value) => !value.includes('@') ? 'Invalid email address' : true
              },
            )}
          />
          {errors.email && <p className="form-error">{errors.email.message}</p>}
        </div>

        {/* Password */}
        <div className="form-control">
          <label htmlFor="password" className="form-label">Password</label>
          <input className="form-input"
            type="password"
            placeholder="Password"
            {...register("password",
              {
                required: 'Password is required',
                minLength: {
                  value: 8,
                  message: 'Password must be at least 8 characters long'
                }
              }
            )}
          />
          {errors.password && <p className="form-error">{errors.password.message}</p>}
        </div>


        {/* Button */}

        <button className="button" type="submit" disabled={isSubmitting}>
          <span className="button-text">{isSubmitting ? 'Submitting...' : 'Submit'}</span>
        </button>
        {errors.root && <p className="form-error">{errors.root.message}</p>}

      </form>
    </>
  )
}

export default App
