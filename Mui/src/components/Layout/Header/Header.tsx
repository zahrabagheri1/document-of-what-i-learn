import { AppBar, Button, Container, Stack } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function Header() {
    const navigation = useNavigate()
    return (
        <AppBar color={'transparent'} elevation={0} position='static'>
            {/* <AppBar> is header component </AppBar> */}
            {/* div => Stack and Box  */}
            {/* box has elevation  */}
            {/* stack direction flex defult is colem */}
            {/* box direction flex defult is row */}
            <Container maxWidth={'lg'}>
                <Stack
                    flexDirection={'row'}
                    justifyContent={'space-between'}
                    alignItems={'center'}
                >
                    <Stack>
                        <img
                            alt='gelato logo'
                            height={60}
                            width={60}
                            src={'https://order.gelatohouse.ir/2.15.13/img/9dcd0541179a7fde025e88026901a4be.png'} />
                    </Stack>
                    <Stack flexDirection={'row'}>
                        <Stack flexDirection={'row'} gap={2}>
                            <Button onClick={() => { navigation('/') }}>سفارش اینترنتی</Button>
                            <Button onClick={() => { navigation("/terms") }}>قوانین سایت</Button>
                        </Stack>
                        <Stack color={'primary'}>
                            <Button variant='contained'>ورود / عضویت</Button>
                        </Stack>
                    </Stack>
                </Stack>
            </Container>
        </AppBar>
    )
}

export default Header