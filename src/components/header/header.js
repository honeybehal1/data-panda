import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';
import { Toolbar } from '@material-ui/core';



function Header() {
  
  const useStyles = makeStyles(theme => ({
    root: {
      marginRight:0,
      float: 'right',
      padding: '12px'
    }
  }));
  const classes = useStyles();

  return (
    <div >
    <AppBar position="static" >
      <Toolbar>
      <Container>
      <span className="header-logo">
      Data Panda
      </span>
        
      <Button className={classes.root} color="inherit">Login</Button>
      </Container>
      </Toolbar>
      </AppBar>
      </div>

  );
}

export default Header;
