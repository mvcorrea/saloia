import React from 'react';
import Ementa from './RestaurantMenuData.json'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
//import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'

// styles used in the menu
const useStyles = makeStyles(theme => ({
  root: {
      flexGrow: 1,
      
      //color: '#ed1212',
      //background: "#f1f1f1"
  },
   grid: {
       margin: "20px",
  },
  menuItem: {
    
    border: '1px solid lightgrey',
    borderRadius: '0.5em',
    margin: '0.2em',
    fontFamily: '\'Carter One\', cursive',
    //background: 'gray',
    //WebkitTextFillColor: 'black',
    //WebkitTextStrokeColor: 'red',
    //WebkitTextStrokeWidth: '0.5px', 
  },
  menuItemPrincipal: {
    color: '#ff6f00',
    fontWeight: 'bold',
    //WebkitTextStrokeColor: 'black',
    //WebkitTextStrokeWidth: '0.2px', 
  },
  menu: {
    width: 140,
    //display: 'flex'
    // border: '1px solid lightgrey',
    // borderRadius: '0.5em',
    // padding: '0.25em 0.5em',
    // margin: '0.5em',
  },
  price: {
    fontSize: '20px',
    whiteSpace: 'nowrap',
  },
  subHeader: {
    color: '#ff6f00',
    fontFamily: '\'Carter One\', cursive',
    backgroundColor: 'lightgray' 
    //bacagroundColor: theme.palette.background.paper
  },
}));

// component menu item ---------------------------------------------------------
const MenuItem = ({ item }) => {
  const css = useStyles();
  return (
    <div className={css.menuItem}>
      {/* <ListItem button alignItems="flex-start"> */}
      <ListItem button>
        <ListItemText
          //primary={<Typography variant="h6" style={{ color: '#ff6f00', fontWeight: 'bold' }}>{item.name}</Typography>}
          primary={<Typography variant="h6" className={css.menuItemPrincipal}>{item.name}</Typography>}
          secondary={item.desc}
        />
        <span className={css.price}>
          R$ {item.price.toFixed(2).replace('.', ',')}
        </span>
      </ListItem>
    </div>
  )
}

// component menu category -----------------------------------------------------
const MenuItemCategory = ({ cat } ) => {
  const css = useStyles();
  return (
    < ListSubheader className = { css.subHeader } >
      { cat }
    </ListSubheader >
   )  
}

// component menu list ---------------------------------------------------------
const MenuList = () => {
  const css = useStyles();
  const menuCats = [...new Set(Ementa.map(x => x.cat + ':' + x.scat))];

  const listItems = () => {
    return menuCats.map((cat) =>
      <>
        < MenuItemCategory cat={cat} />
        {Ementa.map((el) => {
          return cat === el.cat+':'+el.scat &&(<Grid className={css.grid} >
            < MenuItem item={el} />
          </Grid >) 
        })}
      </>
    );
  }
  return (listItems());
}

// default list export
export default () => {
  return (
    <List >
      <MenuList />
    </List >
  );
};