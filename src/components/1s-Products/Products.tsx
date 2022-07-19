import Grid from '@mui/material/Grid';
import React from 'react';
import {ProductsType} from "../../store/reducer";
import style from './Products.module.css'
import {Paper} from "@mui/material";
import {Product} from "./Product/Product";


export const Products = ({products} : ProductsPropsType) => {
  return <div className={style.products_block}>
      <Grid container spacing={4}>
          {
              products.map(p => {
                  return <Grid item xs={3} key={p.ID}>
                      <Paper style={{padding: '10px'}}>
                          <Product
                              product={p}
                          />
                      </Paper>
                  </Grid>
              })
          }
      </Grid>
  </div>
}

type ProductsPropsType = {
  products: Array<ProductsType>
}
