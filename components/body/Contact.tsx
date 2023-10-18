import { Box, Grid, Input, TextField, Typography, Button, Link } from '@mui/material'
import { BsWhatsapp } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import React from 'react'

const Contact = () => {
    return (
        <Grid display={'flex'} justifyContent={'space-evenly'} alignItems={'center'} flexWrap={'wrap'} sx={{ mt: 10 }}>
            <Box sx={{ textAlign:{xs:'center', sm:'unset'}}}>
                <Typography sx={{fontSize:{xs:35, sm:45}}} fontWeight={500}>Nuestro WhatsApp </Typography>
                <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
                    <Link target='_blank' href='https://www.google.com.ar/maps' sx={{ color: 'black', textDecoration: "none" }}>
                        <Typography sx={{fontSize:{xs:35, sm:45}}} fontWeight={500} color={'secondary'} mr={3}>11-1111-1111</Typography>
                    </Link>
                    <BsWhatsapp className="wpp" />
                </Box>
                <Typography textAlign={'center'} mt={5} sx={{fontSize:{xs:35, sm:45}}} fontWeight={500}>Ubicación</Typography>
                <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
                    <Link target='_blank' href='https://www.google.com.ar/maps' sx={{ color: 'black', textDecoration: "none" }}>
                        <Typography sx={{fontSize:{xs:35, sm:45}}} fontWeight={500}>calle 1234</Typography>
                    </Link>
                    <CiLocationOn className='location' />
                </Box>
            </Box>
            <Box display={'flex'} flexDirection={'column'} sx={{p:{xs:3, sm:0}, textAlign:{xs:'center', sm:'unset'}}}>
                <Typography sx={{ mt: 3, fontSize:{xs:35, sm:45} }}  fontWeight={500}>Contactanos vía email</Typography>
                <TextField sx={{ mt: 3 }} label="Nombre" variant="outlined" color='secondary' />
                <TextField sx={{ mt: 3 }} label="Correo" type='email' variant="outlined" color='secondary' />
                <TextField sx={{ mt: 3 }} rows={5} label="Mensaje" placeholder='Mensaje' multiline type='text' variant="outlined" color='secondary' />
                <Button variant="contained" fullWidth sx={{ textTransform: 'none', mt: 3, backgroundColor: "secondary.main" }}>Enviar</Button>
            </Box>
        </Grid>
    )
}

export default Contact