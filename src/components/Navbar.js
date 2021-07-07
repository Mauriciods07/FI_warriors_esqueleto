import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import logo from "../images/logo.png";
import { ShoppingCart } from '@material-ui/icons'
import { Badge, TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';
import SearchIcon from "@material-ui/icons/Search";
import Ubicacion from "./ubicacion";

const useStyles = makeStyles((theme) => ({
  root: {
      flexGrow: 1,
      marginBottom: "7rem",
  },
  appBar: {
      backgroundColor: "green",
      boxShadow: "none",
  },
  grow: {
      flexGrow: 1,
  },
  button: {
      marginLeft: theme.spacing(2),
  },
  image: {
      marginRight: "10px",
      height: "2.5rem",
  },
  searchIcon: {
    alignSelf: "flex-end",
    marginBottom: "8px",
  },
  searchContainer: {
    display: "flex",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.35),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.5),
    },
    paddingLeft: "20px",
    paddingRight: "20px",
    marginTop: "5px",
    marginBottom: "5px",
    width: "200px",
    marginLeft: theme.spacing(2),
  },
  searchInput: {
    width: "200px",
    margin: "5px",
  }
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Link to="/">
            <IconButton>
              <img 
                src={logo} 
                alt='Commerce.js'
                height='25px'
                className={classes.image}
              />
            </IconButton>
          </Link>
          <div>
            <Ubicacion/>
          </div>
          <div className={classes.searchContainer}>
            <SearchIcon className={classes.searchIcon} />
            <TextField 
              className={classes.searchInput}
              label="Buscar..."
              variant="standard"
            />
          </div>
          <div className={classes.grow} />
          <Typography variant="h6" component="p">
            Hola, Usuario
          </Typography>
          <div className={classes.button}>
              <Button variant="contained" color="primary">
              <strong>Registrarse</strong>
              </Button>
              <Link to="checkout-page">
              <IconButton aria-label="show cart items" color="inherit">
                <Badge badgeContent={3} color="secondary">
                  <ShoppingCart fontSize="large" color="primary"/>
                </Badge>
            </IconButton>
              </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
