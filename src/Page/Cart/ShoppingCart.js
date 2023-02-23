import { Button, Typography } from "@mui/material";

import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { buyerContext } from "../../Hook/buyerContext";
import { useCart } from "../../Hook/useCart";
import { Shopping_cart_card } from "../Component/Shopping_cart_card/Shopping_cart_card";
import { Header } from "./Section/Header/Header";
import styled from "./ShoppingCart.module.css";

export const ShoppingCart = () => {
  const navigate = useNavigate(); 


    const {carts} = useContext(buyerContext);
    useCart(carts);
    useEffect(() => {

      async function loadData() {
          const url = `http://localhost:8081/shopping_cart/all`;
          const response = await fetch(url);
          if(response.status !== 200){
              carts.setValue([]);
              return;
          }
          const data = await response.json();
          carts.setValue(data);
      }
          loadData();
  
  }, []);
  return (
    <div className={styled.ShoppingCart_Main_Container}>
      <div className={styled.headerContainer}>
        <Header />
      </div>

      <div className={styled.shoppingBody}>
        { carts.value && carts.value.map((cart)=>  <Shopping_cart_card key={cart.id} cart={cart} />) }
      </div>

      <div className={styled.cart_list}>
        <Typography
          sx={{ fontSize: 18, padding: "10px" }}
          color="text.secondary"
          gutterBottom
        >
          Order Total Rs: <b>{carts.value && carts.value.reduce((acc, { totalPrice }) => acc + totalPrice, 0).toLocaleString("en-US")}/=</b>
        </Typography>
      </div>

      <div className={styled.buttons_container}>
        <Button variant="contained" color="warning" onClick={()=>{navigate('/')}} size="small">
          Return To Shopping
        </Button>
        <Button variant="contained" color="success" onClick={()=>{navigate('/greeting')}} size="small">
          Check Out
        </Button>

      </div>
    </div>
  );
};
