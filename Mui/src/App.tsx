import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Global } from '@emotion/react'
import { GlobalStyles } from '@mui/material'
import HomePAge from './pages/Home/HomePAge'
import Layout from './components/Layout/index'


function App() {
  return (
    <BrowserRouter>
      {/* <Global styles={GlobalStyles} /> */}
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePAge />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
