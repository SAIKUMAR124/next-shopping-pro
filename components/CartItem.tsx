import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { Box, Grid, IconButton, Tooltip, Typography, useMediaQuery, useTheme } from '@mui/material';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { addItemToCart, removeItemFromCart, removeItemQty } from '../state/reducers/cart/cartActions';
import { CartProProps } from '../types/Cart.types';
import DeleteIcon from '@mui/icons-material/Delete';
import HeadingWrap from './HeadingWrap';

const CartItem = ({ item }: CartProProps | any) => {
  const dispatch: Dispatch<any> = useDispatch()
  const { price, qty } = item;
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(price * qty)
  }, [qty, price])

  return (
    <Grid container p={1} rowSpacing={1} flexWrap='nowrap' alignItems='center' >
      <Grid item sx={{ paddingRight: '5px' }} minWidth='50px' >
        <Image src={item.image} height="50px" width="50px" alt={item.title} />
      </Grid>
      <Grid item sx={{ marginLeft: '5px' }}>
        <HeadingWrap>{item.title}</HeadingWrap>
        <Box >
          <Typography variant='body1' component='span' bgcolor='#9c27b0' p={0.3} color='white' sx={{ fontSize: '8px',  borderRadius: '4px', width: '120px' }}>{item.category}</Typography>
          <Grid container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            sx={{ fontSize: { xs: '16px' } }}
          >
            <Box>{price} X {qty}</Box>
            <Box>
              <Tooltip title="Add Quantity">
                <IconButton
                  onClick={() => dispatch(addItemToCart(item))}
                  sx={{ display: 'flex', flexDirection: 'column', padding: '0px', margin: "0px" }}>
                  <ArrowDropUpIcon sx={{ padding: '0px', margin: "0px" }} fontSize="small" />
                </IconButton>
              </Tooltip>

              {item.qty > 1 ? <Tooltip title="Remove Quantity">
                <IconButton
                  onClick={() => dispatch(removeItemQty(item.id))}
                  sx={{ display: 'flex', flexDirection: 'column', padding: '0px', margin: "0px" }}>
                  <ArrowDropDownIcon sx={{ padding: '0px', margin: "0px" }} fontSize="small" />
                </IconButton>
              </Tooltip> :
                <Tooltip title="Remove Quantity">
                  <IconButton
                    onClick={() => dispatch(removeItemFromCart(item.id))}
                    sx={{ display: 'flex', flexDirection: 'column', padding: '0px', margin: "0px" }}>
                    <DeleteIcon sx={{ padding: '0px', margin: "0px", fontSize: '0.8rem', marginLeft: '4px' }} />
                  </IconButton>
                </Tooltip>}
            </Box>
            <Box> = {total}</Box>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  )
}

export default CartItem