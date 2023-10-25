import { Box, Card, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import mercedes from '../../img/a45.jpg'

const CarCards = () => {
  return (
    <Grid display={'flex'} justifyContent={'space-evenly'}>
      <Card sx={{ m: 5, height:400 }}>
        <CardMedia component='img' src={mercedes.src} height={250} />
        <Box p={2}>
          <Typography variant='h1' fontSize={20} fontWeight={500}>Nombre del auto</Typography>
          <Typography>$20.000.000</Typography>
          <Typography>2022</Typography>
          <Typography color='#888'>11234km</Typography>
        </Box>
      </Card>
    </Grid>
  )
}

export default CarCards