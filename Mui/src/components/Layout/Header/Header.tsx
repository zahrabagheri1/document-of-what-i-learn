import { AppBar, Stack } from '@mui/material'
import React from 'react'

function Header() {
    return (
        <>
            <AppBar>
                {/* <AppBar> is header component </AppBar> */}
                {/* div => Stack and Box  */}
                {/* box has elevation  */}
                <Stack>
                    <Stack></Stack>
                    <Stack></Stack>
                </Stack>
            </AppBar>
        </>
    )
}

export default Header