import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import CardActions from "@mui/material/CardActions";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const ProductList = ({ products }) => {
    const [favorites, setFavorites] = useState({});
    const navigate = useNavigate();

    const handleDetails = (productId) => {
        navigate(`/products/${productId}`);
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
                    onClick={() => navigate(`/products`)}
                >
                    View all
                    <ArrowForwardIcon className="ml-0" />
                </button>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
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
                            <div className="flex justify-between items-center space-x-4 mt-4">
                                <button
                                    className="w-1/3 hover:bg-gray-500 bg-black text-white font-bold rounded p-2 px-4 flex items-center justify-center"
                                    onClick={() => handleDetails(product.id)}
                                >
                                    Details
                                </button>
                                <button
                                    className="w-12 h-12 hover:bg-gray-500 bg-black text-white font-bold rounded-full flex items-center justify-center"
                                    onClick={() => handleCart(product.id)}
                                >
                                    <ShoppingCartIcon />
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
