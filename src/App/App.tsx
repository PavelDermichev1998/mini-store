import React from 'react';
import './App.css';
import {Products} from "../components/1s-Products/Products";
import {Basket} from "../components/2s-Basket/Basket";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../store/store";
import {ProductsStateType} from "../store/reducer";

export const App = () => {

    const dispatch = useDispatch()
    const products = useSelector<AppRootStateType, ProductsStateType>(state => state.products)

    const addForBasket = () => {
        /*dispatch()*/
    }

    return (
        <div className="App">
            <div>Каталог</div>
            <Products products={products} addForBasket={addForBasket}/>
            <Basket/>
        </div>
    );
}

