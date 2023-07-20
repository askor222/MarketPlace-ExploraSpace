// import React, { useContext} from "react";
// import { ProductContext } from "../../Context/UserProvider";
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { Button, CardActionArea, CardActions } from '@mui/material';
// import { Link } from "react-router-dom";
// import packImage from './img/pack1.jpg';
// import './ProductCard.css'


// export function ProductCard() {
//   const { data, handleAddToCart } = useContext(ProductContext);
  
  
//   const handleBuyClick = (product) => {
//     handleAddToCart({ ...product, quantity: 1 });
// };

//   return (
//     <>
//       {data.map((product) => (
//         <Card key={product.id} sx={{ maxWidth: 345 }} >
//           <CardActionArea>
//             <Link className="Link" to="/ProductDetailPage">
//             <CardMedia
//               component="img"
//               height="140"
//               image={packImage}
//               alt={product.name}
//             />
           
//             <CardContent>
//               <Typography gutterBottom variant="h5" component="div" className="name-product">
//                 {product.name}
//               </Typography>
//               <Typography variant="body2" color="text.secondary">
//                 {product.description}
//               </Typography>
//               <Typography variant="h6" color="text.primary" sx={{ marginTop: '1rem' }}>
//                 {product.price}€
//               </Typography>
//             </CardContent>
//             </Link>
//           </CardActionArea>
          
//           <CardActions>
//             <Button size="small" color="primary" className="buy-button" onClick={() =>handleBuyClick(product)} >
//               Comprar
//             </Button>
//           </CardActions>
//         </Card>
//       ))}
//     </>
//   );
// }







import React, { useContext } from "react";
import { ProductContext } from "../../Context/UserProvider";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from "react-router-dom";
import packImage from './img/pack1.jpg';
import './ProductCard.css';

export function ProductCard({ filter }) {
  const { data, handleAddToCart } = useContext(ProductContext);

  const handleBuyClick = (product) => {
    handleAddToCart({ ...product, quantity: 1 });
  };

  // Función para filtrar los productos según el filtro seleccionado
  const filteredProducts = data.filter((product) => {
    if (filter === 'Todos') {
      return true; // Mostrar todos los productos cuando el filtro está en 'all'
    } else {
      const productName = product.name.toLowerCase();
      return productName.includes(filter.toLowerCase()); // Filtrar por el tipo de producto en el nombre
    }
  });

  return (
    <>
      {filteredProducts.map((product) => (
        <Card key={product.id} sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <Link className="Link" to="/ProductDetailPage">
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
            </Link>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" className="buy-button" onClick={() => handleBuyClick(product)}>
              Comprar
            </Button>
          </CardActions>
        </Card>
      ))}
    </>
  );
}
