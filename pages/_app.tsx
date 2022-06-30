import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Box } from '@mui/material'
import { Router } from 'next/router'
import { useState } from 'react';
import Loader from '../components/Loader';
import Header from '../components/Header';
import { Provider } from 'react-redux';
import store from '../state/store';

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);

  Router.events.on('routeChangeStart', (url) => {
    setLoading(true)
  })
  Router.events.on('routeChangeComplete', (url) => {
    setLoading(false)
  })

  return <Box component='div' sx={{ bgcolor: '#fcf0cf', minHeight: '100vh' }} >
    <Provider store={store}>
      <Header />
      {loading ? <Loader /> : <Component {...pageProps} />}

    </Provider>
  </Box>
}

export default MyApp
