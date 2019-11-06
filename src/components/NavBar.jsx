import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';
//import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

import { NavLink } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  list: {
    width: 140,
    //display: 'flex'
    // border: '1px solid lightgrey',
    // borderRadius: '0.5em',
    // padding: '0.25em 0.5em',
    // margin: '0.5em',
  },
  listItem: {
    //border: '1px solid lightgrey',
    borderRadius: '0.5em',
    margin: '0.5em',
  },
  fullList: {
    width: 'auto',
    padding: '0.25em 0.5em',
  },
  about: {
    fontSize: '10px',
    fontWeight: 'bold',
    //margin: '1.5em',
    textAlign: 'center',
    textDecoration: 'none',
    fontFamily: '\'Carter One\', cursive',
    color: '#ff6f00',
    //alignSelf: 'flex-end',
  },
  navbar: {
    fontFamily: '\'Carter One\', cursive',
    //color: '#ff6f00',
    fontSize: 18,
  },
  sidebar: {
    fontFamily: '\'Carter One\', cursive !important',
    fontSize: 16,
    textDecoration: 'none',
  }
}));


const Navbar = (menuItens) => { 
    const css = useStyles();
   
    const menuItens2 = [
        {
            title: 'Início',
            path: '/'
        },
        {
            title: 'Wifi',
            path: '/wifi'
        }, 
        {
            title: 'Cardápio',
            path: '/menu'
        }, 
        {
            title: 'Registro',
            path: '/signup'
        }, 
    ];
  
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const [title, setTitle] = React.useState("Inicio");

  
    const toggleDrawer = (side, open) => event => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
        setState({ ...state, [side]: open });
    };

    const sideList = side => (
        <div
          className={css.list}
          role="presentation"
          onClick={toggleDrawer(side, false)}
          onKeyDown={toggleDrawer(side, false)}
        >
        
        <List>
        {/* <ListItem disableGutters='true'> A Salôia Restaurante</ListItem>
            <Divider /> */}
            {menuItens2.map((obj) => (
            //onClick={setTitle(obj.title)}
            //onClick={handleTitle(obj.title)}
              //style={{ textDecoration: 'none' }}
              // className={css.sidebar}
                <ListItem button className={css.listItem}>
                <NavLink to={obj.path.toLowerCase()} style={{ textDecoration: 'none' }} >
                  {/* <ListItemText primary={obj.title} onClick={() => setTitle(obj.title)} /> */}
                  <ListItemText primary={<Typography variant="h6" style={{ color: '#ff6f00', fontFamily: '\'Carter One\', cursive', }}>
                    {obj.title}</Typography>} onClick={() => setTitle(obj.title)} /> 
                </NavLink>
                </ListItem>
            ))}
        </List> 
        <a href="mailto:mvcorrea+saloia@gmail.com?subject=acerca do site"
          className={css.about}>Marcelo Correa - 2019</a>
        </div>
    );
 

    return (
        <>
            <AppBar position='static'>
            <ToolBar>
                <IconButton edge="start" className={css.menuButton} color="inherit" aria-label="menu">
                <MenuIcon onClick={toggleDrawer('left', true)} />
                <SwipeableDrawer
                  open={state.left}
                  onClose={toggleDrawer('left', false)}
                  onOpen={toggleDrawer('left', true)}
                >
                  {sideList('left')}
                </SwipeableDrawer>

                </IconButton>
                <Typography color='inherit'>
                    <span className={css.navbar}>A Salôia Restaurante  <span style={{color:'yellow'}}>>></span>  {title}</span>
                </Typography>
            </ToolBar>
          </AppBar>   
        </>
    );
}

export default Navbar;