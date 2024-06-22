import { AppBar, Stack } from '@mui/material'
import React from 'react'

function Header() {
    return (
        <>
            <AppBar color={'transparent'} elevation={0}>
                {/* <AppBar> is header component </AppBar> */}
                {/* div => Stack and Box  */}
                {/* box has elevation  */}
                <Stack>
                    <Stack>
                        <img
                            alt='gelato logo'
                            height={60}
                            width={60}
                            src={'https://order.gelatohouse.ir/2.15.13/img/9dcd0541179a7fde025e88026901a4be.png'} />
                    </Stack>
                    <Stack></Stack>
                </Stack>
            </AppBar>
        </>
    )
}

export default Header