import { Box, Card, CardContent, Container, Grid, Typography } from '@mui/material'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import Link from 'next/link'

const contact = ({ contactDetails }: InferGetServerSidePropsType<typeof getServerSideProps>) => {

  return (
    <Container sx={{ minHeight: "90vh", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Card>
        <CardContent>
          <Typography variant="h4" component='h1'>Contact Details</Typography>
          <Grid container gap={2} sx={{ minWidth: "420px" }}>
            <Grid item>
              <Box>Name</Box>
              <Box>Email</Box>
              <Box>Contact</Box>
              <Box>Github Link </Box>
            </Grid>
            <Grid item>
              <Box>:</Box>
              <Box>:</Box>
              <Box>:</Box>
              <Box>:</Box>
            </Grid>
            <Grid item sx={{ fontWeight: 'bold' }}>
              <Box>{contactDetails.name}</Box>
              <Box>{contactDetails.gmail}</Box>
              <Box>{contactDetails.contactNo}</Box>
              <Box><Link href={contactDetails.githubLink}><a>{contactDetails.githubLink}</a></Link></Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  )
}

export default contact

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch("http://localhost:3000/api/contact");
  const data = await response.json();

  return {
    props: {
      contactDetails: data
    }
  }
}