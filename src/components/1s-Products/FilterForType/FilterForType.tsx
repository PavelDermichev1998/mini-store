import React from 'react';
import {Button, Paper} from "@mui/material";
import {ProductsType} from "../../../store/productsReducer";

export const FilterForType = ({productsTypes, filterForType, filterForAllType}: ProductsPropsType) => {

    const filterHandler = (productType: string) => {
        filterForType(productType)
    }
    const filterAllHandler = () => {
        filterForAllType()
    }

    return (
        <div style={{margin: '5px'}}>
            <Paper>
           <span>ФИЛЬТРАЦИЯ ПО ТИПУ </span>
            <Button variant={'outlined'} onClick={filterAllHandler}>ALL</Button>
            <span>{productsTypes.map(type => {
                return <Button key={type} onClick={() => {
                    filterHandler(type)
                }}>{type}</Button>
            })}</span>
            </Paper>
        </div>
    )
}

type ProductsPropsType = {
    products: Array<ProductsType>
    filterForType: (productType: string) => void
    productsTypes: Array<string>
    filterForAllType: () => void
}
