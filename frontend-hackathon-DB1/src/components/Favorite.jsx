import React, { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";

const Favorite = ({ product }) => {
    const [favorites, setFavorites] = useState({});

    const handleFavorite = () => {
        setFavorites((prevFavorites) => ({
            ...prevFavorites,
            [product.id]: !prevFavorites[product.id],
        }));
    };

    return (
        <IconButton aria-label="add to favorites" onClick={handleFavorite}>
            {favorites[product.id] ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </IconButton>
    );
};

export default Favorite;
