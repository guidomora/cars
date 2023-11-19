"use client"

import { ThemeProvider } from '@emotion/react';
import { createTheme, ThemeOptions } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Poppins } from 'next/font/google';


const poppins = Poppins({
    weight: ["300", "400", "500", "600", "700", ],
    subsets:['latin']
})

const themeOptions: ThemeOptions = {
    palette: {
        primary: {
            main: '#fff'
        },
        secondary: {
            main: '#ffc300'
        }
    },
    typography: {
        fontFamily: poppins.style.fontFamily,
    }
}

const theme = createTheme(themeOptions)

export default function ThemeRegistry({children}: {children: React.ReactNode}) {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            {children}
        </ThemeProvider>
    )
}