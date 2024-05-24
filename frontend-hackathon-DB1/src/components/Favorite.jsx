import React, { useState, useEffect } from "react";
import axios from "axios";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import LocalStorageHelper from "../helpers/localstorage-helper";

const Favorite = ({ product }) => {
    const [isFavorited, setIsFavorited] = useState(false);

    useEffect(() => {
        const fetchFavorites = async () => {
            try {
                if (!LocalStorageHelper.isAuthenticated()) {
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
                const favorites = response.data;
                const isFavorited = favorites.some(
                    (favorite) => favorite.productId === product.id
                );
                setIsFavorited(isFavorited);
            } catch (error) {
                console.error("Error fetching favorites:", error);
            }
        };

        fetchFavorites();
    }, [product]);

    const handleFavorite = async () => {
        try {
            if (!LocalStorageHelper.isAuthenticated()) {
                alert("You must be logged in to favorite a product.");
                return;
            }

            if (isFavorited) {
                await axios.delete(
                    `${import.meta.env.VITE_BACKEND_URL}/favorites`,
                    {
                        headers: {
                            Authorization: `Bearer ${LocalStorageHelper.getToken()}`,
                        },
                        data: {
                            productId: product.id,
                        },
                    }
                );
            } else {
                await axios.post(
                    `${import.meta.env.VITE_BACKEND_URL}/favorites`,
                    {
                        productId: product.id,
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${LocalStorageHelper.getToken()}`,
                        },
                    }
                );
            }

            setIsFavorited(!isFavorited);
        } catch (error) {
            console.error("Error toggling favorite:", error);
        }
    };

    return (
        <IconButton
            aria-label={
                isFavorited ? "Remove from favorites" : "Add to favorites"
            }
            onClick={handleFavorite}
        >
            {isFavorited ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </IconButton>
    );
};

export default Favorite;
