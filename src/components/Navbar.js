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
import {useStateValue} from "../StateProvider"
import { auth } from '../firebase';
import { actionTypes } from '../reducer';
import { useHistory } from 'react-router-dom';
import Home from "./ubicacion";
import SearchIcon from "@material-ui/icons/Search";



const useStyles = makeStyles((theme) => ({
  root: {
      flexGrow: 1,
      marginBottom: "3.5rem",
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
  }
}));

export default function Navbar() {
  const classes = useStyles();
  const [{basket, user}, dispatch] = useStateValue();
  const history = useHistory();

  const handleAuth = () =>{
    if (user){
      auth.signOut();
      dispatch({
        type: actionTypes.EMPTY_BASKET,
        basket: [],
      });
      dispatch({
        type: actionTypes.SET_USER,
        user: null,
      })
      history.push("/")
    }
  }

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
          <Home />

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
            Hola, {user ? user.email : "Usuario"}
          </Typography>
          <div className={classes.button}>
            <Link to="/signin">
              <Button variant="contained" color="primary" onClick={handleAuth}>
                <strong>{user ? "Desconectar" : "Registrarse"}</strong>
                </Button>
            </Link>
              
              <Link to="checkout-page">
                <IconButton aria-label="show cart items" color="inherit">
                    <Badge badgeContent={basket?.length} color="secondary">
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
