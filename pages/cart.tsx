import { Box, Card, CardContent, Container, Typography, useMediaQuery, useTheme } from '@mui/material'
import { useSelector } from 'react-redux'
import CartItem from '../components/CartItem'
import HeadingWrap from '../components/HeadingWrap'
import { RootState } from '../state/reducers'
import { CartProProps } from '../types/Cart.types'

const Cart = () => {
  const cart: CartProProps[] | [] = useSelector((state: RootState) => state.cartProducts.cart)
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));


  return (
    <Container disableGutters={isMobile ? true: false} sx={{ marginTop: '8px', sm: {mx: '10px'} }}>
      {cart.length > 0 ? <>
        <Typography variant='h5' component='h1'>Your Cart</Typography>
        <Card>
          <CardContent>
            {cart.map((item: CartProProps) => {
              return <Box key={item.id}><CartItem  item={item} /></Box>
            })}
          </CardContent>
        </Card>
      </> : <Box height='100vh' display='flex' justifyContent='center' alignItems='center'>
        <Typography variant='h5' component='h1'> Your Cart is Empty</Typography>
      </Box>}

    </Container>
  )
}

export default Cart