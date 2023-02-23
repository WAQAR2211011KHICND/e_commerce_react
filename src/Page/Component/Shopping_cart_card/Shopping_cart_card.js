import { Cancel } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { InputNumber } from "antd";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { buyerContext } from "../../../Hook/buyerContext";

const styles = {
  card: {
    display: "flex",
    flexDirection: "row",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    margin: "40px",
  },
  productImage: {
    width: "30%",
    padding: 0,
    margin: 0,
  },
  cardContent: {
    paddingTop: 0,
  },
  font14: { fontSize: 14 },
  quantityText: { fontSize: 14, paddingRight: "10px", fontWeight: "bold" },
  quantityField: { border: "1px solid #9CAFB7" },
  quantityCardContain: { display: "flex", flexDirection: "column" },
};

export const Shopping_cart_card = ({ cart }) => {
  const { carts } = useContext(buyerContext);
  

  const handleRemove = () => {
    fetch(
      `http://localhost:8081/shopping_cart/` + cart.id,
      // `http://localhost:5000/job/post`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      },
      {
        mode: "cors",
      }
    ).then((data) => {
      carts.setValue((prev) => prev.filter((p) => p !== cart));
    });
  };

  return (
    <Card sx={styles.card}>
      <CardMedia
        component="img"
        sx={styles.productImage}
        image={cart?.image}
        alt="product image"
      />

      <CardContent sx={styles.cardContent}>
        <CardContent sx={styles.quantityCardContain}>
          <Typography
            sx={styles.quantityText}
            color="text.primary"
            variant="button"
            gutterBottom
          >
            {cart?.name}
          </Typography>
        </CardContent>

        <CardContent sx={styles.quantityCardContain}>
          <Typography
            sx={styles.quantityText}
            color="text.primary"
            gutterBottom
          >
            Quantity : {cart?.quantity}
          </Typography>
          <Typography
            sx={styles.quantityText}
            color="text.primary"
            gutterBottom
          >
            Price : RS. {cart?.price.toLocaleString("en-US")}
          </Typography>
          <Typography
            sx={styles.quantityText}
            color="text.primary"
            gutterBottom
          >
            Total Price : {cart?.totalPrice.toLocaleString("en-US")}
          </Typography>
        </CardContent>
      </CardContent>
      <CardContent>
        <IconButton
          aria-label="fingerprint"
          color="error"
          onClick={handleRemove}
        >
          <Cancel />
        </IconButton>
      </CardContent>
    </Card>
  );
};
