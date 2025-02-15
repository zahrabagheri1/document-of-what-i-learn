
import { useState } from 'react'
import './App.css'

function App() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState<{ email: string, password: string }>({
    email: "",
    password: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setErrors({ email: "", password: "" })

    //manual validation
    if (!email.includes("@")) {
      setErrors({ ...errors, email: "Email must contain @ symbol" })
      return;
    }

    if (password.length < 8) {
      setErrors({ ...errors, password: "Password must be at least 8 characters long" })
      return;
    }

    //Submit form
    console.log("Form submitted")
  }

  return (
    <>
      <h1>Login Form</h1>
      <form className="form gap-2" onSubmit={handleSubmit}>

        <div className="form-control">
          <input className="form-input" type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <label htmlFor="email" className="form-label">Email</label>
          {errors.email && <p className='error'>{errors.email}</p>}
        </div>

        <div className="form-control">
          <input className="form-input" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <label htmlFor="password" className="form-label">Password</label>
          {errors.password && <p className='error'>{errors.password}</p>}
        </div>

        <div className="form-button-container">
          <p className="form-button-text">Click button to login</p>
          <button className="form-button" type="submit">
            <span className="back"></span>
            <span className="front"></span>
          </button>
        </div>

      </form>
    </>
  )
}

export default App
