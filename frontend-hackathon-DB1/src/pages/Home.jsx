import React, { useState, useEffect } from "react";
import axios from "axios";
import BrandsList from "../components/BrandsList";
import ProductList from "../components/ProductList";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const [randomProducts, setRandomProducts] = useState([]);
    const navigate = useNavigate();

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
            <div className="pb-16 px-4 sm:px-4 md:px-8 lg:px-16 xl:px-40 mb-[-50px] mt-8">
                <div className="flex flex-row justify-between items-center">
                    <h1 className="text-4xl lg:text-4xl xl:text-4xl">
                        Products
                    </h1>
                    <button
                        className="text-gray-500 underline hover:text-black mb-[-5px] text-xl lg:text-xl xl:text-xl mr-2"
                        onClick={() => navigate(`/products`)}
                    >
                        View all
                        <ArrowForwardIcon className="ml-0" />
                    </button>
                </div>
            </div>
            <ProductList products={randomProducts} />
        </div>
    );
};

export default Home;
