import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import { Outlet } from 'react-router-dom'
import { Container } from '@mui/material'

function index() {
    return (
        <>
            <Header />

            <Container maxWidth={'lg'}>
                <Outlet />
            </Container>

            <Footer />
        </>
    )
}

export default index