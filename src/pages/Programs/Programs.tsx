import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MainFeaturedPost from './MainProgram';
import FeaturedPost from './Program';


const mainFeaturedPost = {
  title: 'Advanced Program',
  description:
    "Our advanced program will give you the best results in the shortest time possible",
  image: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
  imageText: 'main image description',
  linkText: 'Continue reading…',
};

const featuredPosts = [
  {
    title: 'Weight lifting',
    date: 'Nov 12',
    description:
      'Starting November this year we will launch new program for best price',
    image: 'https://images.unsplash.com/photo-1517964603305-11c0f6f66012?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
    imageLabel: 'Image Text',
  },
  {
    title: 'Cardio program',
    date: 'May 11',
    description:
      'Starting May next year we will launch new program for cardio',
    image: 'https://images.unsplash.com/photo-1626252346582-c7721d805e0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    imageLabel: 'Image Text',
  },
  {
    title: 'Calisthenics program',
    date: 'June 1',
    description:
      'Starting June next year we will launch calisthenics program in our gyms',
    image: 'https://images.unsplash.com/photo-1634225251578-d5f6ffced78a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    imageLabel: 'Image Text',
  },
  {
    title: 'Aerobics program',
    date: 'August 1',
    description:
      'Starting August next year we will launch new program for aerobics',
    image: 'https://plus.unsplash.com/premium_photo-1661690596989-d2fa45e16b2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    imageLabel: 'Image Text',
  },
];



const theme = createTheme();

export default function Programs() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg" sx={{marginTop:'150px'}}>
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          
        </main>
      </Container>
      
    </ThemeProvider>
  );
}