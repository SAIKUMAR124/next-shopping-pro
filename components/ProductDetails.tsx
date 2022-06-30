
import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import Image from 'next/image'
import { NextRouter, useRouter } from 'next/router'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Dispatch } from 'redux'
import { RootState } from '../state/reducers'
import { addItemToCart } from '../state/reducers/cart/cartActions'
import { ProductProps } from '../types/Product.types'

const ProductDetails = ({ product }: ProductProps | any) => {
  const [showDescription, setShowDescription] = useState(false)
  const dispatch: Dispatch<any> = useDispatch();
  const router: NextRouter = useRouter();
  const cart: ProductProps[] | [] = useSelector((state: RootState) => state.cartProducts.cart)

  return (
    <Card sx={{
      borderRadius: '8px',
      boxShadow: 3,
      cursor: 'pointer',
    }}  >
      <Box textAlign='center' py={1} position='relative' >
        <Image src={product.image} height="150px" width="100%" alt={product.title} />
        <Box component='span' position='absolute' bottom='12px' left='16px' bgcolor='secondary.main' color='white' px={2} py={1} sx={{ borderRadius: '4px', textTransform: "capitalize" }}>{product.category}</Box>
      </Box>
      <Box sx={{ bgcolor: '#daf5f5' }}>
        <CardContent sx={{ paddingBottom: '0px' }} >
          <Typography variant='h6' component='h1' sx={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '8px' }} noWrap >{product.title}</Typography>
          <Box display='flex' >
            <Typography sx={{ display: 'flex', alignItems: 'center' }} width='50%'><Box component='span' sx={{ fontSize: '12px' }}>Price:</Box>
              <Typography component='span' sx={{
                fontSize: '16px',
                fontWeight: 'bold',
                color: 'error.main',
                marginLeft: '8px'
              }} >{product.price}</Typography>
            </Typography>
            <Typography sx={{ fontSize: '12px', display: 'flex', alignItems: 'center' }} width='50%'><Box component='span' sx={{ fontSize: '12px' }} >Rating: </Box>
              <Typography px={1} py={0.5} sx={{
                fontSize: '12px',
                color: 'white',
                backgroundColor: (product.rating.rate > 4) ? "green" : (product.rating.rate > 2) ? "orange" : "red",
                borderRadius: '5px',
                marginLeft: '8px'
              }} component='span' >{product.rating.rate}</Typography>
            </Typography>
          </Box>
          {product.description.length > 150 ? <Box my={1} sx={{ fontSize: '12px' }}>{showDescription ? product.description : `${product.description.substring(0, 150)}...`}
            <Button onClick={() => setShowDescription(!showDescription)}>{showDescription ? <Box component='span' sx={{ fontSize: '8px' }} >see less</Box> : <Box component='span' sx={{ fontSize: '8px' }} >see more</Box>}</Button>
          </Box>
            : <Box my={1} sx={{ fontSize: '12px' }}>{product.description}</Box>}
        </CardContent>
        <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }} >
          <Button variant='contained' onClick={() => dispatch(addItemToCart(product))}>Add to Cart</Button>
          {cart.length === 0 ? '' : <Button variant='contained' onClick={() => router.push("/cart")} >Go to Cart</Button>}
        </CardActions>
      </Box>
    </Card>
  )
}

export default ProductDetails