import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePAge from './pages/Home/HomePAge'
import Layout from './components/Layout/index'
import TermsPage from './pages/Terms/Index'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { theme } from './styles/matrial'
import { CacheProvider } from '@emotion/react'
import { cacheRtl } from './styles/chase'
import { GlobalStyles } from '@mui/material'
import { GlobalStyled } from './styles/global'
import { Details } from '@mui/icons-material'
import { AppContext } from './context/store'
import { useState } from 'react'
import { Food } from './@types/api.types'


const App: React.FC = (): JSX.Element => {
  const [basket, setBasket] = useState<Food[]>([])

  return (
    <AppContext.Provider value={{ basket, setBasket }}>
      <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={theme}>
          <GlobalStyles styles={GlobalStyled} />
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Layout />}>
                <Route index element={<HomePAge />} />
                <Route path='/:id' element={<Details />} />
                <Route path='terms' element={<TermsPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
          <CssBaseline />
        </ThemeProvider>
      </CacheProvider>
    </AppContext.Provider>
  )
}

export default App
