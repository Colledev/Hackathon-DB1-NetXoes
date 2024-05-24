import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import LocalStorageHelper from "../helpers/localstorage-helper";
import DeleteIcon from "@mui/icons-material/Delete";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const FavoritePage = () => {
    const [favorites, setFavorites] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchFavorites = async () => {
            try {
                if (!LocalStorageHelper.isAuthenticated()) {
                    navigate.push("/");
                    return;
                }

                const response = await axios.get(
                    `${import.meta.env.VITE_BACKEND_URL}/favorites`,
                    {
                        headers: {
                            Authorization: `Bearer ${LocalStorageHelper.getToken()}`,
                        },
                    }
                );

                setFavorites(response.data);
            } catch (error) {
                console.error("Error fetching favorites:", error);
            }
        };

        fetchFavorites();
    }, []);

    const handleDelete = async (productId) => {
        try {
            await axios.delete(
                `${import.meta.env.VITE_BACKEND_URL}/favorites`,
                {
                    headers: {
                        Authorization: `Bearer ${LocalStorageHelper.getToken()}`,
                    },
                    data: {
                        productId: productId,
                    },
                }
            );

            setFavorites((prevFavorites) =>
                prevFavorites.filter(
                    (favorite) => favorite.product.id !== productId
                )
            );
        } catch (error) {
            console.error("Error deleting favorite:", error);
        }
    };

    const handleDetails = (productId) => {
        navigate(`/products/${productId}`);
    };

    return (
        <div className="flex justify-center flex-col mt-24 sm:md-16 sm:ml-16 md:mr-28 md:ml-28 lg:mr-38 lg:ml-38 xl:mr-80 xl:ml-80 mb-16">
            <p className="text-4xl">Your Favorites</p>
            {favorites.length === 0 ? (
                <div className="text-2xl text-gray-500 mt-2">
                    There are no favorite items
                </div>
            ) : (
                favorites.map((favorite) => (
                    <div
                        className="bg-white shadow-md mb-4 p-4 flex relative"
                        key={favorite.id}
                    >
                        <div className="w-1/3">
                            <img
                                src={favorite.product.imageUrl}
                                alt={favorite.product.name}
                                className="border border-gray-200"
                            />
                        </div>
                        <div className="w-3/4 px-4">
                            <div className="flex flex-col">
                                <p className="text-sm sm:text-sm md:text-base lg:text-base xl:text-xl text-gray-500 mb-[-5px] mt-0.5">
                                    {favorite.product.brand.name}
                                </p>
                                <p className="text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-3xl">
                                    {favorite.product.name}
                                </p>
                                <p className="text-lg sm:text-xl md:text-lg lg:text-xl xl:text-2xl font-bold mt-8 mb-[-2px]">
                                    R$ {favorite.product.price}
                                </p>
                                <p className="text-sm sm:text-sm md:text-base lg:text-base xl:text-lg text-gray-500">
                                    or {favorite.product.installment.number}{" "}
                                    {"x"} of R${" "}
                                    {
                                        favorite.product.installment
                                            .formattedInstallment
                                    }
                                </p>
                            </div>
                            <div className="absolute bottom-4 right-4 mb-2 mr-2 flex flex-col">
                                <div className="flex gap-4 justify-end mb-2 mr-8">
                                    <button className="w-12 h-12 hover:bg-gray-500 bg-black text-white font-bold rounded-full">
                                        <ShoppingCartIcon />
                                    </button>
                                    <button className="w-12 h-12 hover:bg-gray-500 bg-red-800 text-white font-bold rounded-full">
                                        <DeleteIcon
                                            onClick={() =>
                                                handleDelete(
                                                    favorite.product.id
                                                )
                                            }
                                        />
                                    </button>
                                </div>
                                <div className="flex justify-end">
                                    <button
                                        className="w-44 hover:bg-gray-500 bg-black text-white font-bold py-2 rounded"
                                        onClick={() =>
                                            handleDetails(favorite.product.id)
                                        }
                                    >
                                        Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default FavoritePage;
