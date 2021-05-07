/**
 * this component will provide navigation between 
 * the different application parts
 * - create album
 * - browse albums
 * - signout
 */
 import React, { useState, useContext } from 'react';
 import { makeStyles } from '@material-ui/core/styles';
 import TextField from '@material-ui/core/TextField';
 import Button from '@material-ui/core/Button';
 import {MySnackbar} from "../sharedUI/MySnackbar";
 import {userContext} from "../providers/UserProvider";
 import {build_bearer_token} from "../../utils/utils";

 const useStyles = makeStyles((theme) => ({
   root: {
     '& > *': {
       margin: theme.spacing(1),
       width: '25ch',
     },
   },
 }));
 


 export function UploadImage({add_image})
 {
    const classes = useStyles();

    return (
        <>
    
        <form className={classes.root} 
                noValidate 
                autoComplete="off"
                action='http://localhost:3004/image'
                method='post'>
            <input type='file' ></input>
            <input type='submit' ></input>

        </form>
        </>
    )
 }