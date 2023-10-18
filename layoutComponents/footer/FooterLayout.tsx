import { Box, Grid, Link, Typography } from '@mui/material'

import React from 'react'
import { BsWhatsapp } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";

const FooterLayout = () => {
  return (
    <Grid bgcolor={'black'} p={3}>
      <Box display={'flex'} alignContent={'center'}>
        <Link target='_blank' href='https://www.google.com.ar/maps' sx={{ color: 'black', textDecoration: "none" }}>
          <Typography mr={1} color='#dadada'>Ubicación calle 1234</Typography>
        </Link>
        <CiLocationOn className='locationFooter' />
      </Box>
      <Box display={'flex'} alignContent={'center'}>
        <Link target='_blank' href='https://www.google.com.ar/maps' sx={{ color: 'black', textDecoration: "none" }}>
          <Typography mr={2} color='#dadada'>Contacto</Typography>
        </Link>
        <BsWhatsapp className='wppFooter' />
      </Box>
      <Typography color='#dadada'>Todos Los derechos reservados 2024</Typography>
    </Grid>
  )
}

export default FooterLayout