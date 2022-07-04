import { Box, Card, CardContent, Container, Typography } from '@mui/material'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import React from 'react'

interface PostsProps {
    userId: number,
    id: number,
    title: string,
    body: string
}

const Posts = ({ posts }: PostsProps[] | any) => {
    return (
        <Box sx={{ marginTop: '24px' }} >
            <Head>
                <title>Posts Page</title>
            </Head>
            <Typography sx={{ textAlign: 'center' }} variant='h4' component='h1'>Posts using getStaticProrps</Typography>
            <Container sx={{ marginTop: '24px' }}>
                {posts.map((post: PostsProps) => <Card key={post.id} sx={{ marginBottom: '12px' }}>
                    <CardContent>
                        <Typography variant='h5' component='h2'>{post.title}</Typography>
                        <Typography variant='body1' component='p'>{post.body}</Typography>
                    </CardContent>
                </Card>)}
            </Container>
        </Box>
    )
}

export default Posts

export const getStaticProps: GetStaticProps = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json()

    return {
        props: {
            posts: data
        }
    }
}