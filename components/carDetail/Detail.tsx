import { Box, Button, Divider, Grid, Typography } from '@mui/material'
import React from 'react'
import imagen from "../../img/a45.jpg"

const Detail = () => {
  return (
    <Grid display={'flex'} justifyContent={'space-around'} paddingTop={15}>
      <Box>
        <img style={{ width: 900 }} src="https://http2.mlstatic.com/D_NQ_NP_2X_863424-MLA72845406536_112023-F.webp" alt="" />
      </Box>
      <Box ml={2} mr={2}>
        <Typography fontWeight={"bolder"} sx={{ fontSize: 30 }}>Nombre del auto</Typography>
        <Box display={'flex'}>
          <Typography mr={1} color={'grey'}>12345km </Typography>
          <Typography color={'grey'}>2023</Typography>
        </Box>
        <Typography sx={{ fontSize: 45 }}>$70.000</Typography>
        <Button color="success" variant="outlined" sx={{textTransform:"none"}}>Contactar por WhatsApp</Button>
        <Box>
          <Divider />
          <Typography mt={2} mb={2} sx={{ fontSize: 20 }}>Características</Typography>
          <Box>
            <Typography><strong>Marca:</strong>Audi</Typography>
            <Typography><strong>Modelo:</strong>Q3</Typography>
            <Typography><strong>Combustible:</strong>  Nafta</Typography>
            <Typography><strong>Motor:</strong>  1.4</Typography>
            <Typography><strong>Transmisión:</strong>  Automática</Typography>
            <Typography><strong>CV:</strong>  150</Typography>
            <Typography><strong>Puertas:</strong>  5</Typography>
            <Typography><strong>Comentarios:</strong>  Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Assumenda perspiciatis aperiam quia in, aspernatur</Typography>
          </Box>
        </Box>
      </Box>
    </Grid>
  )
}

export default Detail