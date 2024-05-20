import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import axios from "axios";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(
                    `${import.meta.env.VITE_BACKEND_URL}/products`
                );
                const allProducts = response.data;

                const randomProducts = allProducts
                    .sort(() => 0.5 - Math.random())
                    .slice(0, 8);
                setProducts(randomProducts);
            } catch (error) {
                console.error(
                    "An error occurred while fetching products:",
                    error
                );
            }
        };

        fetchProducts();
    }, []);

    return (
        <div>
            <h2>Produtos Aleatórios</h2>
            <Grid container spacing={2}>
                {products.map((product) => (
                    <Grid item xs={6} sm={3} key={product.id}>
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={product.imageUrl}
                                    alt={product.name}
                                />
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant="h6"
                                        component="div"
                                    >
                                        {product.name}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        Preço: R$ {product.price}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        Parcela: R${" "}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default ProductList;
