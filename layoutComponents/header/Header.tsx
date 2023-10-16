import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'

const Header = () => {
  return (
    <Grid bgcolor={'black'}>
      <Box height={100} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
        <Box width={"25vw"}>
          <Typography color={"primary.main"}>logo</Typography>
        </Box>
        <Box display={'flex'} alignItems={'center'}>
          <Typography color={"primary.main"} ml={5} mr={5}>Todo nuestro catálogo</Typography>
          <Button variant="outlined" sx={{color:"secondary.main", ml:5, mr:5, textTransform:"none"}}>Contactanos!</Button>
          <Typography color={"primary.main"} ml={5} mr={5}>loguito</Typography>
        </Box>

      </Box>
    </Grid>
  )
}

export default Header