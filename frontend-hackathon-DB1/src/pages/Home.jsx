import React, { useState, useEffect } from "react";
import axios from "axios";
import BrandsList from "../components/BrandsList";
import ProductList from "../components/ProductList";

const Home = () => {
    const [randomProducts, setRandomProducts] = useState([]);

    useEffect(() => {
        const fetchRandomProducts = async () => {
            try {
                const response = await axios.get(
                    `${import.meta.env.VITE_BACKEND_URL}/products`
                );
                const allProducts = response.data;

                const randomProducts = allProducts
                    .sort(() => 0.5 - Math.random())
                    .slice(0, 8);
                setRandomProducts(randomProducts);
            } catch (error) {
                console.error(
                    "An error occurred while fetching random products:",
                    error
                );
            }
        };

        fetchRandomProducts();
    }, []);

    return (
        <div>
            <BrandsList />
            <ProductList products={randomProducts} />
        </div>
    );
};

export default Home;
