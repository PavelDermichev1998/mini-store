import React from 'react';
import './App.css';
import {Products} from "../components/1s-Products/Products";
import {Basket} from "../components/2s-Basket/Basket";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../store/store";
import {addProductAC, ProductsStateType} from "../store/reducer";

export const App = () => {

    const products = useSelector<AppRootStateType, ProductsStateType>(state => state.products)

    return (
        <div className="App">
            <div>Каталог</div>
            <Products products={products}/>
            <Basket/>
        </div>
    );
}

