import { Box, Button, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import fiesta from "../../img/fiesta.png"

const MainBody = () => {
    return (
        <Grid display={'flex'} justifyContent={'space-around'} mt={15} mb={10}>
            <Box>
                <Image src={fiesta} alt='ford fiesta'  height={300}/>
            </Box>
            <Box display={'flex'} flexDirection={'column'} p={3}>
                <Typography fontWeight={500} variant='h3'>Podés dejar tu usado en parte de pago <br /> y llevarte uno de nuestro catálogo</Typography>
                <Typography mt={3} fontSize={27} color={'grey'}>Realizamos la inspección y en el mismo día <br /> te llevas el auto que más te guste.</Typography>
                <Button variant="contained" sx={{textTransform:'none', width:150, mt:3, backgroundColor:"secondary.main"}}>Vende tu auto</Button>
            </Box>
        </Grid>
    )
}

export default MainBody