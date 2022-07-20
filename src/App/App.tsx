import React from 'react';
import './App.css';
import {Products} from "../components/1s-Products/Products";
import {Basket} from "../components/2s-Basket/Basket";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../store/store";
import {ProductsStateType} from "../store/productsReducer";
import {BasketType} from "../store/basketReducer";

export const App = () => {

    const products = useSelector<AppRootStateType, ProductsStateType>(state => state.products)
    const basketItems = useSelector<AppRootStateType, Array<BasketType>>(state => state.basket)

    return (
        <div className="App">
            <div>Каталог</div>
            <Products products={products}/>
            {basketItems.length
            ?<Basket basketItems={basketItems}/>
            : <></>
            }
        </div>
    );
}

