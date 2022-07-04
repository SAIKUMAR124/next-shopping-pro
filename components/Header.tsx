import { AppBar, Badge, Box, Button, Container, Divider, IconButton, Menu, MenuItem, Theme, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { NextRouter, useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { RootState } from '../state/reducers';
import { ProductProps } from '../types/Product.types';

const Header = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const router: NextRouter = useRouter();
    const theme: Theme = useTheme();
    const isMobile: boolean = useMediaQuery(theme.breakpoints.down("sm"));
    const cart: ProductProps[] | [] = useSelector((state: RootState) => state.cartProducts.cart)

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClick = (pageURL: string) => {
        setAnchorEl(null);
        router.push(pageURL)
    };

    return (
        <Box>
            <AppBar position='static'>
                <Container>
                    <Toolbar>
                        <Typography variant='h6' component='div' sx={{
                            flexGrow: 1,
                            textAlign: {
                                xs: 'center',
                                sm: 'start'
                            }
                        }}>
                            Shopping App
                        </Typography>
                        <div>
                            {isMobile ? (<>
                                <IconButton size='large'
                                    edge='start'
                                    color='inherit'
                                    aria-label='menu'
                                    sx={{ mr: 2 }}
                                    onClick={handleMenu}
                                >
                                    <MenuIcon />
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorEl}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right'
                                    }}

                                    open={Boolean(anchorEl)}
                                    onClose={() => setAnchorEl(null)}
                                >
                                    <MenuItem onClick={() => handleMenuClick('/')} >Home</MenuItem>
                                    <MenuItem onClick={() => handleMenuClick('/contact')} >Contact</MenuItem>
                                    <MenuItem onClick={() => handleMenuClick('/posts')} >Posts</MenuItem>
                                    <Divider />
                                    <Badge badgeContent={cart.length} color='secondary'>
                                        <MenuItem onClick={() => handleMenuClick('/cart')}  >Cart</MenuItem>
                                    </Badge>

                                </Menu>
                            </>) : (
                                <Box sx={{ color: 'white' }}>
                                    <Button color='inherit' onClick={() => handleMenuClick('/')}>Home</Button>
                                    <Button color='inherit' onClick={() => handleMenuClick('/contact')}>Contact</Button>
                                    <Button color='inherit' onClick={() => handleMenuClick('/posts')}>Posts</Button>
                                    <Badge badgeContent={cart.length} color='secondary'>
                                        <Button sx={{ color: 'white' }} onClick={() => handleMenuClick('/cart')}>Cart</Button>
                                    </Badge>
                                </Box>
                            )}
                        </div>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    )
}

export default Header