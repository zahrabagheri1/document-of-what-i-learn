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
import { Provider } from 'react-redux'
import { store } from './store/store'

const App: React.FC = (): JSX.Element => {

  return (
    <Provider store={store}>
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
    </Provider>
  )
}

export default App
