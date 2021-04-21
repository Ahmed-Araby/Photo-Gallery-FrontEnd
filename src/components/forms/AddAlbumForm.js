/**
 * this component will provide navigation between 
 * the different application parts
 * - create album
 * - browse albums
 * - signout
 */
 import React, { useState } from 'react';
 import { makeStyles } from '@material-ui/core/styles';
 import TextField from '@material-ui/core/TextField';
 import Button from '@material-ui/core/Button';

 const useStyles = makeStyles((theme) => ({
   root: {
     '& > *': {
       margin: theme.spacing(1),
       width: '25ch',
     },
   },
 }));
 


 export function AddAlbumForm(props)
 {
    const classes = useStyles();
    const [name, set_name] = useState("");
    const [desc, set_desc] = useState("");

    const handleCreateAlbumClick = (e)=>{
        
    }
    return (
        <>
         <form className={classes.root} 
                noValidate 
                autoComplete="off">
             <TextField id="album-name" 
                        label="Album Name"
                        variant="outlined"
                        value={name}
                        onChange={(e)=> set_name(e.target.value)}
            />

            <TextField id="description"
                        label="Description"
                        variant="outlined"
                        value={desc}
                        onChange={(e)=> set_desc(e.target.value)}
            />

             <Button variant="contained"
                     color="primary" 
                     onClick={(e)=>handleCreateAlbumClick(e)}
             >
             Create
            </Button>

        </form>
        </>
    )
 }