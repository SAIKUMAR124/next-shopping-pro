import { Box, Card, CardContent, Container, Grid, Typography, useMediaQuery, useTheme } from '@mui/material'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import Link from 'next/link'

const contact = ({ contactDetails }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const theme = useTheme();
  const isMobile: boolean = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Container disableGutters={isMobile ? true : false} sx={{ minHeight: "90vh", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Card>
        <CardContent>
          <Typography variant="h4" component='h1'>Contact Details</Typography>
          <Grid container gap={2} sx={{minWidth:"420px"}}>
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

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch("http://localhost:3000/api/contact");
  const data = await response.json();

  return {
    props: {
      contactDetails: data
    }
  }
}