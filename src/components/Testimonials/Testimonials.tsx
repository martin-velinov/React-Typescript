import Container from '@mui/material/Container';
import Testimonial from "./interfaces/Testimonial";
import TestimonialBlock from "./TestimonialsBlock";
import Grid from '@mui/material/Grid';

interface Props {
  testimonials: Testimonial[];
}

export default function Testimonials({
  testimonials,
}: Props): JSX.Element {
  return (
    <Container maxWidth="md">
      <Grid container spacing={2}>
        {testimonials.map((testimonial, index) => (
          <TestimonialBlock testimonial={testimonial} key={index} />
        ))}
      </Grid>
    </Container>
  );
}