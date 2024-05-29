import React, { useState } from "react";
import CardActions from "@mui/material/CardActions";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Favorite from "./Favorite";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import LocalStorageHelper from "../helpers/localstorage-helper";
import CartAlert from "../utils/CartAlert";
import UnauthorizedAlert from "../utils/UnauthorizedAlert";

const ProductList = ({ products }) => {
    const [favorites, setFavorites] = useState({});
    const [showAlert, setShowAlert] = useState(false);
    const [showUnauthorizedAlert, setShowUnauthorizedAlert] = useState(false);

    const handleAddToCart = async (productId) => {
        try {
            if (!LocalStorageHelper.isAuthenticated()) {
                setShowUnauthorizedAlert(true);
                return;
            }

            await axios.post(
                `${import.meta.env.VITE_BACKEND_URL}/cart/item`,
                {
                    productId,
                    quantity: 1,
                },
                {
                    headers: {
                        Authorization: `Bearer ${LocalStorageHelper.getToken()}`,
                    },
                }
            );
            setShowAlert(true);
        } catch (error) {
            console.error("An error occurred while adding to cart:", error);
        }
    };

    const navigate = useNavigate();

    const updateFavoriteState = (productId, isFavorited) => {
        setFavorites((prevFavorites) => ({
            ...prevFavorites,
            [productId]: isFavorited,
        }));
    };

    const handleDetails = (productId) => {
        navigate(`/products/${productId}`);
    };

    const handleCloseAlert = () => {
        setShowAlert(false);
    };

    const handleCloseUnauthorizedAlert = () => {
        setShowUnauthorizedAlert(false);
    };

    return (
        <div className="pb-16 px-4 sm:px-4 md:px-8 lg:px-16 xl:px-40">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {products.map((product) => (
                    <div key={product.id} className="relative h-full">
                        <div className="bg-white shadow-md p-4 h-full flex flex-col justify-between">
                            <CardActions
                                disableSpacing
                                className="absolute top-2 right-2"
                            >
                                <Favorite
                                    product={product}
                                    isFavorited={favorites[product.id]}
                                    updateFavoriteState={updateFavoriteState}
                                />
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
                                    className="w-2/3 sm:w-1/3 hover:bg-gray-500 bg-black text-white font-bold rounded p-2 px-4 flex items-center justify-center"
                                    onClick={() => handleDetails(product.id)}
                                >
                                    Details
                                </button>
                                <button
                                    className="w-12 h-12 hover:bg-gray-500 bg-black text-white font-bold rounded-full flex items-center justify-center"
                                    onClick={() => handleAddToCart(product.id)}
                                >
                                    <ShoppingCartIcon />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <CartAlert
                showAlert={showAlert}
                handleCloseAlert={handleCloseAlert}
            />
            <UnauthorizedAlert
                showAlert={showUnauthorizedAlert}
                setShowAlert={setShowUnauthorizedAlert}
                handleCloseAlert={handleCloseUnauthorizedAlert}
            />
        </div>
    );
};

export default ProductList;
