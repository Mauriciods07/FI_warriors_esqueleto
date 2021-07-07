import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Product from './Product';
import products from "../product-data"
import Carousel from "../components/Carousel"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function Products() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
     
      <Grid container spacing={3}>
        {
          /* Iterar entre todos los productos contenidos en product-data,js */
          products.map(product => (
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Product key={product.id} product={product}/>
            </Grid> 
          ))
        }
      </Grid>
    </div>
  );
}
