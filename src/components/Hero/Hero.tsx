import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import hero from '../../assets/img/hero.jpg'
import powerlifting from '../../assets/img/powerlifting.jpg'
import yoga from '../../assets/img/yoga.jpg'
import crossfit from '../../assets/img/crossfit.jpg'
import boxing from '../../assets/img/boxing.jpg'
import './Hero.css'


const theme = createTheme();

export default function Album() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <main>
        {/* Hero unit */}
        <Box sx={{pt: 8,pb: 6,}}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h3"
              color="white"
              gutterBottom
            >
              Maximus fitness center
            </Typography>
            <Typography variant="h6"  color="white" paragraph>
              Join one of our gyms and sign up for one of the plans with our trainers
               and improve your health, performance and looks.
            </Typography>
            <Box
              component="img"
              sx={{ height: 180,width:300 }}
              alt="hero"
              src={hero}
            />
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button className="button" variant="contained">Get started</Button>
              <Button className="button-s" variant="outlined">Browse plans</Button>
            </Stack>
          </Container>
          
        </Box>
        <Container sx={{ py: 8 ,display:'flex',flexDirection:'column'}} maxWidth="lg">
          {/* End hero unit */}

                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column',margin:'20px' }}>
                  <CardMedia
                    component="img"
                    sx={{
                      height: '50%'
                    }}
                    image={boxing}
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Boxing
                    </Typography>
                    <Typography>
                    It is a long established fact that a reader will be distracted by 
                    Lorem Ipsum is that it has a more-or-less normal distribution of letters
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                  </CardActions>
                </Card>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column',margin:'20px' }}>
                  <CardMedia
                    component="img"
                    sx={{
                      height: '50%'
                    }}
                    image={yoga}
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Yoga
                    </Typography>
                    <Typography>
                    It is a long established fact that a reader will be distracted by 
                    Lorem Ipsum is that it has a more-or-less normal distribution of letters
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                  </CardActions>
                </Card>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column',margin:'20px' }}>
                  <CardMedia
                    component="img"
                    sx={{
                      height: '50%'
                    }}
                    image={crossfit}
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Crossfit
                    </Typography>
                    <Typography>
                    It is a long established fact that a reader will be distracted by 
                    Lorem Ipsum is that it has a more-or-less normal distribution of letters
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                  </CardActions>
                </Card>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column',margin:'20px' }}>
                  <CardMedia
                    component="img"
                    sx={{
                      height: '50%'
                    }}
                    image={powerlifting}
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Powerlifting
                    </Typography>
                    <Typography>
                    It is a long established fact that a reader will be distracted by 
                    Lorem Ipsum is that it has a more-or-less normal distribution of letters
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                  </CardActions>
                </Card>
        </Container>
      </main>
      
    </ThemeProvider>
  );
}