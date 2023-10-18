import { Box, Button, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import fiesta from "../../img/fiesta.png"
import Contact from './Contact'

const MainBody = () => {
    return (
        <Grid mt={15} mb={10}>
            <Grid display={'flex'} justifyContent={'space-around'} flexWrap={'wrap'}>
                <Box>
                    <Image src={fiesta} alt='ford fiesta' className='fiesta' />
                </Box>
                <Box display={'flex'} flexDirection={'column'} p={3} sx={{alignItems:{xs:'center', sm:'unset'}, textAlign:{xs:'center', sm:'unset'}}}>
                    <Typography fontWeight={500} variant='h3'>Podés dejar tu usado en parte de pago <br /> y llevarte uno de nuestro catálogo</Typography>
                    <Typography mt={3} fontSize={27} color='grey'>Realizamos la inspección y en el mismo día <br /> te llevas el auto que más te guste.</Typography>
                    <Button variant="contained" sx={{ textTransform: 'none', width: 150, mt: 3, backgroundColor: "secondary.main" }}>Vende tu auto</Button>
                </Box>
            </Grid>
            <Contact />
        </Grid>
    )
}

export default MainBody