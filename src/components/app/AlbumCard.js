import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const Albums_per_Row = process.env. REACT_APP_ALBUMS_PER_ROW | 6;

const useStyles = makeStyles({
  root: {
    minWidth: 350,
    minHeight: 200,
    width: window.innerWidth / Albums_per_Row, 
    float:"left", 
    marginLeft:"50px",
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export function AlbumCard({album}) {
  const classes = useStyles();
  

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        
        <Typography className={classes.title}  
                    variant="h5" 
                    component="h2" 
                    gutterBottom>
          {album.name}
        </Typography>

        <Typography variant="body2" component="p">
          {album.description}
        </Typography>

      </CardContent>

      <br></br>
      <br></br>
      <br></br>
      <CardActions>
        <Button variant="contained" color="primary" href="#contained-buttons">
            Open
        </Button>

        <Button variant="contained" color="primary">
            DownLoad
        </Button>

        <Button variant="contained">Edit</Button>

        <Button variant="contained" color="secondary">
            Delete
        </Button> 

      </CardActions>

    </Card>
  );
}