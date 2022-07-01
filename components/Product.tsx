
import { Box, Card, CardContent, Typography } from '@mui/material'
import Image from 'next/image'
import { NextRouter, useRouter } from 'next/router'
import { ProductProps } from '../types/Product.types'

const Product = ({ product }: ProductProps | any) => {
  const router: NextRouter = useRouter()


  const handleCardClick = (id: number) => {
    router.push(`/product/${id}`)
  }

  return (
    <Box component='div' onClick={() => handleCardClick(product.id)} >
      <Card component='div' sx={{
        borderRadius: '8px',
        boxShadow: 3,
        cursor: 'pointer',
        transition: "transform 0.15s ease-in-out",
        "&:hover": { transform: "scale3d(1.10, 1.10, 1)" }
      }}  >
        <Box textAlign='center' py={1} >
          <Image src={product.image} height="150px" width="100%" alt={product.title} />
        </Box>
        <CardContent sx={{ bgcolor: '#daf5f5' }}>
          <Typography variant='h6' component='h1' sx={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '8px' }} noWrap>{product.title}</Typography>
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
          <Box my={1} sx={{ fontSize: '12px' }}>{`${product.description.substring(0, 150)}...`}</Box>
        </CardContent>
      </Card>
    </Box>
  )
}

export default Product