import Grid from '@mui/material/Grid';
import React from 'react';
import {ProductsType} from "../../store/productsReducer";
import style from './Products.module.css'
import {Paper} from "@mui/material";
import {Product} from "./Product/Product";
import {FilterForType} from "./FilterForType/FilterForType";

export const Products = ({products, filterForType, productsTypes, filterForAllType}: ProductsPropsType) => {
    return <div className={style.products_block}>
        <FilterForType
            products={products}
            filterForType={filterForType}
            productsTypes={productsTypes}
            filterForAllType={filterForAllType}
        />
        <Grid container spacing={2}>
            {
                products.map(prod => {
                    return <Grid item xs={3} key={prod.ID}>
                        <Paper>
                            <Product
                                product={prod}
                                keysId={prod.SKU ? Object.keys(prod.SKU) : null}
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
    filterForType: (productType: string) => void
    productsTypes: Array<string>
    filterForAllType: () => void
}
