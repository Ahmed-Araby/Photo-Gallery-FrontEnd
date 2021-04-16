import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {userContext} from "../providers/UserProvider";
import {useHistory} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export function Header() {
  const classes = useStyles();
  const [value, setValue] = React.useState(-1);
  const {user, set_user} = useContext(userContext);
  const history = useHistory();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(()=>{
    switch(value){
      case 0:
        set_user(null);
        history.push({
          pathname:"/login"
        })      
        break;
      default:
        console.log("do nothing");
        break;
    }
    
  }, [value])

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          
          <Tab label="LogOut"/>
        </Tabs>
      </AppBar>
    </div>
  );
}
