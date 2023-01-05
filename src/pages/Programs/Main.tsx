import * as React from 'react';
import Typography from '@mui/material/Typography';


interface MainProps {
  posts: ReadonlyArray<string>;
  title: string;
}

export default function Main(props: MainProps) {
  const { title } = props;

  return (
    
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      

    
  );
}