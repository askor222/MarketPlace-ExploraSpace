import React, { useContext } from "react";
import { getProduct } from "../../Context/UserProvider";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import packImage from './img/pack1.jpg';
import './ProductCard.css'


export function ProductCard() {
  const { data, handleAddToCart } = useContext(getProduct);
  
  const handleBuyClick = (product) => {
    handleAddToCart({ ...product, quantity: 1 });
};

  return (
    <>
      {data.map((product) => (
        <Card key={product._id} sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={packImage}
              alt={product.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" className="name-product">
                {product.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {product.description}
              </Typography>
              <Typography variant="h6" color="text.primary" sx={{ marginTop: '1rem' }}>
                {product.price}€
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" className="buy-button" onClick={() => handleBuyClick(product)} >
              Comprar
            </Button>
          </CardActions>
        </Card>
      ))}
    </>
  );
}



