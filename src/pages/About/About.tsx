import { Container,Box,Card,Button,Typography } from '@mui/material'
import React from 'react'
import team1 from '../../assets/img/team1.jpg'
import team2 from '../../assets/img/team2.jpg'
import team3 from '../../assets/img/team3.jpg'
import team4 from '../../assets/img/team4.jpg'
import gym from '../../assets/img/gym.jpg'
import './About.css'


const About = () => {
  return (
    <Container>
      <Container className="stats"sx={{marginTop:'150px'}}>
        <Typography variant='h4'>About us</Typography>
        <Container className='about-heading'>
          <Typography>We are a fitness franchise with a long history and success stories 
            Lorem ipsum dolor sit amet 
            consectetur adipisicing elit.
            Architecto corporis enim sequi minima obcaecati tenetur odit, 
            in numquam rerum culpa
            <Button>See more</Button>
          </Typography>
          
          <Box
              className='image'
              component="img"
              sx={{ height: '60%',width:'80%' }}
              alt="Logo"
              src={gym}
            />
        </Container>
        <Container className="numbers" sx={{display:'flex',flexDirection:'column',marginTop:'50px'}}>
          <Card className="number">
            <Typography variant='h4'>15</Typography>
            <Typography>Locations</Typography>

          </Card>
          <Card className="number">
            <Typography variant='h4'>70</Typography>
            <Typography>Trainers</Typography>

          </Card>
          <Card className="number">
            <Typography variant='h4'>9.000</Typography>
            <Typography>Clients</Typography>

          </Card>
          <Card className="number">
            <Typography variant='h4'>15</Typography>
            <Typography>years</Typography>

          </Card>
        </Container>
      </Container>
       <Container className="team-wrap">

       <Container sx={{ marginTop:'30px' }}>
          <Typography variant='h5'>Take a look at our dream team</Typography>
          <Container className='team-wrap'>
          <div className="team-1">
          
          <Box
            component="img"
            sx={{ height: 200,width:200 }}
            alt="Logo"
            src={team1}
          />
        
        <div className="member-info">
          <Typography variant='h6'>Bruno Marcel</Typography>
          <Typography>Crossfit trainer</Typography>
        </div>
      </div>

    
      <div  className="team-2">
        
          <Box
            component="img"
            sx={{ height: 200,width:200 }}
            alt="Logo"
            src={team2}
          />
        
        <div className="member-info">
          <Typography variant='h6'>Emmilia Rose</Typography>
          <Typography>Fitness coach</Typography>
        </div>
      </div>


      <div  className="team-3">
        
          <Box
            component="img"
            sx={{ height: 200,width:200 }}
            alt="Logo"
            src={team3}
          />
        
        <div className="member-info">
          <Typography variant='h6'>Simon William</Typography>
          <Typography>Powerlifting coach</Typography>
        </div>
      </div>

  
      <div  className="team-4">
        
          <Box
            component="img"
            sx={{ height: 200,width:200 }}
            alt="Logo"
            src={team4}
          />
        
        <div className="member-info">
          <Typography variant='h6'> Jenna Colle</Typography>
          <Typography> Aerobics coach</Typography>
        </div>
      </div>
          </Container>
        </Container>
        
  
        </Container>
  
    </Container>
  )
}

export default About