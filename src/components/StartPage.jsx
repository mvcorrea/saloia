import React from 'react';
import logo from './galinho.svg';
import { makeStyles } from '@material-ui/core/styles';

const css = makeStyles(theme => ({

  base: {
    backgroundColor: '#333',
    width: '100%',
    height: '100%',
    margin: 0,
    border: 0,
    outline: 0,
  },
  see: {
    //border: '30px solid green',
    //border: 'solid black 2px',
    //backgroundColor: '#282c34',
    // minHeight: '100vh',
    // display: 'flex',
    // //flexDirection: 'column',
    // alignItems: 'center',
     justifyContent: 'center',
    // fontSize: 'calc(10px + 2vmin)',
    //color: 'blue',
    //display: 'flex',
    //justifyContent: 'center',
    //margin: '0 auto'
  },
  svg: {
    height: '40vmin'
  }
}));

export default () => {
  return (
    <>
      <div className={css.see}>
        <img src={logo} alt="logo" />
      </div>
    </>      
  );
}