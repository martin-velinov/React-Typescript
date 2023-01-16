
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import person1 from '../../assets/img/person_1.png'
import person2 from '../../assets/img/person_2.png'
import person3 from '../../assets/img/person_3.png'
import person4 from '../../assets/img/person_4.png'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

export default function Testimonials()  {
  return (
<Container className="people-wrap">

<Container sx={{ marginTop:'50px', textAlign:'center' }}>
   <Typography variant='h4'sx={{ paddingBottom:'50px' }}>What people say about us</Typography>
   
   <Container className='team-wrap'>

   <div className="team-1">

   <Box
     component="img"
     sx={{ height: 100,width:100 }}
     alt="Logo"
     src={person1}
   />
 
 <div className="member-info">
   <Typography variant='h6'>Bruno Marcel</Typography>
   <Typography>CEO, Vercel</Typography>
 </div>
 <FormatQuoteIcon sx={{color:'#1976d2'}}/>
 <Typography sx={{ fontStyle:'italic'}}>Sapiente voluptatem facilis pariatur nihil, amet soluta praesentium odit.</Typography>
</div>


<div  className="team-2">
   <Box
     component="img"
     sx={{ height: 100,width:100 }}
     alt="Logo"
     src={person2}
   />
 
 <div className="member-info">
   <Typography variant='h6'>Emmilia Rose</Typography>
   <Typography>Investment Banker</Typography>
 </div>
 <FormatQuoteIcon sx={{color:'#1976d2'}}/>
 <Typography sx={{ fontStyle:'italic'}}>Sapiente voluptatem facilis pariatur nihil, amet soluta praesentium odit.</Typography>
</div>


<div  className="team-3">
   <Box
     component="img"
     sx={{ height: 100,width:100 }}
     alt="Logo"
     src={person3}
   />
 
 <div className="member-info">
   <Typography variant='h6'>Simon William</Typography>
   <Typography>Senior Programmer, Endava</Typography>
 </div>
 <FormatQuoteIcon sx={{color:'#1976d2'}}/>
 <Typography sx={{ fontStyle:'italic'}}>Sapiente voluptatem facilis pariatur nihil, amet soluta praesentium odit.</Typography>
</div>


<div  className="team-4">
   <Box
     component="img"
     sx={{ height: 100,width:100 }}
     alt="Logo"
     src={person4}
   />
 
 <div className="member-info">
   <Typography variant='h6'> Jenna Colle</Typography>
   <Typography>Marketing Director, Spotify</Typography>
 </div>
 <FormatQuoteIcon sx={{color:'#1976d2'}}/>
 <Typography sx={{ fontStyle:'italic'}}> Sapiente voluptatem facilis pariatur nihil, amet soluta praesentium odit.</Typography>
</div>
   </Container>
 </Container>
 

 </Container>
  )}
