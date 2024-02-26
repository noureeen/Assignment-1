import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
    
      <AppBar position="static">
        <Toolbar>
        
          <Typography variant="h6" component="div" sx={{ flexGrow: 1}} align='left'>
            Blog App
          </Typography>
          <Button variant='contained' color="inherit"><Link to='/'>Home</Link></Button> &nbsp;
          <Button variant='contained' color='inherit'><Link to='/add'>Add Blog</Link></Button>
        </Toolbar>
      </AppBar>



    </div>
  )
}

export default Navbar
