import SearchFilter from '@/components/SearchFilter/SearchFilter'
import CarCards from '@/components/cards/carCard'
import { Grid } from '@mui/material'
import React from 'react'

const Catalogo = () => {
  return (
    <Grid display={'flex'}>
      <SearchFilter />
      <CarCards />
    </Grid>
  )
}

export default Catalogo