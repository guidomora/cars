import { Box, Grid, TextField, Typography, Button, Divider, Select, MenuItem, InputLabel } from '@mui/material';
import React from 'react'
import styles from './SearchFilter.module.css';

const SearchFilter = () => {
  return (
    <Grid>
      <Box bgcolor={"#f8f9fa"} width={300} height={'100vh'}>
        <Button variant="contained" color='secondary' sx={{ textTransform: 'none' }}>Buscar</Button>
        <Divider sx={{ mt: 2 }} />
        <Box mt={1}>
          <Typography pl={2} mb={1} fontWeight={500}>Precio</Typography>
          <Box display={'flex'} justifyContent={'space-around'} alignItems={'center'}>
            <TextField label='minimo' color='secondary' size='small' sx={{ width: 120, '& label':{fontSize:13}, '& .MuiInputBase-root': { height: '2.1rem'} }} /> -
            <TextField label='maximo' color='secondary' size='small' sx={{ width: 120, '& label':{fontSize:13}, '& .MuiInputBase-root': { height: '2.1rem'} }} />
          </Box>
        </Box>
        <Divider sx={{ mt: 3 }} />
        <Box>
          <Typography pl={2} mb={1} mt={1} fontWeight={500}>Condición</Typography>
          <Select sx={{ ml: 2, width: 150, '& label':{fontSize:13}, '& .MuiInputBase-root': { height: '2.1rem'} }} color='secondary' size='small'>
            <MenuItem value="">
              Ninguna
            </MenuItem>
            <MenuItem value={10}>Usado</MenuItem>
            <MenuItem value={20}>Nuevo</MenuItem>
          </Select>
        </Box>
        <Divider sx={{ mt: 3 }} />
        <Box>
          <Typography pl={2} mb={1} mt={1} fontWeight={500}>Marca</Typography>
          <Select sx={{ ml: 2, width: 150}} color='secondary' size='small'>
            <MenuItem value="">
              Ninguna
            </MenuItem>
            <MenuItem value={10}>xxxx</MenuItem>
            <MenuItem value={20}>xxxx</MenuItem>
          </Select>
        </Box>
        <Divider sx={{ mt: 3 }} />
        <Box>
          <Typography pl={2} mb={1} mt={1} fontWeight={500}>Modelo</Typography>
          <Select sx={{ ml: 2, width: 150}} color='secondary' size='small'>
            <MenuItem value="">
              Ninguna
            </MenuItem>
            <MenuItem value={10}>xxxx</MenuItem>
            <MenuItem value={20}>xxxx</MenuItem>
          </Select>
        </Box>
        <Divider sx={{ mt: 3 }} />
        <Box mt={1}>
          <Typography pl={2} mb={1} fontWeight={500}>Kilómetros</Typography>
          <Box display={'flex'} justifyContent={'space-around'} alignItems={'center'}>
            <TextField label='minimo' color='secondary' size='small' sx={{ width: 120, '& label':{fontSize:13}, '& .MuiInputBase-root': { height: '2.1rem'} }} /> -
            <TextField className={styles.textfield} label='maximo' color='secondary' size='small' sx={{ width: 120, '& label':{fontSize:13}, '& .MuiInputBase-root': { height: '2.1rem'} }} />
          </Box>
        </Box>
        <Divider sx={{ mt: 3 }} />
        <Box>
          <Typography pl={2} mb={1} mt={1} fontWeight={500}>Año</Typography>
          <Select sx={{ ml: 2, width: 150}} color='secondary' size='small'>
            <MenuItem value="">
              Ninguna
            </MenuItem>
            <MenuItem  value={10}>xxxx</MenuItem>
            <MenuItem value={20}>xxxx</MenuItem>
          </Select>
        </Box>
      </Box>
    </Grid>
  )
}

export default SearchFilter