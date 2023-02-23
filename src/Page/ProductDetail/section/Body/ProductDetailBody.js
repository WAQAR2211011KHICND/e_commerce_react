import { Typography } from "@mui/material";
import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { buyerContext } from "../../../../Hook/buyerContext";
import { useProducts } from "../../../../Hook/useProducts";
import { ProductCard } from "../../../Component/Card/ProductCard";
import styled from "./ProductDetailBody.module.css";

export const ProductDetailBody = () => {
  const data = useLocation();
  const product = data.state;

  return (
    <div className={styled.ProductDetail_Main_Container}>
      <Typography  variant='h3' color="text.secondary" align="center" gutterBottom>
        Detail
      </Typography>

      {product && (
        <ProductCard
          type="detail"
          key={product.id}
          product={product}
        />
      )}
    </div>
  );
};
