import React from 'react';
import './App.css';

import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types'

import Table from './Table'

const localGovt = [
  {
    value: '',
    label: '',
  },
  {
    value: 'Ajaokuta',
    label: 'Ajaokuta',
  },
  {
    value: 'Ankpa',
    label: 'Ankpa',
  },
  {
    value: 'Bassa',
    label: 'Bassa',
  },
];


const useStyles = makeStyles(theme => ({
  card: {
    minWidth: 275,
  },
  root: {
    padding: theme.spacing(3, 2),
  },
  pos: {
    marginBottom: 12,
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 300,
  },
  button: {
    margin: theme.spacing(1),
  },
  margin: {
    margin: theme.spacing(1),
  },
  
}));


const  FormPage = props => {

  const {history} = props;

  const classes = useStyles();
  const [lga, setlga] = React.useState('LGA');

  const handleChange = event => {
    setlga(event.target.value);
  };

  const handleSubmit = (event) =>{
      event.preventDefault()
     history.replace()
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="data-form">
         <AppBar>
          <Toolbar>
            <Typography variant="h6"> Data Form </Typography>
          </Toolbar>
        </AppBar>  
        <Card className={classes.card}>
         <Paper className={classes.root}>
          <form className={classes.container} noValidate autoComplete="off" onSubmit={handleSubmit}>
      <div>
        <TextField
          id="outlined-basic"
          className={classes.textField}
          label="Name"
          margin="normal"
          variant="outlined"
          
        />
      </div>

      <div>
        <TextField
          id="outlined-basic"
          className={classes.textField}
          label="Phone Number"
          margin="normal"
          variant="outlined"
        />
      </div>

      <div>
        <TextField
          id="outlined-basic"
          className={classes.textField}
          label="Age"
          margin="normal"
          variant="outlined"
        />
      </div>
          <TextField
            id="outlined-select-lga"
            select
            label="Local Govt Area"
            className={classes.textField}
            value={lga}
            onChange={handleChange}
            SelectProps={{
              native: true,
              MenuProps: {
                className: classes.menu,
              },
            }}
            helperText="Please select your LGA"
            margin="normal"
            variant="outlined"
          >
            {localGovt.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
     <div>
             <Button variant="contained" 
             size="large" 
             color="primary" 
             type="submit"
             className={classes.margin}
             >
               Submit
              </Button>
             </div>   
           </form>  
           </Paper>      
          </Card>    
        </div>
      </header>
    </div>
  );
}

FormPage.propTypes = {
    history : PropTypes.object
}

export default FormPage;
