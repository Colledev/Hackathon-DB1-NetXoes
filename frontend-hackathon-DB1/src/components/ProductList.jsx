import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import CardActions from "@mui/material/CardActions";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [favorites, setFavorites] = useState({});
    const navigate = useNavigate();

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

    const handleDetails = (productId) => {
        navigate(`/products/${productId}`);
    };

    const handleViewAll = (productId) => {
        navigate(`/products`);
    };

    const handleFavorite = (productId) => {
        setFavorites((prevFavorites) => ({
            ...prevFavorites,
            [productId]: !prevFavorites[productId],
        }));
    };

    return (
        <div className="pb-16 px-4 sm:px-4 md:px-8 lg:px-16 xl:px-40">
            <div className="flex flex-row justify-between items-center">
                <h1 className="text-2xl lg:text-3xl xl:text-4xl">Products</h1>
                <button
                    className="text-gray-500 underline hover:text-black mb-[-5px] text-xl lg:text-xl xl:text-xl mr-2"
                    onClick={handleViewAll}
                >
                    View all
                    <ArrowForwardIcon className="ml-0" />
                </button>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {products.map((product) => (
                    <div key={product.id} className="relative h-full">
                        <div className="bg-white shadow-md p-4 h-full flex flex-col justify-between">
                            <CardActions
                                disableSpacing
                                className="absolute top-2 right-2"
                            >
                                <IconButton
                                    aria-label="add to favorites"
                                    onClick={() => handleFavorite(product.id)}
                                >
                                    {favorites[product.id] ? (
                                        <FavoriteIcon />
                                    ) : (
                                        <FavoriteBorderIcon />
                                    )}
                                </IconButton>
                            </CardActions>
                            <img
                                src={product.imageUrl}
                                alt={product.name}
                                className="w-full h-auto object-fit border border-gray-200"
                            />
                            <div>
                                <h2 className="text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm text-gray-500 mb-[-5px] mt-0.5">
                                    {product.brand.name}
                                </h2>
                                <h3 className="text-base sm:text-base md:text-base lg:text-xl xl:text-xl">
                                    {product.name}
                                </h3>
                            </div>
                            <div>
                                <p className="text-sm sm:text-base md:text-base lg:text-base xl:text-base font-bold mt-2 mb-[-2px]">
                                    R$ {product.price}
                                </p>
                                <p className="text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm text-gray-500">
                                    or {product.installment.number} {"x"} of R${" "}
                                    {product.installment.formattedInstallment}
                                </p>
                            </div>
                            <div>
                                <button
                                    className="w-full hover:bg-gray-500 bg-black text-white font-bold py-2 px-4 rounded mt-4"
                                    onClick={() => handleDetails(product.id)}
                                >
                                    Details
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
