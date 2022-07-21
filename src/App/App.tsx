import React, {useState} from 'react';
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

    const productsTypes: string[] = []
    products.forEach(prod => {
        if (!productsTypes.includes(prod.TYPE)) {
            productsTypes.push(prod.TYPE)
        }
    })

    const [newProducts, setNewProducts] = useState(products)

    const filterForType = (productType: string) => {
        setNewProducts(products.filter(pr => pr.TYPE === productType))
    }
    const filterForAllType = () => {
        setNewProducts(products)
    }

    return (
        <div className={style.App}>
            <div className={style.App_text}>Каталог</div>
            <Products
                products={newProducts}
                filterForType={filterForType}
                productsTypes={productsTypes}
                filterForAllType={filterForAllType}
            />
            {basketItems.length
                ? <Basket basketItems={basketItems}/>
                : <></>
            }
        </div>
    );
}

