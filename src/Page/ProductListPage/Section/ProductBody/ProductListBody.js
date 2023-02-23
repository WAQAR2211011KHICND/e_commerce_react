import React, { useContext } from 'react'
import { buyerContext } from '../../../../Hook/buyerContext'
import { useProducts } from '../../../../Hook/useProducts'
import { ProductCard } from '../../../Component/Card/ProductCard'
import styled from './ProductListBody.module.css'

export const ProductListBody = () => {


  const {products} = useContext(buyerContext);
  useProducts(products);

  return (
    <div className={styled.ProductListBody_Main_Container}>
      {products.value && products.value.map((product)=><ProductCard key={product.id} product={product}/>)}
    </div>
  )
}
