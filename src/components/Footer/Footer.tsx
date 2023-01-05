import * as React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
const footers = [
  {
    title: 'Maximus Fitness Center',
    description: ['Team', 'History', 'Contact us', 'Locations'],
  },
  {
    title: 'Programs',
    description: [
      'Boxing',
      'Yoga',
      'Crossfit',
      'Powerlifting',
    ],
  },
  {
    title: 'Pricing plans',
    description: ['Basic', 'Standard', 'Professional'],
  },
  {
    title: 'Legal',
    description: ['Privacy policy', 'Terms of use', 'Refunding'],
  },
];

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="#">
        Maximus Fitness Center
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Footer() {
  return (

    <Container
    maxWidth="md"
    component="footer"
    sx={{
      borderTop: (theme) => `1px solid ${theme.palette.divider}`,
      mt: 8,
      py: [3, 6],
    }}
  >
    <Grid container spacing={4} justifyContent="space-evenly">
      {footers.map((footer) => (
        <Grid item xs={6} sm={3} key={footer.title}>
          <Typography variant="h6" color="text.primary" gutterBottom>
            {footer.title}
          </Typography>
          <ul>
            {footer.description.map((item) => (
              <li key={item}>
                <Link href="#" variant="subtitle1" color="text.secondary">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </Grid>
      ))}
    </Grid>
    <Copyright sx={{ mt: 5 }} />
  </Container>

  );
}