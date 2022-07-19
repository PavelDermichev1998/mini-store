import Grid from '@mui/material/Grid';
import React from 'react';
import {ProductsType} from "../../store/reducer";
import style from './Products.module.css'
import {Paper} from "@mui/material";
import {Product} from "./Product/Product";


export const Products = ({products, addForBasket}: ProductsPropsType) => {

    return <div className={style.products_block}>
        <Grid container spacing={4}>
            {
                products.map(prod => {
                    return <Grid item xs={3} key={prod.ID}>
                        <Paper>
                            <Product
                                product={prod}
                                keysId={prod.SKU ? Object.keys(prod.SKU) : null}
                                addForBasket={addForBasket}
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
    addForBasket: () => void
}
