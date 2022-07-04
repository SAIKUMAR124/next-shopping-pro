import { Box, Button, Card, CardContent, Container, Divider, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import Head from 'next/head'
import { NextRouter, useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Dispatch } from 'redux'
import CartItem from '../components/CartItem'
import { RootState } from '../state/reducers'
import { emptyCart } from '../state/reducers/cart/cartActions'
import { CartProProps } from '../types/Cart.types'

const Cart = () => {
  const cart: CartProProps[] | [] = useSelector((state: RootState) => state.cartProducts.cart)
  const theme = useTheme();
  const isMobile: boolean = useMediaQuery(theme.breakpoints.down('sm'));
  const [sum, setSum] = useState(0);
  const router: NextRouter = useRouter();
  const dispatch: Dispatch<any> = useDispatch();

  useEffect(() => {
    let total = 0
    for (const item of cart) {
      const productTotal = item.price * item.qty;
      total = total + productTotal
    }
    setSum(total)
  }, [cart])

  const handleEmptyCart = () => {
    dispatch(emptyCart())
    router.push('/success')
  }

  return (
    <Container disableGutters={isMobile ? true : false} sx={{ marginTop: '8px', sm: { mx: '10px' } }}>
      <Head>
        <title>Cart</title>
      </Head>
      {cart.length > 0 ? <>
        <Typography variant='h5' component='h1'>Your Cart</Typography>
        <Card sx={{ maxWidth: "sm", margin: '0 auto' }}>
          <CardContent>
            {cart.map((item: CartProProps) => {
              return <Box key={item.id}>
                <CartItem item={item} />
                <Divider />
              </Box>
            })}
          </CardContent>
          <Stack direction='row' justifyContent='space-evenly' pb={2}>
            <Box sx={{ fontSize: '24px', fontWeight: 'bold' }}>Total Amount</Box>
            <Box sx={{ fontSize: '28px', fontWeight: 'bold', color: 'red' }}>= {(Math.round(sum * 100) / 100).toFixed(2)}</Box>
          </Stack>
          <Stack direction='row' justifyContent='space-evenly' pb={2}>
            <Button onClick={() => router.push("/")} variant='contained' sx={{ minWidth: '150px' }} >Home</Button>
            <Button onClick={() => handleEmptyCart()} variant='contained' sx={{ minWidth: '150px' }}>Payment</Button>
          </Stack>
        </Card>
      </> : <Box height='100vh' display='flex' justifyContent='center' alignItems='center'>
        <Typography variant='h5' component='h1'> Your Cart is Empty</Typography>
      </Box>
      }

    </Container >
  )
}

export default Cart