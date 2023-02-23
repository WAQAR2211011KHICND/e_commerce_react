import {  Typography } from "@mui/material";
import React from "react";
import styled from "./Header.module.css";
export const Header = () => {


  return (
    <div className={styled.Header_Main_Container}>
      <img
        className={styled.logo_img}
        src="https://raw.githubusercontent.com/jeff-lent/Alisnobba/main/Capstone/Logo.png"
        alt="logo"
      />

      <div className={styled.search_and_text_container}  >
        <div>
          <Typography variant="h4" color="#7C6354" >
            ALI SHOPPING
          </Typography>
        </div>
      
      </div>
    </div>
  );
};
