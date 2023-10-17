import { Box, Button, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import autos from "../../img/autosPort.png"
import styles from "../../app/page.module.css"


const Portada = () => {
  return (
    <Grid display={'flex'} justifyContent={'space-around'} className='degradado'>
      <Box p={5}>
        <Typography variant={"h1"} fontSize={60} color={"secondary.main"} fontWeight={500}>Tenemos el auto ideal para vos.</Typography>
        <Typography variant={"h2"} fontSize={50} color={"primary.main"} fontWeight={500}>0Km. y usados</Typography>
        <Button variant="contained" sx={{textTransform:'none', backgroundColor:'secondary.main', mt:3}}>Compra tu auto</Button>
      </Box>
      <Box p={5} >
        <Image src={autos} alt={'Portada de autos'} width={800} />
      </Box>
    </Grid>
  )
}

export default Portada

