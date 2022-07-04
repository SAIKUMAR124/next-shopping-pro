import { Box, Button, Container } from '@mui/material'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import ProductDetails from '../../components/ProductDetails'


const ProductPage = ({ product }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    return (

        <Box component='main' minHeight='100vh' paddingTop='20px'>
            <Head>
                <title>Product page of {product.id}</title>
            </Head>
            <Container>
                <Button variant='contained' sx={{ marginBottom: '12px' }}><Link href='/'><a>Back Home</a></Link></Button>
                <Container maxWidth='sm' >
                    <ProductDetails product={product} />
                </Container>
            </Container>
        </Box>
    )
}

export default ProductPage

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const { id } = params!
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await response.json();

    if (!data) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            product: data
        }
    }
}