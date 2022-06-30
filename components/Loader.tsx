import { Box, CircularProgress } from '@mui/material'
import React from 'react'

const Loader = () => {
  return (
    <Box minHeight='100vh' display='flex' justifyContent='center' alignItems='center'>
      <CircularProgress size={100} />
    </Box>
  )
}

export default Loader