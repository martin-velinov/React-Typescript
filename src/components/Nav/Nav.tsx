import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import logo from '../../assets/img/logo.png';
import './Nav.css'
import { Typography } from '@mui/material';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
interface Props {

  window?: () => Window;
}

const drawerWidth = 240;

export default function DrawerAppBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      
      <Divider />
      <ListItem sx={{display:'flex', flexDirection:'column',textAlign: 'center' ,marginTop:'50px', textTransform:'uppercase'}}>
          <ListItem>
            <ListItemButton >
            <Link  href="/">Home</Link>
            </ListItemButton>
          </ListItem>
          <ListItem>
          <ListItemButton>
            <Link href="/about">About</Link>
            </ListItemButton>
          </ListItem>
          <ListItem>
          <ListItemButton>
            <Link href="/programs">Programs</Link>
            </ListItemButton>
          </ListItem>
          <ListItem>
          <ListItemButton>
            <Link href="/contact">Contact</Link>
            </ListItemButton>
          </ListItem>
          <ListItem>
          <ListItemButton>
          <Link href="/signup">Sign up</Link>
            </ListItemButton>
          </ListItem>
      </ListItem>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex', justifyContent:'center' }}>
      <CssBaseline />
      <AppBar component="nav" className='navigation'>
        <Toolbar>
          <IconButton
          className='icon'
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' }, backgroundColor:'#fff'}}  
          >
            <MenuIcon />
          </IconButton>
          <Link href="/">
            <Box
              component="img"
              sx={{ height: 80,width:100 }}
              alt="Logo"
              src={logo}
            />
          </Link>
          

          <Box sx={{ display: { xs: 'none', sm: 'block',color: '#fff'} }}>
              <Button>
                <Link sx={{ color:'white'}} href="/">Home</Link>
              </Button>
              <Button>
                <Link sx={{ color:'white'}} href="/about">About</Link>
              </Button>
              <Button>
                <Link sx={{ color:'white'}} href="/programs">Programs</Link>
              </Button>
              <Button>
                <Link sx={{ color:'white'}} href="/contact">Contact</Link>
              </Button>
              <Button>
                <Link sx={{ color:'white'}} href="/signup">Sign up</Link>
              </Button>
            </Box>
            <Box>
            <LocalPhoneIcon sx={{ marginLeft:'40px'}}/>
            <Typography sx={{ marginLeft:'70px',marginTop:'-30px'}}>+331 02 458 998</Typography>
            </Box>
            <Box>
              <LocationOnIcon sx={{ marginLeft:'40px'}}/>
              <Typography sx={{ marginLeft:'70px',marginTop:'-30px'}}>8661 Colesville Rd, Dallas</Typography>
            </Box>
        </Toolbar>
        
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
     
    </Box>
  );
}