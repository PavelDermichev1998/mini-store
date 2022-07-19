import React from 'react';
import {ProductsType} from "../../../store/reducer";


export const Product = ({product} : ProductPropsType) => {

    const price = product.SKU
    console.log(price)

    return <div>
      <div className="img">{product.PICTURE}</div>
      <div className="img">{product.PRICE ? product.PRICE : 'null'}</div>

      <div>{}</div>
      <div>3</div>
      <div>4</div>
  </div>
}


type ProductPropsType = {
    product: ProductsType
}