import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import { Outlet } from 'react-router-dom'
import { Container } from '@mui/material'

const index: React.FC = (): JSX.Element => {
    return (
        <>
            <Header />

            <Container maxWidth={'xl'}>
                <Outlet />
            </Container>

            <Footer />
        </>
    )
}

export default index