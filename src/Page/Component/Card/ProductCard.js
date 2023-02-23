import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { InputNumber } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const style1 = {
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
  quantityCardContain: { display: "flex", alignItems: "center" },
};

const style2 = {
  card: {
    display: "flex",
    flexDirection: "column",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    margin: "40px",
    width: "40%",
    margin: "auto",
    marginTop: "25px",
  },
  productImage: {
    width: "800px",
    height: "300px",
    padding: 0,
    margin: 0,
  },
  cardContent: {
    paddingTop: 0,
  },
  font14: { fontSize: 14 },
  quantityText: { fontSize: 14, paddingRight: "10px", fontWeight: "bold" },
  quantityField: { border: "1px solid #9CAFB7" },
  quantityCardContain: { display: "flex", alignItems: "center" },
};

export const ProductCard = ({ type = "list", product }) => {
  const navigate = useNavigate();
  const styles = { detail: style2, list: style1 };
  const [quantityCount, setQuantityCount] = useState(1);
  const handleNameClick = ()=>{
    navigate("/product_detail", { state: product })
  }
  const handleReturnClick= ()=>{
    navigate("/")
  }


  const handleAddToCard = async ()=>{
    try {
      if(quantityCount > 0){
            
            await fetch(
                `http://localhost:8081/shopping_cart/add`,
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    name : product.name,
                    image: product.image,
                    quantity: quantityCount,
                    totalPrice: product.price * quantityCount,
                    price: product.price,
                }),
                },
                {
                  mode: "cors",
                }
                )
                .then((response) => response.json())
                
            }
            navigate('/shopping_cart')
          } catch (error) {
            console.log(error)
          }
  }


  return (
    <Card sx={styles[type].card}>
      <CardMedia
        component="img"
        sx={styles[type].productImage}
        image={product.image}
        alt="product image"
      />

      <CardContent sx={styles[type].cardContent}>
        {type === "list" ? (
          <CardActions>
            <Button size="small" sx={{fontWeight: 'bold'}} onClick={handleNameClick}> {product.name}</Button>
          </CardActions>
        ) : (
          <CardContent sx={styles[type].quantityCardContain}>
            <Typography
              sx={styles[type].quantityText}
              color="text.primary"
              variant="button" 
              gutterBottom
            >
              {product.name}
            </Typography>
          </CardContent>
        )}

        <CardContent>
          <Typography
            sx={styles[type].font14}
            color="text.secondary"
            
            gutterBottom
          >
            Detail : {product.longDescription}
          </Typography>
        </CardContent>

        <CardContent sx={styles[type].quantityCardContain}>
          <Typography
            sx={styles[type].quantityText}
            color="text.primary"
            gutterBottom
          >
            Quantity :
          </Typography>
          <InputNumber
            style={styles[type].quantityField}
            min={0}
            // max={10}
            // defaultValue={1}
            value={quantityCount}
            onChange={setQuantityCount}
          />
        </CardContent>

        <CardContent>
          <Typography
            sx={styles[type].font14}
            color="text.primary"
            gutterBottom
          >
            RS. {product.price.toLocaleString("en-US")}
          </Typography>
        </CardContent>

        <CardActions>
          <Button size="small" onClick={handleAddToCard}>Add to Card</Button>
          { type==='detail' &&
            <Button size="small" onClick={handleReturnClick}>Back To Home</Button>
          }

        </CardActions>
      </CardContent>
    </Card>
  );
};
