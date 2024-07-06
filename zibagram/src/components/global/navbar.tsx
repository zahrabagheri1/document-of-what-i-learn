import { useNavigate } from "react-router-dom"

export default function Navbar() {
  const navigate = useNavigate()
  return (
    <header className="relative bg-white p-3 shadow-md w-full flex justify-between">
      <h1 className="text-3xl text-blue-600 ">Zibageram</h1>
      <button type="submit" className="text-white bg-blue-700 
      hover:bg-blue-800 focus:ring-none font-medium rounded-lg 
      text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 
      dark:hover:bg-blue-700 focus:outline-none 
      dark:focus:ring-blue-800" onClick={() => navigate("/")}>see posts</button>

    </header>
  )
}