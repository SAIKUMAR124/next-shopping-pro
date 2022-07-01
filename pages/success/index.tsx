import { Button, Container, Typography } from '@mui/material'
import { NextRouter, useRouter } from 'next/router'
import React from 'react'

const SuccessPage = () => {
    const router: NextRouter = useRouter();

    return (
        <Container sx={{ height: '90vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Typography variant='h5' component='h1' color='success.main' sx={{ fontWeight: 'bold' }}>Successfully Placed your order</Typography>
            <Button onClick={() => router.push('/')} variant="contained" sx={{ width: '150px', marginTop: '24px' }}>Home</Button>
        </Container>
    )
}

export default SuccessPage