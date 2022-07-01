import { Box, Card, CardContent, Container, Divider, Typography, useMediaQuery, useTheme } from '@mui/material'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../components/CartItem'
import HeadingWrap from '../components/HeadingWrap'
import { RootState } from '../state/reducers'
import { CartProProps } from '../types/Cart.types'

const Cart = () => {
  const cart: CartProProps[] | [] = useSelector((state: RootState) => state.cartProducts.cart)
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [sum, setSum] = useState(0);

  useEffect(() => {
    let total = 0
    for (const item of cart) {
      const productTotal = item.price * item.qty;
      total = total + productTotal
      setSum(total)
    }
  }, [cart])

  return (
    <Container disableGutters={isMobile ? true : false} sx={{ marginTop: '8px', sm: { mx: '10px' } }}>
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
            <Box>Total = {sum}</Box>
        </Card>
      </> : <Box height='100vh' display='flex' justifyContent='center' alignItems='center'>
        <Typography variant='h5' component='h1'> Your Cart is Empty</Typography>
      </Box>
      }

    </Container >
  )
}

export default Cart