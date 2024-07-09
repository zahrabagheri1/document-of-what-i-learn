import { RouterProvider } from "react-router-dom"
import { router } from "./router"
import useAuth from "./hooks/useAuth"
import { AuthContext } from "./context/AuthContext"

function App() {
  const { isAuthenticated, setIsAuthenticated } = useAuth()


  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>

      <RouterProvider router={router} />
    </AuthContext.Provider>
  )
}

export default App
