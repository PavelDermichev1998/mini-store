import React from 'react';
import {Products} from "../components/1s-Products/Products";
import {Basket} from "../components/2s-Basket/Basket";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../store/store";
import {ProductsStateType} from "../store/productsReducer";
import {BasketType} from "../store/basketReducer";
import style from './App.module.css'

export const App = () => {

    const products = useSelector<AppRootStateType, ProductsStateType>(state => state.products)
    const basketItems = useSelector<AppRootStateType, Array<BasketType>>(state => state.basket)

    return (
        <div className={style.App}>
            <div className={style.App_text}>Каталог</div>
            <Products products={products}/>
            {basketItems.length
                ? <Basket basketItems={basketItems}/>
                : <></>
            }
        </div>
    );
}

