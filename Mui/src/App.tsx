import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePAge from './pages/Home/HomePAge'
import Layout from './components/Layout/index'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { theme } from './styles/matrial'
import { CacheProvider } from '@emotion/react'
import { cacheRtl } from './styles/chase'
import { GlobalStyles } from '@mui/material'
import { GlobalStyled } from './styles/global'


function App() {
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <GlobalStyles styles={GlobalStyled} />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<HomePAge />} />
            </Route>
          </Routes>
        </BrowserRouter>
        <CssBaseline />
      </ThemeProvider>
    </CacheProvider>
  )
}

export default App
