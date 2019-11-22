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

//import ExpandLess from '@material-ui/icons/ExpandLess';
//import ExpandMore from '@material-ui/icons/ExpandMore';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


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


const MenuItemCategory1 = ({ cat } ) => {
  const css = useStyles();
  return (
    < ListSubheader className = { css.subHeader } /* onClick={handleClick} */ >
      { cat }      
    </ListSubheader >
   )  
}



// component menu category -----------------------------------------------------
const MenuItemCategory = ({ cat } ) => {
  const css = useStyles();

  // const [open, setOpen] = React.useState(true);
  // const handleClick = () => { setOpen(!open); };

  return (
    // < ListSubheader className = { css.subHeader } /* onClick={handleClick} */ >
    
      <ExpansionPanelSummary className = { css.subHeader } 
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
      >

      { cat }
      {/* { open ? <ExpandLess /> : <ExpandMore /> } */}
    
    </ExpansionPanelSummary>
      
      // </ListSubheader >
   )  
}

// component menu list ---------------------------------------------------------
const MenuList = () => {
  const css = useStyles();
  const menuCats = [...new Set(Ementa.map(x => x.cat + ':' + x.scat))];


  const listItems1 = () => { // with ListSubheader
    return menuCats.map((cat) =>
      <>
        {/* MenuItemCategory1 is with ListSubheader */}
        < MenuItemCategory1 cat={cat} /> 
        {Ementa.map((el) => {
          return cat === el.cat+':'+el.scat &&(<Grid className={css.grid} >
            < MenuItem item={el} />
          </Grid >) 
        })}
      </>
    );
  }

  const listItems = () => { // with ExpansionPanel
    return menuCats.map((cat) =>
      <>
        <ExpansionPanel>
        < MenuItemCategory cat={cat} /> 
          <ExpansionPanelDetails style={{ flexDirection:'column'}}>
        {Ementa.map((el) => {
          return cat === el.cat+':'+el.scat &&(<Grid className={css.grid} >
            < MenuItem item={el} />
          </Grid >) 
        })}
        </ExpansionPanelDetails>
        </ExpansionPanel>
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