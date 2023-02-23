import { Button } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "./ThankYou.module.css";

export const ThankYou = () => {
    const navigate = useNavigate();
    const handleStartOver=()=>{
        //Delate All Cart data
        fetch(
            `http://localhost:8081/shopping_cart/delete_all`,
            {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json",
              }
            },
            {
              mode: "cors",
            }
          )
            .then((data) => {
                navigate('/');
    
            })
    }
  return (
    <div className={styled.ThankYou_Main_Container}>
      <p>Thanks For Your Order</p>
      <Button variant="contained" color="success" onClick={handleStartOver} > Start Over</Button>
    </div>
  );
};
