import React, { useState } from 'react';
import InputMask from "react-input-mask";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import firebase from '../Firebase';

const useStyles = makeStyles(theme => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 5, 2),
  },
  container1: {
      position: 'absolute', 
      left: '50%', 
      top: '35%',
      transform: 'translate(-50%, -50%)'
  },
  container2: {
      alignItems: 'center',
      justify: 'center',
      spacing: 0 ,
      direction: "column",
  },
  container: {
      display: 'flex',
      flexWrap: 'wrap',
  },
  textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
  },
  dense: {
      marginTop: theme.spacing(2),
  },
  menu: {
      width: 200,
  },
}));

export default () => {
  const css = useStyles();
  const [user, setUser] = useState({});
  const handleSubmit = (event) => {
    event.preventDefault();
    user.birthDate = new Date((user.birthDate).replace(/\s/g, '').split('-').reverse().join('-') + " 00:00");
    user.celPhone = (user.celPhone).replace(/[^0-9]|\s/g, '').replace(/^/, '+55');
    user.active = true;
    user.lastUpdate = new Date();
    firebase.firestore().collection('clients').add(user).then(setUser({}));
    //alert(JSON.stringify(user)) ;
  };
  const handleChange = name => event => {
    setUser({ ...user, [name]: event.target.value });
  };
  const parseDate = (str) => {
    const birth = new Date(('str').replace(/\s/g, '').split('-').reverse().join('-') + " 00:00").getTime();
    console.log(birth);
    return birth;
  };


  return (
    <>
      <Container component="main" maxWidth="xs">
        <form className={css.form} noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <InputMask mask="(99) 99999 9999" maskChar=" " value={user.celPhone} onChange={handleChange('celPhone')}>
                {() => <TextField
                  id="client-phone"
                  label="Celular"
                  //name="phone"
                  //value={user.phone}
                  //onChange={handleChange('phone')}
                  variant="outlined"
                  required
                  fullWidth
                />}
              </InputMask>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                id="client-firstname"
                label="Nome"
                value={user.firstname}
                onChange={handleChange('firstName')}
                variant="outlined"
                required
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                id="client-lastname"
                label="Sobrenome"
                value={user.lastname}
                onChange={handleChange('lastName')}
                variant="outlined"
                required
                fullWidth
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                id="client-email"
                label="Endereço de Email"
                //name="email"
                value={user.email}
                onChange={handleChange('email')}
                variant="outlined"
                fullWidth
                autoComplete="email"
                type="email"
              />
            </Grid>

            <Grid item xs={12}>
              <InputMask mask="99 - 99 - 9999" maskChar=" " value={user.birthDate} onChange={handleChange('birthDate')}>
                {() => <TextField
                id="client-birth"
                label="Data de Nascimento"
                //name="birth"
                //value={values.birth}
                //onChange={handleChange('birth')}
                variant="outlined"
                fullWidth
              />}
              </InputMask> 
            </Grid>

            <Grid item xs={12} style={{ fontSize: 12 }}>
              * Campos de preenchimento obrigatório.             
            </Grid>

            <Button 
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={css.submit}
            > Registrar </Button>

          </Grid>          
        </form>
      </Container>   
    </>      
  );
}