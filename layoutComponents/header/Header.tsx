import { Box, Button, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import logo from "../../img/1.png"

const Header = () => {
  return (
    <Grid bgcolor={'black'}>
      <Box sx={{height:{xs:200, md:100}, flexDirection:{xs:"column", sm:"row"}, justifyContent:{xs:'unset', sm:'space-between'}}} display={'flex'} flexWrap={'wrap'} alignItems={'center'}>
        <Box sx={{width:{sm:"25vw"}, mt:{xs:3, sm:0}, ml:{xs:0, sm:3}}}>
          <Image src={logo} alt='logo' height={70} />
        </Box>
        <Box sx={{flexDirection:{xs:"column", sm:'row'}, justifyContent:{xs:'space-evenly', sm:'none'}}} display={'flex'} alignItems={'center'}>
          <Typography sx={{mb:{xs:3, sm:0}}} color={"primary.main"} ml={5} mr={5}>Todo nuestro catálogo</Typography>
          <Button variant="outlined" sx={{ color: "secondary.main", ml: 5, mr: 5, textTransform: "none" }}>Contactanos!</Button>
          <Typography sx={{display:{xs: 'none', sm:'unset'}}} color={"primary.main"} ml={5} mr={5}>loguito</Typography>
        </Box>
      </Box>
    </Grid>
  )
}

export default Header